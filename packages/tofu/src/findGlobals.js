'use strict'

const { default: traverse } = require('@babel/traverse')
const { isInFunctionDeclaration, isMemberLikeExpression } = require('./util')

const nonReferenceIdentifiers = [
  'FunctionDeclaration',
  'FunctionExpression',
  'ClassMethod',
  'LabeledStatement',
  'BreakStatement',
  'ContinueStatement',
  'CatchClause',
  'ArrayPatten',
  'RestElement',
]

module.exports = { findGlobals }

/**
 *
 * @param {import('@babel/types').Node} ast
 * @returns {Map<string, import('@babel/traverse').NodePath<import('@babel/types').Identifier|import('@babel/types').ThisExpression>[]>}
 */
function findGlobals(ast) {
  /** @type {ReturnType<typeof findGlobals>} */
  const globals = new Map()
  traverse(ast, {
    // ReferencedIdentifier
    Identifier: (path) => {
      // skip if not being used as reference
      const parentType = path.parent.type
      if (nonReferenceIdentifiers.includes(parentType)) {
        return
      }
      if (parentType === 'VariableDeclarator' && path.parent.id === path.node) {
        return
      }
      // skip if this is the key side of a member expression
      if (
        isMemberLikeExpression(path.parent) &&
        path.parent.property === path.node
      ) {
        return
      }
      // skip if this is the key side of an object pattern
      if (parentType === 'ObjectProperty' && path.parent.key === path.node) {
        return
      }
      if (parentType === 'ObjectMethod' && path.parent.key === path.node) {
        return
      }

      // skip if it refers to an existing variable
      const name = path.node.name
      if (path.scope.hasBinding(name, true)) {
        return
      }

      // check if arguments refers to a var, this shouldn't happen in strict mode
      if (name === 'arguments') {
        if (isInFunctionDeclaration(path)) {
          return
        }
      }

      // private names are not globals
      if (parentType === 'PrivateName' && path.parent.id === path.node) {
        return
      }

      // save global
      saveGlobal(path)
    },
    ThisExpression: (path) => {
      if (isInFunctionDeclaration(path)) {
        return
      }
      saveGlobal(path, 'this')
    },
  })

  return globals

  /**
   *
   * @param {import('@babel/traverse').NodePath<import('@babel/types').Identifier|import('@babel/types').ThisExpression>} path
   * @param {string} [name]
   */
  function saveGlobal(path, name) {
    if ('name' in path.node) {
      name = path.node.name
    }
    if (name) {
      // init entry if needed
      if (!globals.has(name)) {
        globals.set(name, [])
      }
      // append ref
      const refsForName =
        /** @type {import('@babel/traverse').NodePath<import('@babel/types').Identifier|import('@babel/types').ThisExpression>[]} */ (
          globals.get(name)
        )
      refsForName.push(path)
    }
  }
}
