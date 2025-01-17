/**
 * @typedef {Object} Policy
 * @property {Record<string,object>} resources
 */

/**
 * @typedef {Object} LavaMoatPluginOptions
 * @property {boolean} [runChecks] - check resulting code with wrapping for correctness
 * @property {boolean} [readableResourceIds] - should resourceIds be readable or turned into numbers - defaults to (mode==='development')
 * @property {boolean} [HtmlWebpackPluginInterop] - add a script tag to the html output for lockdown.js if HtmlWebpackPlugin is in use
 * @property {number} [diagnosticsVerbosity] - a number representing diagnostics output verbosity, the larger the more overwhelming
 * @property {Object} policy - LavaMoat policy
 * @property {Object} [lockdown] - options to pass to lockdown
 */

/**
 * @callback GetEndowmentsForConfig Creates an object populated with only the deep properties specified in the packagePolicy
 * @param {object} sourceRef - Object from which to copy properties
 * @param {object} packagePolicy - LavaMoat policy item representing a package
 * @param {object} unwrapTo - For getters and setters, when the this-value is unwrapFrom, is replaced as unwrapTo
 * @param {object} unwrapFrom - For getters and setters, the this-value to replace (default: targetRef)
 * @return {object} - The targetRef
 *
 */

/**
 * @typedef {Object} EndowmentsToolkit
 * @property {GetEndowmentsForConfig} getEndowmentsForConfig
 * @property {(...args: any[]) => unknown} makeMinimalViewOfRef - Creates a minimal view of a reference (e.g. a global) that only exposes the properties specified in the packagePolicy
 * @property {(...args: any[]) => unknown} copyValueAtPath - Copies a value at a specific path from the source reference to the target reference
 * @property {(...args: any[]) => unknown} applyGetSetPropDescTransforms
 * @property {(...args: any[]) => unknown} applyEndowmentPropDescTransforms
 * @property {(...args: any[]) => unknown} copyWrappedGlobals - Copies wrapped globals from a global reference to a target object with wrapping
 * @property {(...args: any[]) => unknown} createFunctionWrapper - conditionally binds a function - used to ensure functions (like fetch) get called on the this they expect
 */

/**
 * @callback EndowmentsToolkitFactory
 * @returns {EndowmentsToolkit}
 */

/**
 * @typedef {Object} RuntimeNamespace
 * @property {string} root - key used to indicate the root resource
 * @property {Array<[string, string[]]>} idmap - mapping from resourceIds to moduleIds
 * @property {string[]} unenforceable - List of module ids that are impossible to handle for import policy enforcement
 * @property {LavaMoatPluginOptions} options - plugin options
 * @property {Policy} policy - LavaMoat policy
 * @property {Record<string, string>} ENUM - short names for items to minimize bundle size withotu losing readability
 * @property {EndowmentsToolkitFactory} endowmentsToolkit - a function that returns endowmentsToolkit
 * @property {(...args: any[]) => unknown} defaultExport - the function that will be surfaced to the wrapper as `__webpack_require__._LM_`
 */

module.exports = {}
