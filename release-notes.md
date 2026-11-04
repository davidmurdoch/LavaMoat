:robot: I have created a release *beep* *boop*
---


<details><summary>aa: 6.0.0</summary>

## [6.0.0](https://github.com/davidmurdoch/LavaMoat/compare/aa-v5.0.1...aa-v6.0.0) (2026-11-04)


###   BREAKING CHANGES

* Node.js v18 is no longer supported.

### Bug Fixes

* **aa:** avoid colliding symlinks between tests - cleanup was async and overlapping ([#1747](https://github.com/davidmurdoch/LavaMoat/issues/1747)) ([f246c74](https://github.com/davidmurdoch/LavaMoat/commit/f246c747efc020192fc76d2c49ad16455bdc15ca))
* **aa:** normalize root path to not contain a trailing slash regardless of what is provided in input ([#1882](https://github.com/davidmurdoch/LavaMoat/issues/1882)) ([567c2b8](https://github.com/davidmurdoch/LavaMoat/commit/567c2b8709b0c834e234d5962a7cbe5820b22928))
* **aa:** upgrade resolve to v1.22.11 ([#1885](https://github.com/davidmurdoch/LavaMoat/issues/1885)) ([dec8e2a](https://github.com/davidmurdoch/LavaMoat/commit/dec8e2a760490168d8c3085df58bda708995ff35))
* add Node.js v24.0.0 to supported engines ([ad9cdcd](https://github.com/davidmurdoch/LavaMoat/commit/ad9cdcdf83ccbda8bf2eba427d0c80f761f47a0a))
* add Node.js v26.0.0 to engines ([1b115cd](https://github.com/davidmurdoch/LavaMoat/commit/1b115cd2b69a34aa9c3b2206424231a3e9964086))
* **deps:** update dependency resolve to v1.22.12 ([#1951](https://github.com/davidmurdoch/LavaMoat/issues/1951)) ([4a06108](https://github.com/davidmurdoch/LavaMoat/commit/4a06108834c81c3526385fc4578a44e19caab1cd))
* drop Node.js v18 support across the board ([#1886](https://github.com/davidmurdoch/LavaMoat/issues/1886)) ([1190c9b](https://github.com/davidmurdoch/LavaMoat/commit/1190c9b58294abc071eadd7cd14ea11bf63d28b4))
* performant implementation of getPackageDirForModulePath in aa and minor memoization in lavamoat-node ([#1878](https://github.com/davidmurdoch/LavaMoat/issues/1878)) ([467c248](https://github.com/davidmurdoch/LavaMoat/commit/467c248a80b4706b6f51da13fca67d1a64c2dc91))
</details>

<details><summary>allow-scripts: 6.0.0</summary>

## [6.0.0](https://github.com/davidmurdoch/LavaMoat/compare/allow-scripts-v5.1.0...allow-scripts-v6.0.0) (2026-11-04)


###   BREAKING CHANGES

* **allow-scripts:** no longer matches lower version with the allowed
* **allow-scripts:** defaults to pinning versions, requires an action to migrate
* Node.js v18 is no longer supported.

### Features

* **allow-scripts:** add a check command to warn an update is needed in CI ([#1964](https://github.com/davidmurdoch/LavaMoat/issues/1964)) ([e5f6573](https://github.com/davidmurdoch/LavaMoat/commit/e5f657336c78e155c363a820acbe2a6e3588a2c0))
* **allow-scripts:** change the recommended use of allow-scripts to global install ([#1823](https://github.com/davidmurdoch/LavaMoat/issues/1823)) ([48a1d98](https://github.com/davidmurdoch/LavaMoat/commit/48a1d98bae5c6b38e5fe7c7d7ddadb9b77892034))
* **allow-scripts:** install scripts pinned to versions ([fcf80c5](https://github.com/davidmurdoch/LavaMoat/commit/fcf80c50e484bdce38a0911736574b967d8c2960))


### Bug Fixes

* add Node.js v24.0.0 to supported engines ([ad9cdcd](https://github.com/davidmurdoch/LavaMoat/commit/ad9cdcdf83ccbda8bf2eba427d0c80f761f47a0a))
* add Node.js v26.0.0 to engines ([1b115cd](https://github.com/davidmurdoch/LavaMoat/commit/1b115cd2b69a34aa9c3b2206424231a3e9964086))
* **allow-scripts:** fix [#1796](https://github.com/davidmurdoch/LavaMoat/issues/1796) - correct dev flag in setup ([d4f45de](https://github.com/davidmurdoch/LavaMoat/commit/d4f45de0a05360a60f8e25c4d4bdcdd960937bbd))
* **allow-scripts:** fix issues with --skip-versions backward-compatibility ([#1969](https://github.com/davidmurdoch/LavaMoat/issues/1969)) ([e68c877](https://github.com/davidmurdoch/LavaMoat/commit/e68c877af251b81c4cd2be97d81226608d12fa60))
* **allow-scripts:** fix migration logic for v5 ([62f17b4](https://github.com/davidmurdoch/LavaMoat/commit/62f17b4e7c2a363cc11410b69c30708f97d320c1))
* **allow-scripts:** usability improvements/fixes ([#1941](https://github.com/davidmurdoch/LavaMoat/issues/1941)) ([0bd9805](https://github.com/davidmurdoch/LavaMoat/commit/0bd98057ca5a54fc9d9ae679048e1e310d6cb8a7))
* Bump yargs ([#2027](https://github.com/davidmurdoch/LavaMoat/issues/2027)) ([affd672](https://github.com/davidmurdoch/LavaMoat/commit/affd6727aa29111456676eda65e40303da621f62))
* **deps:** fix npm audit issues ([#1853](https://github.com/davidmurdoch/LavaMoat/issues/1853)) ([5ba0f2d](https://github.com/davidmurdoch/LavaMoat/commit/5ba0f2de62aa4feca86d7f96bcce24f76d6aa624))
* **deps:** update dependency @npmcli/run-script to v10.0.4 ([#1917](https://github.com/davidmurdoch/LavaMoat/issues/1917)) ([8c834d7](https://github.com/davidmurdoch/LavaMoat/commit/8c834d7f2d60b493a607ad692e2683b42551c62c))
* **deps:** update dependency type-fest to v4.40.0 ([#1619](https://github.com/davidmurdoch/LavaMoat/issues/1619)) ([4e20306](https://github.com/davidmurdoch/LavaMoat/commit/4e20306371ae605fc414dd645b8e422a68c71b93))
* **deps:** update dependency type-fest to v4.40.1 ([#1624](https://github.com/davidmurdoch/LavaMoat/issues/1624)) ([b918dcc](https://github.com/davidmurdoch/LavaMoat/commit/b918dcc7d7ea2b0a4779eecaa7a853c73ecc5246))
* **deps:** update dependency type-fest to v4.41.0 ([#1657](https://github.com/davidmurdoch/LavaMoat/issues/1657)) ([19e9bf1](https://github.com/davidmurdoch/LavaMoat/commit/19e9bf144c8c43f530501bc500480fed16f995ac))
* drop Node.js v18 support across the board ([#1886](https://github.com/davidmurdoch/LavaMoat/issues/1886)) ([1190c9b](https://github.com/davidmurdoch/LavaMoat/commit/1190c9b58294abc071eadd7cd14ea11bf63d28b4))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @lavamoat/aa bumped from ^5.0.1 to ^6.0.0
</details>

<details><summary>git-safe-dependencies: 2.0.0</summary>

## [2.0.0](https://github.com/davidmurdoch/LavaMoat/compare/git-safe-dependencies-v1.0.3...git-safe-dependencies-v2.0.0) (2026-11-04)


###   BREAKING CHANGES

* Node.js v18 is no longer supported.

### Features

* **git-safe:** increase resilience against network conditions and gi& ([#1766](https://github.com/davidmurdoch/LavaMoat/issues/1766)) ([5a6f9f7](https://github.com/davidmurdoch/LavaMoat/commit/5a6f9f73f3ee9a791bbbf2c5426d4403d2f9882a))


### Bug Fixes

* add Node.js v26.0.0 to engines ([1b115cd](https://github.com/davidmurdoch/LavaMoat/commit/1b115cd2b69a34aa9c3b2206424231a3e9964086))
* **deps:** fix npm audit issues ([#1853](https://github.com/davidmurdoch/LavaMoat/issues/1853)) ([5ba0f2d](https://github.com/davidmurdoch/LavaMoat/commit/5ba0f2de62aa4feca86d7f96bcce24f76d6aa624))
* **deps:** update dependency hosted-git-info to v8.1.0 ([#1612](https://github.com/davidmurdoch/LavaMoat/issues/1612)) ([9bc9538](https://github.com/davidmurdoch/LavaMoat/commit/9bc9538fd4dce1141583e57bddd0f05d2e377188))
* **deps:** update dependency js-yaml to v4.1.1 [security] ([#1851](https://github.com/davidmurdoch/LavaMoat/issues/1851)) ([495b1cf](https://github.com/davidmurdoch/LavaMoat/commit/495b1cf99723260be117950428ece7d0893dc932))
* **deps:** update dependency js-yaml to v4.2.0 [security] ([#2023](https://github.com/davidmurdoch/LavaMoat/issues/2023)) ([bb5a32d](https://github.com/davidmurdoch/LavaMoat/commit/bb5a32d179fee8f56045c8625229a90e73b81742))
* **deps:** update dependency js-yaml to v4.3.0 ([#2056](https://github.com/davidmurdoch/LavaMoat/issues/2056)) ([b728385](https://github.com/davidmurdoch/LavaMoat/commit/b728385ec11cb18d4096e07516684388314da7c9))
* **deps:** update dependency lockfile-lint-api to v5.9.2 ([#1625](https://github.com/davidmurdoch/LavaMoat/issues/1625)) ([5f57d23](https://github.com/davidmurdoch/LavaMoat/commit/5f57d236b09ef86129e63565d1f599bd27aefeb2))
* **deps:** upgrade js-yaml ([#2099](https://github.com/davidmurdoch/LavaMoat/issues/2099)) ([b775fc7](https://github.com/davidmurdoch/LavaMoat/commit/b775fc7ed7064efe5dbcf45141d69e5a5c15f47d))
* drop Node.js v18 support across the board ([#1886](https://github.com/davidmurdoch/LavaMoat/issues/1886)) ([1190c9b](https://github.com/davidmurdoch/LavaMoat/commit/1190c9b58294abc071eadd7cd14ea11bf63d28b4))
* **git-safe:** adapt to github API change ([f5bb92b](https://github.com/davidmurdoch/LavaMoat/commit/f5bb92bfa9ede8347311b3eca7b34dc732460f49))
* **git-safe:** improve git specifier detection and tests ([#1556](https://github.com/davidmurdoch/LavaMoat/issues/1556)) ([aa36b50](https://github.com/davidmurdoch/LavaMoat/commit/aa36b507fcdc8eda6326bb243a36ae1b7611e6cd))
</details>

<details><summary>harden: 0.9.0</summary>

## [0.9.0](https://github.com/davidmurdoch/LavaMoat/compare/harden-v0.8.1...harden-v0.9.0) (2026-11-04)


### Features

* @lavamoat/harden ([#2034](https://github.com/davidmurdoch/LavaMoat/issues/2034)) ([70bcb21](https://github.com/davidmurdoch/LavaMoat/commit/70bcb21aa71d8b365a059f3253eba7db81c95dee))
* **harden:** check --json option ([fa38250](https://github.com/davidmurdoch/LavaMoat/commit/fa38250a19328be9c542b4c909b29e2386657207))
* **harden:** extend script configs ([#2116](https://github.com/davidmurdoch/LavaMoat/issues/2116)) ([92ef20f](https://github.com/davidmurdoch/LavaMoat/commit/92ef20f65246249a9a1ba327213d23845fdff572))
* **harden:** runner scriptsConfig wildcard matching by prefix ([399ea12](https://github.com/davidmurdoch/LavaMoat/commit/399ea12d067229ed7666294e38159851732deaa1))


### Bug Fixes

* avoid accumulating NODE_OPTIONS ([400a836](https://github.com/davidmurdoch/LavaMoat/commit/400a836bad09d347a7b81b492d8e721a1edef9e7))
* **deps:** update dependency semver to ^7.8.4 ([#2112](https://github.com/davidmurdoch/LavaMoat/issues/2112)) ([761f969](https://github.com/davidmurdoch/LavaMoat/commit/761f9691bdf5e3527fde2e0aa82cb65b32ab40a9))
* **deps:** update dependency yaml to ^2.9.0 ([#2113](https://github.com/davidmurdoch/LavaMoat/issues/2113)) ([dc9eaea](https://github.com/davidmurdoch/LavaMoat/commit/dc9eaea6baa593d6bf18dc81f88c960ce74d56bd))
* **harden:** --allow-fs-tmp needs to explicitly set read and write ([#2104](https://github.com/davidmurdoch/LavaMoat/issues/2104)) ([1d80119](https://github.com/davidmurdoch/LavaMoat/commit/1d80119f5c628227272764dbd72d83618967af35))
* **harden:** avoid test flakiness by relying less on one run per process ([#2103](https://github.com/davidmurdoch/LavaMoat/issues/2103)) ([7014109](https://github.com/davidmurdoch/LavaMoat/commit/7014109b4758454f2a1175056482b5e14e9e6f3e))
* **harden:** cleaner PATH handling ([1a0a907](https://github.com/davidmurdoch/LavaMoat/commit/1a0a90753e8e562c1a7bfd01cda65502d7190549))
* **harden:** improve shell-script location resolution in npm ([#2109](https://github.com/davidmurdoch/LavaMoat/issues/2109)) ([9804a25](https://github.com/davidmurdoch/LavaMoat/commit/9804a25d6a40851507a2b2c691b2474caf1fafec))
* **harden:** use the project root for `projectRoot` in the Yarn runner plugin ([#2090](https://github.com/davidmurdoch/LavaMoat/issues/2090)) ([8fa1e34](https://github.com/davidmurdoch/LavaMoat/commit/8fa1e34d4a32d5f68aae469bf2453ddf2d9c98f0))
* **yarn:** avoid attempting to run scripts on yarn update-lockfile mode install ([4d92634](https://github.com/davidmurdoch/LavaMoat/commit/4d92634efa023549793cf1fb0f8beed04482153b))
</details>

<details><summary>lavapack: 10.0.0</summary>

## [10.0.0](https://github.com/davidmurdoch/LavaMoat/compare/lavapack-v9.0.2...lavapack-v10.0.0) (2026-11-04)


###   BREAKING CHANGES

* **lavapack:** The minimum supported language version guaranteed by the bundle created by `@lavamoat/lavapack` is now ES2023.
* Node.js v18 is no longer supported.

### Bug Fixes

* add Node.js v24.0.0 to supported engines ([ad9cdcd](https://github.com/davidmurdoch/LavaMoat/commit/ad9cdcdf83ccbda8bf2eba427d0c80f761f47a0a))
* add Node.js v26.0.0 to engines ([1b115cd](https://github.com/davidmurdoch/LavaMoat/commit/1b115cd2b69a34aa9c3b2206424231a3e9964086))
* **core:** block circular global object endowments ([#1505](https://github.com/davidmurdoch/LavaMoat/issues/1505)) ([6745a0e](https://github.com/davidmurdoch/LavaMoat/commit/6745a0edee85171e4062aaec31d7f25bf3a97e46))
* **deps:** update dependency json-stable-stringify to v1.3.0 ([#1613](https://github.com/davidmurdoch/LavaMoat/issues/1613)) ([f9314d1](https://github.com/davidmurdoch/LavaMoat/commit/f9314d1a238d31a0164356c1c6bd6f6e36246d56))
* **deps:** update dependency readable-stream to v4.7.0 ([#1617](https://github.com/davidmurdoch/LavaMoat/issues/1617)) ([9cb1e4b](https://github.com/davidmurdoch/LavaMoat/commit/9cb1e4be3547de0763be5055ac50eb211d658af5))
* drop Node.js v18 support across the board ([#1886](https://github.com/davidmurdoch/LavaMoat/issues/1886)) ([1190c9b](https://github.com/davidmurdoch/LavaMoat/commit/1190c9b58294abc071eadd7cd14ea11bf63d28b4))
* **lavapack:** minimum ES version now ES2023 ([bb32982](https://github.com/davidmurdoch/LavaMoat/commit/bb3298243a98c74f4e8a59237ef36eeb127f6ce8))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * lavamoat-core bumped from ^19.0.1 to ^20.0.0
</details>

<details><summary>laverna: 3.0.0</summary>

## [3.0.0](https://github.com/davidmurdoch/LavaMoat/compare/laverna-v2.1.0...laverna-v3.0.0) (2026-11-04)


###   BREAKING CHANGES

* Node.js v18 is no longer supported.

### Features

* **laverna:** support Yarn ([#1888](https://github.com/davidmurdoch/LavaMoat/issues/1888)) ([04d2b80](https://github.com/davidmurdoch/LavaMoat/commit/04d2b80ba6d0be262a638779ad83e80641777a5f)), closes [#1883](https://github.com/davidmurdoch/LavaMoat/issues/1883)


### Bug Fixes

* add Node.js v24.0.0 to supported engines ([ad9cdcd](https://github.com/davidmurdoch/LavaMoat/commit/ad9cdcdf83ccbda8bf2eba427d0c80f761f47a0a))
* add Node.js v26.0.0 to engines ([1b115cd](https://github.com/davidmurdoch/LavaMoat/commit/1b115cd2b69a34aa9c3b2206424231a3e9964086))
* **deps:** fix npm audit issues ([#1853](https://github.com/davidmurdoch/LavaMoat/issues/1853)) ([5ba0f2d](https://github.com/davidmurdoch/LavaMoat/commit/5ba0f2de62aa4feca86d7f96bcce24f76d6aa624))
* **deps:** update dependency type-fest to v4.40.0 ([#1619](https://github.com/davidmurdoch/LavaMoat/issues/1619)) ([4e20306](https://github.com/davidmurdoch/LavaMoat/commit/4e20306371ae605fc414dd645b8e422a68c71b93))
* **deps:** update dependency type-fest to v4.40.1 ([#1624](https://github.com/davidmurdoch/LavaMoat/issues/1624)) ([b918dcc](https://github.com/davidmurdoch/LavaMoat/commit/b918dcc7d7ea2b0a4779eecaa7a853c73ecc5246))
* **deps:** update dependency type-fest to v4.41.0 ([#1657](https://github.com/davidmurdoch/LavaMoat/issues/1657)) ([19e9bf1](https://github.com/davidmurdoch/LavaMoat/commit/19e9bf144c8c43f530501bc500480fed16f995ac))
* drop Node.js v18 support across the board ([#1886](https://github.com/davidmurdoch/LavaMoat/issues/1886)) ([1190c9b](https://github.com/davidmurdoch/LavaMoat/commit/1190c9b58294abc071eadd7cd14ea11bf63d28b4))
</details>

<details><summary>node: 3.0.0</summary>

## [3.0.0](https://github.com/davidmurdoch/LavaMoat/compare/node-v2.0.1...node-v3.0.0) (2026-11-04)


###   BREAKING CHANGES

* **node:** add support for location-based includes
* **node:** The API of `generatePolicy()` has changed; instead of resolving with a `LavaMoatPolicy`, it now resolves with an object having properties `policy: LavaMoatPolicy` and `hasWarnings: boolean`. This only affects programmatic consumption of `@lavamoat/node`. To migrate, destructure `policy` from the resolved object. `generatePolicy()` no longer accepts `write`/`writableFs`  options and does not write policy to disk; to write a policy, use `writePolicy `imported from `@lavamoat/node`.
* **node:** major compatibility changes & parallel module inspection
* Node.js v18 is no longer supported.

### Features

* @lavamoat/harden ([#2034](https://github.com/davidmurdoch/LavaMoat/issues/2034)) ([70bcb21](https://github.com/davidmurdoch/LavaMoat/commit/70bcb21aa71d8b365a059f3253eba7db81c95dee))
* **git-safe:** increase resilience against network conditions and gi& ([#1766](https://github.com/davidmurdoch/LavaMoat/issues/1766)) ([5a6f9f7](https://github.com/davidmurdoch/LavaMoat/commit/5a6f9f73f3ee9a791bbbf2c5426d4403d2f9882a))
* **node:** add custom errors ([255aef2](https://github.com/davidmurdoch/LavaMoat/commit/255aef20ff51a041430c5409704e93c6b1c8f6cd))
* **node:** add support for location-based includes ([a6edddd](https://github.com/davidmurdoch/LavaMoat/commit/a6edddd8a2488fe3c0b6a6a78e3959b0f7ee1a18))
* **node:** add support in scuttling ([#1627](https://github.com/davidmurdoch/LavaMoat/issues/1627)) ([587644f](https://github.com/davidmurdoch/LavaMoat/commit/587644fb8ec59499b181d0e8c8d2660257d04015))
* **node:** major compatibility changes & parallel module inspection ([68e6a12](https://github.com/davidmurdoch/LavaMoat/commit/68e6a128418a5c5d150983a84f6636774e0ba80c))
* **node:** support untrusted entrypoints ([fa2b46e](https://github.com/davidmurdoch/LavaMoat/commit/fa2b46e2a66fdf45e5f1868d6fdfb76fbcc2ca0e))
* **node:** use @endo/parser-pipeline ([9fe2cce](https://github.com/davidmurdoch/LavaMoat/commit/9fe2cceb6a969c2df9a5e5511527b7cf4825fb19))


### Bug Fixes

* add Node.js v24.0.0 to supported engines ([ad9cdcd](https://github.com/davidmurdoch/LavaMoat/commit/ad9cdcdf83ccbda8bf2eba427d0c80f761f47a0a))
* add Node.js v26.0.0 to engines ([1b115cd](https://github.com/davidmurdoch/LavaMoat/commit/1b115cd2b69a34aa9c3b2206424231a3e9964086))
* avoid touching experimental localStorage API, fix scuttling tests ([5d65bff](https://github.com/davidmurdoch/LavaMoat/commit/5d65bfff756561b72def44404b17ad421a55955a))
* **browserify,core,lavamoat-node,node:** do not publish extraneous files ([#1866](https://github.com/davidmurdoch/LavaMoat/issues/1866)) ([e7666d8](https://github.com/davidmurdoch/LavaMoat/commit/e7666d804e2f9af71fb0cd948af04a283458b6d1)), closes [#1865](https://github.com/davidmurdoch/LavaMoat/issues/1865)
* Bump yargs ([#2027](https://github.com/davidmurdoch/LavaMoat/issues/2027)) ([affd672](https://github.com/davidmurdoch/LavaMoat/commit/affd6727aa29111456676eda65e40303da621f62))
* **deps:** update babel monorepo ([#1680](https://github.com/davidmurdoch/LavaMoat/issues/1680)) ([9739051](https://github.com/davidmurdoch/LavaMoat/commit/973905160650c659b567088aeef9c44ec814fd7c))
* **deps:** update babel monorepo ([#1982](https://github.com/davidmurdoch/LavaMoat/issues/1982)) ([5b375cb](https://github.com/davidmurdoch/LavaMoat/commit/5b375cb85d85bc3e37962eae5836b67de9ed474c))
* **deps:** update babel monorepo to v7.29.7 ([#2010](https://github.com/davidmurdoch/LavaMoat/issues/2010)) ([9627a86](https://github.com/davidmurdoch/LavaMoat/commit/9627a86d477d9c70b387b860899a30fbbc0ad479))
* **deps:** update definitelytyped ([2eab347](https://github.com/davidmurdoch/LavaMoat/commit/2eab34797e14fa0ff2d2b0aa6fd1ec77cc490900))
* **deps:** update definitelytyped ([#1574](https://github.com/davidmurdoch/LavaMoat/issues/1574)) ([6c2d54e](https://github.com/davidmurdoch/LavaMoat/commit/6c2d54e851ea24a9482a52018b5e0d84716f87b6))
* **deps:** update definitelytyped ([#2073](https://github.com/davidmurdoch/LavaMoat/issues/2073)) ([b7aae4f](https://github.com/davidmurdoch/LavaMoat/commit/b7aae4fad24829323cd52c14ed5f45acd5748ae4))
* **deps:** update dependency @endo/compartment-mapper to v1.6.1 ([b175b93](https://github.com/davidmurdoch/LavaMoat/commit/b175b93b084c4d45d7640e08b1e1db1f313a4ac9))
* **deps:** update dependency @endo/compartment-mapper to v1.6.2 ([#1731](https://github.com/davidmurdoch/LavaMoat/issues/1731)) ([57d2f88](https://github.com/davidmurdoch/LavaMoat/commit/57d2f88f143aece01e7ef5c355c536e0a9ccef18))
* **deps:** update dependency @endo/compartment-mapper to v2.1.0 ([#1962](https://github.com/davidmurdoch/LavaMoat/issues/1962)) ([6bbdddd](https://github.com/davidmurdoch/LavaMoat/commit/6bbdddd2ad8791184df2db030d6cdc5ec92bbaed))
* **deps:** update dependency @endo/evasive-transform to v2 ([#1692](https://github.com/davidmurdoch/LavaMoat/issues/1692)) ([07b1942](https://github.com/davidmurdoch/LavaMoat/commit/07b19423c1df12968cab02a2eb042e450e931e9f))
* **deps:** update dependency @types/node to v18.19.100 ([#1646](https://github.com/davidmurdoch/LavaMoat/issues/1646)) ([90c25d3](https://github.com/davidmurdoch/LavaMoat/commit/90c25d38be61911ea3056756046eafa456236d76))
* **deps:** update dependency @types/node to v18.19.104 ([#1669](https://github.com/davidmurdoch/LavaMoat/issues/1669)) ([0b3461b](https://github.com/davidmurdoch/LavaMoat/commit/0b3461bc265cd543d7255d81283e9ecf59fac765))
* **deps:** update dependency @types/node to v18.19.105 ([#1675](https://github.com/davidmurdoch/LavaMoat/issues/1675)) ([45b9cff](https://github.com/davidmurdoch/LavaMoat/commit/45b9cff7ebec1e7c5875ffe51a511ab699b6ab64))
* **deps:** update dependency @types/node to v18.19.110 ([#1678](https://github.com/davidmurdoch/LavaMoat/issues/1678)) ([fd16808](https://github.com/davidmurdoch/LavaMoat/commit/fd16808eb7aa9ea08e446845857a4fbd33cf2bab))
* **deps:** update dependency @types/node to v18.19.111 ([#1695](https://github.com/davidmurdoch/LavaMoat/issues/1695)) ([2882276](https://github.com/davidmurdoch/LavaMoat/commit/2882276a8605183b37bbf513e1ee181f888b74f2))
* **deps:** update dependency @types/node to v18.19.112 ([#1715](https://github.com/davidmurdoch/LavaMoat/issues/1715)) ([8a48b61](https://github.com/davidmurdoch/LavaMoat/commit/8a48b613876b2acc4358d33f7cb0ffd4cdb7dc80))
* **deps:** update dependency @types/node to v18.19.87 ([#1615](https://github.com/davidmurdoch/LavaMoat/issues/1615)) ([629cfa7](https://github.com/davidmurdoch/LavaMoat/commit/629cfa7cbbede9a7cf52255daf679e1cc6d98771))
* **deps:** update dependency @types/node to v20.19.37 ([#1919](https://github.com/davidmurdoch/LavaMoat/issues/1919)) ([641ab36](https://github.com/davidmurdoch/LavaMoat/commit/641ab3627a3064fbf4fdd1c1b446c7fca6ee9ff7))
* **deps:** update dependency @types/node to v20.19.39 ([#1942](https://github.com/davidmurdoch/LavaMoat/issues/1942)) ([6807d68](https://github.com/davidmurdoch/LavaMoat/commit/6807d68c244b45f8b5bb53979d5d3f08fe188aec))
* **deps:** update dependency @types/node to v20.19.41 ([#1983](https://github.com/davidmurdoch/LavaMoat/issues/1983)) ([3fad831](https://github.com/davidmurdoch/LavaMoat/commit/3fad831c95de9cdaed0307aebe710083c94bf5c4))
* **deps:** update dependency @types/node to v22.20.0 ([#2039](https://github.com/davidmurdoch/LavaMoat/issues/2039)) ([fc95da2](https://github.com/davidmurdoch/LavaMoat/commit/fc95da29f26fbe4fa8ea06645ba53c43b7963a7b))
* **deps:** update dependency json-stable-stringify to v1.3.0 ([#1613](https://github.com/davidmurdoch/LavaMoat/issues/1613)) ([f9314d1](https://github.com/davidmurdoch/LavaMoat/commit/f9314d1a238d31a0164356c1c6bd6f6e36246d56))
* **deps:** update dependency ses to v1.12.0 [security] ([#1605](https://github.com/davidmurdoch/LavaMoat/issues/1605)) ([881ae86](https://github.com/davidmurdoch/LavaMoat/commit/881ae86b9a4c27ab60a3c76a4a69f5de246eb2ed))
* **deps:** update dependency ses to v1.14.0 ([#1746](https://github.com/davidmurdoch/LavaMoat/issues/1746)) ([3e4b834](https://github.com/davidmurdoch/LavaMoat/commit/3e4b834df3430d9f919e7df31f42d23e9b6bb352))
* **deps:** update dependency type-fest to v4.40.0 ([#1619](https://github.com/davidmurdoch/LavaMoat/issues/1619)) ([4e20306](https://github.com/davidmurdoch/LavaMoat/commit/4e20306371ae605fc414dd645b8e422a68c71b93))
* **deps:** update dependency type-fest to v4.40.1 ([#1624](https://github.com/davidmurdoch/LavaMoat/issues/1624)) ([b918dcc](https://github.com/davidmurdoch/LavaMoat/commit/b918dcc7d7ea2b0a4779eecaa7a853c73ecc5246))
* **deps:** update dependency type-fest to v4.41.0 ([#1657](https://github.com/davidmurdoch/LavaMoat/issues/1657)) ([19e9bf1](https://github.com/davidmurdoch/LavaMoat/commit/19e9bf144c8c43f530501bc500480fed16f995ac))
* **deps:** update endo ([#1790](https://github.com/davidmurdoch/LavaMoat/issues/1790)) ([672b3bd](https://github.com/davidmurdoch/LavaMoat/commit/672b3bd4673e7a7c28c043e2c94347d9b4b2e58c))
* **deps:** update endo ([#2048](https://github.com/davidmurdoch/LavaMoat/issues/2048)) ([e07902b](https://github.com/davidmurdoch/LavaMoat/commit/e07902bf52358578531c81be6095bca0d02e8141))
* **deps:** upgrade @endo/compartment-mapper, @endo/evasive-transform ([#1588](https://github.com/davidmurdoch/LavaMoat/issues/1588)) ([81fa130](https://github.com/davidmurdoch/LavaMoat/commit/81fa130089e3e6f48d8b6c639392c58fa14fd338))
* **deps:** upgrade ses ([83f704a](https://github.com/davidmurdoch/LavaMoat/commit/83f704acbfc175a5bc1837752b3b52e597a0d5ad))
* **deps:** upgrade ses This upgrades `ses` to v2.3.0 across the board. ([#2111](https://github.com/davidmurdoch/LavaMoat/issues/2111)) ([32d830b](https://github.com/davidmurdoch/LavaMoat/commit/32d830b947c0e9a0fab4195cc9c6083e9b7b3714))
* **deps:** upgrade ses, @types/node, endo ([c6eca11](https://github.com/davidmurdoch/LavaMoat/commit/c6eca11b3cfc873b7f5776b0d08f6f329b48e490))
* drop Node.js v18 support across the board ([#1886](https://github.com/davidmurdoch/LavaMoat/issues/1886)) ([1190c9b](https://github.com/davidmurdoch/LavaMoat/commit/1190c9b58294abc071eadd7cd14ea11bf63d28b4))
* **node:** fix corner case where policy override path was guessed incorrectly ([efe4ef7](https://github.com/davidmurdoch/LavaMoat/commit/efe4ef7d0967f05646941444150f61b9ceff40fb))
* **node:** fix SES policy violation summary formatting ([6b5b371](https://github.com/davidmurdoch/LavaMoat/commit/6b5b3711ba48ec0710e00b122d70682ffe4e30f3))
* **types:** remove global Object.hasOwn type ([ee9f86b](https://github.com/davidmurdoch/LavaMoat/commit/ee9f86b764b2a18b5863cd769d545692420ebf5a)), closes [#1817](https://github.com/davidmurdoch/LavaMoat/issues/1817)
* upgrade ses to v1.11.0 ([a12dae1](https://github.com/davidmurdoch/LavaMoat/commit/a12dae13e8c7f70082199ba186659ea413e82ded))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @lavamoat/types bumped from ^2.0.0 to ^3.0.0
    * lavamoat-core bumped from ^19.0.1 to ^20.0.0
    * lavamoat-tofu bumped from ^9.1.0 to ^10.0.0
</details>

<details><summary>preinstall-always-fail: 4.0.0</summary>

## [4.0.0](https://github.com/davidmurdoch/LavaMoat/compare/preinstall-always-fail-v3.0.1...preinstall-always-fail-v4.0.0) (2026-11-04)


###   BREAKING CHANGES

* Node.js v18 is no longer supported.

### Bug Fixes

* add Node.js v24.0.0 to supported engines ([ad9cdcd](https://github.com/davidmurdoch/LavaMoat/commit/ad9cdcdf83ccbda8bf2eba427d0c80f761f47a0a))
* add Node.js v26.0.0 to engines ([1b115cd](https://github.com/davidmurdoch/LavaMoat/commit/1b115cd2b69a34aa9c3b2206424231a3e9964086))
* drop Node.js v18 support across the board ([#1886](https://github.com/davidmurdoch/LavaMoat/issues/1886)) ([1190c9b](https://github.com/davidmurdoch/LavaMoat/commit/1190c9b58294abc071eadd7cd14ea11bf63d28b4))
* update message on preinstall-always-fail ([#2124](https://github.com/davidmurdoch/LavaMoat/issues/2124)) ([faa08b9](https://github.com/davidmurdoch/LavaMoat/commit/faa08b97002ab233583ed1ee3d201e2b2c95f995)), closes [#2118](https://github.com/davidmurdoch/LavaMoat/issues/2118) [#655](https://github.com/davidmurdoch/LavaMoat/issues/655)
</details>

<details><summary>react-native-lockdown: 4.0.0</summary>

## [4.0.0](https://github.com/davidmurdoch/LavaMoat/compare/react-native-lockdown-v3.0.0...react-native-lockdown-v4.0.0) (2026-11-04)


###   BREAKING CHANGES

* **node:** The API of `generatePolicy()` has changed; instead of resolving with a `LavaMoatPolicy`, it now resolves with an object having properties `policy: LavaMoatPolicy` and `hasWarnings: boolean`. This only affects programmatic consumption of `@lavamoat/node`. To migrate, destructure `policy` from the resolved object. `generatePolicy()` no longer accepts `write`/`writableFs`  options and does not write policy to disk; to write a policy, use `writePolicy `imported from `@lavamoat/node`.
* **react-native-lockdown:** The minimum supported Node.js version range is now `^22.13.1 || ^24.3.0 || ^26.0.0`.
* Node.js v18 is no longer supported.

### Features

* **node:** use @endo/parser-pipeline ([9fe2cce](https://github.com/davidmurdoch/LavaMoat/commit/9fe2cceb6a969c2df9a5e5511527b7cf4825fb19))
* **react-native-lockdown:** @lavamoat/react-native-lockdown beta ([074c277](https://github.com/davidmurdoch/LavaMoat/commit/074c2775093e94f6a81da0890aaa66db2700ac5a))
* **react-native-lockdown:** ses@1.14.0 ([#1737](https://github.com/davidmurdoch/LavaMoat/issues/1737)) ([3926718](https://github.com/davidmurdoch/LavaMoat/commit/3926718ee5b8fc935158d0ad766247c954e89a82))
* **react-native-lockdown:** use vendored SES version ([#1716](https://github.com/davidmurdoch/LavaMoat/issues/1716)) ([34d8b67](https://github.com/davidmurdoch/LavaMoat/commit/34d8b6766245bf73d5f07f8f970c01400282dc1b))


### Bug Fixes

* **deps:** upgrade ses ([83f704a](https://github.com/davidmurdoch/LavaMoat/commit/83f704acbfc175a5bc1837752b3b52e597a0d5ad))
* **deps:** upgrade ses This upgrades `ses` to v2.3.0 across the board. ([#2111](https://github.com/davidmurdoch/LavaMoat/issues/2111)) ([32d830b](https://github.com/davidmurdoch/LavaMoat/commit/32d830b947c0e9a0fab4195cc9c6083e9b7b3714))
* **deps:** upgrade ses, @types/node, endo ([c6eca11](https://github.com/davidmurdoch/LavaMoat/commit/c6eca11b3cfc873b7f5776b0d08f6f329b48e490))
* drop Node.js v18 support across the board ([#1886](https://github.com/davidmurdoch/LavaMoat/issues/1886)) ([1190c9b](https://github.com/davidmurdoch/LavaMoat/commit/1190c9b58294abc071eadd7cd14ea11bf63d28b4))
* **react-native-lockdown:** add types ([a01f6f5](https://github.com/davidmurdoch/LavaMoat/commit/a01f6f5e15c451a34a776adbfaa851846bfd9d9e))
* **react-native-lockdown:** add vendor directory when creating tarball ([#1728](https://github.com/davidmurdoch/LavaMoat/issues/1728)) ([47d542e](https://github.com/davidmurdoch/LavaMoat/commit/47d542e069253c059d27182d683653f73a9bafd4))
* **react-native-lockdown:** update engines ([89ca28f](https://github.com/davidmurdoch/LavaMoat/commit/89ca28f02462284f67f0bf40fa3ad2a28572647a))
</details>

<details><summary>types: 3.0.0</summary>

## [3.0.0](https://github.com/davidmurdoch/LavaMoat/compare/types-v2.0.0...types-v3.0.0) (2026-11-04)


###   BREAKING CHANGES

* **types:** expand LavaMoatPolicy.include
* Node.js v18 is no longer supported.

### Features

* **types:** add `include` property to LavaMoatPolicy ([3721cc7](https://github.com/davidmurdoch/LavaMoat/commit/3721cc7981ec45dc0267ed348f24bc2e913d5e08))
* **types:** expand LavaMoatPolicy.include ([34e81a9](https://github.com/davidmurdoch/LavaMoat/commit/34e81a993e2e8b713a07a4d6088ce045a088787c))
* **webpack,core:** Add a meta field to policy resource, report webpack optimizations to it. ([a53b434](https://github.com/davidmurdoch/LavaMoat/commit/a53b434e21e074d2261a4e84b85e33fe8aa87278))


### Bug Fixes

* add Node.js v26.0.0 to engines ([1b115cd](https://github.com/davidmurdoch/LavaMoat/commit/1b115cd2b69a34aa9c3b2206424231a3e9964086))
* **deps:** update babel monorepo ([#1680](https://github.com/davidmurdoch/LavaMoat/issues/1680)) ([9739051](https://github.com/davidmurdoch/LavaMoat/commit/973905160650c659b567088aeef9c44ec814fd7c))
* **deps:** update babel monorepo to v7.29.7 ([#2010](https://github.com/davidmurdoch/LavaMoat/issues/2010)) ([9627a86](https://github.com/davidmurdoch/LavaMoat/commit/9627a86d477d9c70b387b860899a30fbbc0ad479))
* drop Node.js v18 support across the board ([#1886](https://github.com/davidmurdoch/LavaMoat/issues/1886)) ([1190c9b](https://github.com/davidmurdoch/LavaMoat/commit/1190c9b58294abc071eadd7cd14ea11bf63d28b4))
* **types:** remove global Object.hasOwn type ([ee9f86b](https://github.com/davidmurdoch/LavaMoat/commit/ee9f86b764b2a18b5863cd769d545692420ebf5a)), closes [#1817](https://github.com/davidmurdoch/LavaMoat/issues/1817)
</details>

<details><summary>webpack: 4.0.0</summary>

## [4.0.0](https://github.com/davidmurdoch/LavaMoat/compare/webpack-v3.0.1...webpack-v4.0.0) (2026-11-04)


###   BREAKING CHANGES

* **node:** The API of `generatePolicy()` has changed; instead of resolving with a `LavaMoatPolicy`, it now resolves with an object having properties `policy: LavaMoatPolicy` and `hasWarnings: boolean`. This only affects programmatic consumption of `@lavamoat/node`. To migrate, destructure `policy` from the resolved object. `generatePolicy()` no longer accepts `write`/`writableFs`  options and does not write policy to disk; to write a policy, use `writePolicy `imported from `@lavamoat/node`.
* Node.js v18 is no longer supported.

### Features

* Add opt-in flag to overwrite policy.json with overrides ([#2061](https://github.com/davidmurdoch/LavaMoat/issues/2061)) ([c4760e6](https://github.com/davidmurdoch/LavaMoat/commit/c4760e62f60b36cbd5a47e4895498a6abf1eb669))
* **node:** use @endo/parser-pipeline ([9fe2cce](https://github.com/davidmurdoch/LavaMoat/commit/9fe2cceb6a969c2df9a5e5511527b7cf4825fb19))
* **webpack,core:** Add a meta field to policy resource, report webpack optimizations to it. ([a53b434](https://github.com/davidmurdoch/LavaMoat/commit/a53b434e21e074d2261a4e84b85e33fe8aa87278))
* **webpack:** add explicit error messages when a compilation concludes with nothing to protect ([f12985f](https://github.com/davidmurdoch/LavaMoat/commit/f12985f15a46e0d022d9caef8a0e5e646529575c))
* **webpack:** add generatePolicyOnly option ([#1789](https://github.com/davidmurdoch/LavaMoat/issues/1789)) ([72900cd](https://github.com/davidmurdoch/LavaMoat/commit/72900cd22a954a15d9fe96a8bd4b2f844ba3797c))
* **webpack:** capture importScripts reference for use in runtime despite scuttling ([#2070](https://github.com/davidmurdoch/LavaMoat/issues/2070)) ([e9c0c48](https://github.com/davidmurdoch/LavaMoat/commit/e9c0c481aba7ff9e4cb3eb087ba88c17d1d4e58e))
* **webpack:** defend webpack runtime from scuttling ([#1740](https://github.com/davidmurdoch/LavaMoat/issues/1740)) ([0f094bd](https://github.com/davidmurdoch/LavaMoat/commit/0f094bd38a1a2c159d5f49864ef97ec57403a43f))
* **webpack:** document and officially release scuttling in webpack plugin ([#1829](https://github.com/davidmurdoch/LavaMoat/issues/1829)) ([9c83030](https://github.com/davidmurdoch/LavaMoat/commit/9c83030d97371478bf59b10d636e63168bd8473d))
* **webpack:** enable syntax checks by default, check prior to concatenation. ([e74a55b](https://github.com/davidmurdoch/LavaMoat/commit/e74a55bdc7f83739d8d1fec0b3c5f6852470c6cc))
* **webpack:** null runtime ([4374b7a](https://github.com/davidmurdoch/LavaMoat/commit/4374b7a65ef551d123396b32e78cd6fd976ecd8e))
* **webpack:** override the devtool setting that is likely to break lavamoat ([#1933](https://github.com/davidmurdoch/LavaMoat/issues/1933)) ([7a724de](https://github.com/davidmurdoch/LavaMoat/commit/7a724de81570f1e44ec366b14d87b5c3011386a9))
* **webpack:** prevent webpack from eliminating reexports and failing policy enforcement ([#1827](https://github.com/davidmurdoch/LavaMoat/issues/1827)) ([5f4d4fc](https://github.com/davidmurdoch/LavaMoat/commit/5f4d4fcdf6395bd749918d2b6bed7c5e822629e2))
* **webpack:** properly expose types for the plugin ([#1741](https://github.com/davidmurdoch/LavaMoat/issues/1741)) ([abd4450](https://github.com/davidmurdoch/LavaMoat/commit/abd445066bd698ada041bc717b8ebcee5ea6b296))
* **webpack:** repair for window.event deprecated leaky poperty ([#1785](https://github.com/davidmurdoch/LavaMoat/issues/1785)) ([86d944b](https://github.com/davidmurdoch/LavaMoat/commit/86d944bfc0f65e5d27c6f598add72016de579565))
* **webpack:** repairs for globals that need more than unwrap from core ([#1751](https://github.com/davidmurdoch/LavaMoat/issues/1751)) ([86ad964](https://github.com/davidmurdoch/LavaMoat/commit/86ad964f6b1d33950aea10849052e8cfc8459663))
* **webpack:** sourcemap-preserving evasive transforms ([#1965](https://github.com/davidmurdoch/LavaMoat/issues/1965)) ([334e2f4](https://github.com/davidmurdoch/LavaMoat/commit/334e2f4fcef1d5d0c5372888fa87e9bb77471461))
* **webpack:** static shims for runtime, runtimeConfigurationPerChunk_experimental to control embedded runtime options ([#1792](https://github.com/davidmurdoch/LavaMoat/issues/1792)) ([c69a08d](https://github.com/davidmurdoch/LavaMoat/commit/c69a08d5af47e20ee0580fa5f0fcc804cb6d6928))
* **webpack:** unlockedChunksUnsafe option to refrain from protecting selected chunks ([#1375](https://github.com/davidmurdoch/LavaMoat/issues/1375)) ([1f24683](https://github.com/davidmurdoch/LavaMoat/commit/1f24683e2e6cddefbc492c0925d0d7d5e3b995c0))
* **webpack:** use the final module info in connections to handle the optimizations webpack sideEffect option does. wip ([9c7b305](https://github.com/davidmurdoch/LavaMoat/commit/9c7b3050460b4cc79b04ac422bdfb69540893bd9))
* **webpack:** webpack context modules and chunk lazy loading support ([#1553](https://github.com/davidmurdoch/LavaMoat/issues/1553)) ([3602f65](https://github.com/davidmurdoch/LavaMoat/commit/3602f6598196ec99287fe239aa1708d9f80c0e0c))


### Bug Fixes

* add Node.js v24.0.0 to supported engines ([ad9cdcd](https://github.com/davidmurdoch/LavaMoat/commit/ad9cdcdf83ccbda8bf2eba427d0c80f761f47a0a))
* add Node.js v26.0.0 to engines ([1b115cd](https://github.com/davidmurdoch/LavaMoat/commit/1b115cd2b69a34aa9c3b2206424231a3e9964086))
* **core,webpack:** remove deprecated lockdown options ([efec539](https://github.com/davidmurdoch/LavaMoat/commit/efec5391eec838689ce2426de617571d0f276f2c)), closes [#1578](https://github.com/davidmurdoch/LavaMoat/issues/1578)
* **core:** block circular global object endowments ([#1505](https://github.com/davidmurdoch/LavaMoat/issues/1505)) ([6745a0e](https://github.com/davidmurdoch/LavaMoat/commit/6745a0edee85171e4062aaec31d7f25bf3a97e46))
* **deps:** update babel monorepo ([afc9fe5](https://github.com/davidmurdoch/LavaMoat/commit/afc9fe5fef98c53abe014ff657a1d4f59883abe8))
* **deps:** update babel monorepo ([#1680](https://github.com/davidmurdoch/LavaMoat/issues/1680)) ([9739051](https://github.com/davidmurdoch/LavaMoat/commit/973905160650c659b567088aeef9c44ec814fd7c))
* **deps:** update babel monorepo ([#1982](https://github.com/davidmurdoch/LavaMoat/issues/1982)) ([5b375cb](https://github.com/davidmurdoch/LavaMoat/commit/5b375cb85d85bc3e37962eae5836b67de9ed474c))
* **deps:** update babel monorepo to v7.26.9 ([6a9dc73](https://github.com/davidmurdoch/LavaMoat/commit/6a9dc735f18a5b95e82b86ec2bd466ee4433172f))
* **deps:** update babel monorepo to v7.27.0 ([#1589](https://github.com/davidmurdoch/LavaMoat/issues/1589)) ([efd83d7](https://github.com/davidmurdoch/LavaMoat/commit/efd83d7ea7a5f5f9d2157248d4e2f8b7f9c48c56))
* **deps:** update babel monorepo to v7.29.7 ([#2010](https://github.com/davidmurdoch/LavaMoat/issues/2010)) ([9627a86](https://github.com/davidmurdoch/LavaMoat/commit/9627a86d477d9c70b387b860899a30fbbc0ad479))
* **deps:** update definitelytyped ([2eab347](https://github.com/davidmurdoch/LavaMoat/commit/2eab34797e14fa0ff2d2b0aa6fd1ec77cc490900))
* **deps:** update dependency json-stable-stringify to v1.3.0 ([#1613](https://github.com/davidmurdoch/LavaMoat/issues/1613)) ([f9314d1](https://github.com/davidmurdoch/LavaMoat/commit/f9314d1a238d31a0164356c1c6bd6f6e36246d56))
* **deps:** update dependency ses to v1.12.0 [security] ([#1605](https://github.com/davidmurdoch/LavaMoat/issues/1605)) ([881ae86](https://github.com/davidmurdoch/LavaMoat/commit/881ae86b9a4c27ab60a3c76a4a69f5de246eb2ed))
* **deps:** update dependency ses to v1.14.0 ([#1746](https://github.com/davidmurdoch/LavaMoat/issues/1746)) ([3e4b834](https://github.com/davidmurdoch/LavaMoat/commit/3e4b834df3430d9f919e7df31f42d23e9b6bb352))
* **deps:** upgrade ses ([83f704a](https://github.com/davidmurdoch/LavaMoat/commit/83f704acbfc175a5bc1837752b3b52e597a0d5ad))
* **deps:** upgrade ses This upgrades `ses` to v2.3.0 across the board. ([#2111](https://github.com/davidmurdoch/LavaMoat/issues/2111)) ([32d830b](https://github.com/davidmurdoch/LavaMoat/commit/32d830b947c0e9a0fab4195cc9c6083e9b7b3714))
* **deps:** upgrade ses, @types/node, endo ([c6eca11](https://github.com/davidmurdoch/LavaMoat/commit/c6eca11b3cfc873b7f5776b0d08f6f329b48e490))
* drop Node.js v18 support across the board ([#1886](https://github.com/davidmurdoch/LavaMoat/issues/1886)) ([1190c9b](https://github.com/davidmurdoch/LavaMoat/commit/1190c9b58294abc071eadd7cd14ea11bf63d28b4))
* performant implementation of getPackageDirForModulePath in aa and minor memoization in lavamoat-node ([#1878](https://github.com/davidmurdoch/LavaMoat/issues/1878)) ([467c248](https://github.com/davidmurdoch/LavaMoat/commit/467c248a80b4706b6f51da13fca67d1a64c2dc91))
* **tofu:** stop treating float typed arrays as primordials ([#2120](https://github.com/davidmurdoch/LavaMoat/issues/2120)) ([a299274](https://github.com/davidmurdoch/LavaMoat/commit/a299274b20d3c85d5418cb5d6ad3a23a94980750))
* typescript got confused into creating a cyclic reference in types for scuttling in core ([5e25a36](https://github.com/davidmurdoch/LavaMoat/commit/5e25a361094a7b3ed7ae2744cd405910f9dc3baa))
* upgrade ses to v1.11.0 ([a12dae1](https://github.com/davidmurdoch/LavaMoat/commit/a12dae13e8c7f70082199ba186659ea413e82ded))
* **webpack:** adapt scuttling config for runtime regardless of where it comes from ([#1839](https://github.com/davidmurdoch/LavaMoat/issues/1839)) ([b1ad321](https://github.com/davidmurdoch/LavaMoat/commit/b1ad321cb8b3e36a44fa661a7d2f5899f7a08fdc))
* **webpack:** add j to the list of harmless fields on __webpack_require__ ([#1838](https://github.com/davidmurdoch/LavaMoat/issues/1838)) ([7035a40](https://github.com/davidmurdoch/LavaMoat/commit/7035a404627d038e9ff7b4d5fd2e7b7ed8928194))
* **webpack:** adjust MessageEvent repair to reliably work in the bizarre context of Firefox webextension contentscript ([#1830](https://github.com/davidmurdoch/LavaMoat/issues/1830)) ([33d83d7](https://github.com/davidmurdoch/LavaMoat/commit/33d83d7402f9b914c7f4d7f9cd18f979c2f406c5))
* **webpack:** avoid scuttling the global Webpack uses for sharing chunks ([#1762](https://github.com/davidmurdoch/LavaMoat/issues/1762)) ([6f39c95](https://github.com/davidmurdoch/LavaMoat/commit/6f39c95407a280aa13bf90adb634f8b86821e0f0))
* **webpack:** do not completely disable sourcemaps ([#1935](https://github.com/davidmurdoch/LavaMoat/issues/1935)) ([5bbb0d7](https://github.com/davidmurdoch/LavaMoat/commit/5bbb0d7c28925c419b7d9d0667ecb5f26ceaa182))
* **webpack:** expose dn and ns utils for ESM spec compatibility on the runtime global ([#2115](https://github.com/davidmurdoch/LavaMoat/issues/2115)) ([054890a](https://github.com/davidmurdoch/LavaMoat/commit/054890a52ae72aa598b1c82a677f2d665a3d81f9))
* **webpack:** fix how ambient asset files requests are filtered ([#1739](https://github.com/davidmurdoch/LavaMoat/issues/1739)) ([3f914cf](https://github.com/davidmurdoch/LavaMoat/commit/3f914cf3716d3a4978a80f419fb265db10fc0ae6))
* **webpack:** fix the naive assumption that there can only be 1 module with a certain path ([#1793](https://github.com/davidmurdoch/LavaMoat/issues/1793)) ([262bb3d](https://github.com/davidmurdoch/LavaMoat/commit/262bb3d61016b42977d0c21c83b22cfbbd78a3e9))
* **webpack:** handle moduleID/path duplication scenarios at build time ([6aefe85](https://github.com/davidmurdoch/LavaMoat/commit/6aefe85cb33f2433817f70163f53e5b3164f2228))
* **webpack:** import types from ses ([78aca55](https://github.com/davidmurdoch/LavaMoat/commit/78aca5583adc5366c8717fd196b72bdd828b38ed))
* **webpack:** MessageEvent repair should not prevent further overrides ([#1787](https://github.com/davidmurdoch/LavaMoat/issues/1787)) ([0c8fc19](https://github.com/davidmurdoch/LavaMoat/commit/0c8fc1914e0e7a8432edbf6d9e8d2604ee17d291))
* **webpack:** preserve source maps correctnes when SES is inlined ([#1932](https://github.com/davidmurdoch/LavaMoat/issues/1932)) ([23bcc79](https://github.com/davidmurdoch/LavaMoat/commit/23bcc79e9dc8190fbaaee4107b0a7af90417faf6))
* **webpack:** reproducible builds require runtime to be stable on unstable input ordering ([#2014](https://github.com/davidmurdoch/LavaMoat/issues/2014)) ([798651c](https://github.com/davidmurdoch/LavaMoat/commit/798651c21f46c1db01ab69322126514d87c52f22))
* **webpack:** strip policy meta from the policy that goes into the bundle, fix related tests ([645d0f2](https://github.com/davidmurdoch/LavaMoat/commit/645d0f2311a9871694b6bf14bb4ce3c81b2311c8))
* **webpack:** undo the forced overwrite of parent and top references ([#1666](https://github.com/davidmurdoch/LavaMoat/issues/1666)) ([adec627](https://github.com/davidmurdoch/LavaMoat/commit/adec627069e201a7353a89876d0964dd54e1fa9b))


### Performance Improvements

* **webpack:** index module resource lookups ([5d3f78d](https://github.com/davidmurdoch/LavaMoat/commit/5d3f78d73ec0dc5fdf0ed5e5f6a3e2b3cdd5c6fa))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @lavamoat/aa bumped from ^5.0.1 to ^6.0.0
    * @lavamoat/types bumped from ^2.0.0 to ^3.0.0
    * lavamoat-core bumped from ^19.0.1 to ^20.0.0
</details>

<details><summary>lavamoat: 12.0.0</summary>

## [12.0.0](https://github.com/davidmurdoch/LavaMoat/compare/lavamoat-v11.1.7...lavamoat-v12.0.0) (2026-11-04)


###   BREAKING CHANGES

* Node.js v18 is no longer supported.
* indicate breaking change propagation: stop overwriting the policy file while loading. ([#1835](https://github.com/davidmurdoch/LavaMoat/issues/1835))

### Features

* **lavamoat-node:** expose top level export as return value of runLava ([#1872](https://github.com/davidmurdoch/LavaMoat/issues/1872)) ([f360ca4](https://github.com/davidmurdoch/LavaMoat/commit/f360ca4d75d9c1ceec8e91617f42ff7b3daea075))
* **lavamoat-node:** modernize resolve in lavamoat classic, opt-in only ([#1928](https://github.com/davidmurdoch/LavaMoat/issues/1928)) ([21f8d97](https://github.com/davidmurdoch/LavaMoat/commit/21f8d97ad73a314f9034c7ec303067924ea0b91f))


### Bug Fixes

* add Node.js v24.0.0 to supported engines ([ad9cdcd](https://github.com/davidmurdoch/LavaMoat/commit/ad9cdcdf83ccbda8bf2eba427d0c80f761f47a0a))
* add Node.js v26.0.0 to engines ([1b115cd](https://github.com/davidmurdoch/LavaMoat/commit/1b115cd2b69a34aa9c3b2206424231a3e9964086))
* avoid touching experimental localStorage API, fix scuttling tests ([5d65bff](https://github.com/davidmurdoch/LavaMoat/commit/5d65bfff756561b72def44404b17ad421a55955a))
* **browserify,core,lavamoat-node,node:** do not publish extraneous files ([#1866](https://github.com/davidmurdoch/LavaMoat/issues/1866)) ([e7666d8](https://github.com/davidmurdoch/LavaMoat/commit/e7666d804e2f9af71fb0cd948af04a283458b6d1)), closes [#1865](https://github.com/davidmurdoch/LavaMoat/issues/1865)
* Bump yargs ([#2027](https://github.com/davidmurdoch/LavaMoat/issues/2027)) ([affd672](https://github.com/davidmurdoch/LavaMoat/commit/affd6727aa29111456676eda65e40303da621f62))
* **core:** block circular global object endowments ([#1505](https://github.com/davidmurdoch/LavaMoat/issues/1505)) ([6745a0e](https://github.com/davidmurdoch/LavaMoat/commit/6745a0edee85171e4062aaec31d7f25bf3a97e46))
* **core:** move dependency execute after policy check ([#1974](https://github.com/davidmurdoch/LavaMoat/issues/1974)) ([886e82f](https://github.com/davidmurdoch/LavaMoat/commit/886e82fab62969d4fa45d974796dee45c1e37092))
* **deps:** update babel monorepo ([afc9fe5](https://github.com/davidmurdoch/LavaMoat/commit/afc9fe5fef98c53abe014ff657a1d4f59883abe8))
* **deps:** update babel monorepo ([#1680](https://github.com/davidmurdoch/LavaMoat/issues/1680)) ([9739051](https://github.com/davidmurdoch/LavaMoat/commit/973905160650c659b567088aeef9c44ec814fd7c))
* **deps:** update babel monorepo to v7.29.7 ([#2010](https://github.com/davidmurdoch/LavaMoat/issues/2010)) ([9627a86](https://github.com/davidmurdoch/LavaMoat/commit/9627a86d477d9c70b387b860899a30fbbc0ad479))
* **deps:** update dependency corepack to v0.32.0 ([#1611](https://github.com/davidmurdoch/LavaMoat/issues/1611)) ([854bf40](https://github.com/davidmurdoch/LavaMoat/commit/854bf40c464686bf866542dd2278d3121def064f))
* **deps:** update dependency corepack to v0.33.0 ([#1682](https://github.com/davidmurdoch/LavaMoat/issues/1682)) ([0de2351](https://github.com/davidmurdoch/LavaMoat/commit/0de235120f3ad41d55462ebda645ded45d86accc))
* **deps:** update dependency corepack to v0.34.6 ([#1808](https://github.com/davidmurdoch/LavaMoat/issues/1808)) ([7b9a804](https://github.com/davidmurdoch/LavaMoat/commit/7b9a8049f03dc598febcd5dc3633f6680f47e0b7))
* **deps:** update dependency corepack to v0.35.0 ([#1988](https://github.com/davidmurdoch/LavaMoat/issues/1988)) ([22b874a](https://github.com/davidmurdoch/LavaMoat/commit/22b874ad686c3c2471e55d001fc3eadc1dac1d7e))
* **deps:** update dependency resolve to v1.22.11 ([#1920](https://github.com/davidmurdoch/LavaMoat/issues/1920)) ([5ed6202](https://github.com/davidmurdoch/LavaMoat/commit/5ed6202b61a0eb01694156ab9a291b7fcaa5044d))
* **deps:** update dependency resolve to v1.22.12 ([#1951](https://github.com/davidmurdoch/LavaMoat/issues/1951)) ([4a06108](https://github.com/davidmurdoch/LavaMoat/commit/4a06108834c81c3526385fc4578a44e19caab1cd))
* drop Node.js v18 support across the board ([#1886](https://github.com/davidmurdoch/LavaMoat/issues/1886)) ([1190c9b](https://github.com/davidmurdoch/LavaMoat/commit/1190c9b58294abc071eadd7cd14ea11bf63d28b4))
* indicate breaking change propagation: stop overwriting the policy file while loading. ([#1835](https://github.com/davidmurdoch/LavaMoat/issues/1835)) ([81f2cb0](https://github.com/davidmurdoch/LavaMoat/commit/81f2cb0bf00e61c9ddfb637ad20deacba95ca967))
* **lavamoat-node:** cli entry args ([#1857](https://github.com/davidmurdoch/LavaMoat/issues/1857)) ([#1859](https://github.com/davidmurdoch/LavaMoat/issues/1859)) ([f949577](https://github.com/davidmurdoch/LavaMoat/commit/f9495777dc0fe853064fe1de241a0421e925b212))
* **lavamoat-node:** fix missing cjs extension in the list of extensions to resolve ([#1856](https://github.com/davidmurdoch/LavaMoat/issues/1856)) ([f2eeced](https://github.com/davidmurdoch/LavaMoat/commit/f2eecedbcf6f501e4f7163f47b97821b9e5dc8a1))
* **lavamoat-node:** fix old resolution bug where paths containing # were misinterpreted ([#1971](https://github.com/davidmurdoch/LavaMoat/issues/1971)) ([494f852](https://github.com/davidmurdoch/LavaMoat/commit/494f85238577bb3ced97ee1c08a412f0f9a13873))
* **lavamoat-node:** remove corepack as prod dep ([#2030](https://github.com/davidmurdoch/LavaMoat/issues/2030)) ([18d7e88](https://github.com/davidmurdoch/LavaMoat/commit/18d7e887116d1990007038aafbe0b4b36007ac23))
* **lavamoat-node:** support packages with falsy main field ([e8c489c](https://github.com/davidmurdoch/LavaMoat/commit/e8c489c5fe3054bf6099658b3e9f3d1da07f7bc2)), closes [#1706](https://github.com/davidmurdoch/LavaMoat/issues/1706)
* performant implementation of getPackageDirForModulePath in aa and minor memoization in lavamoat-node ([#1878](https://github.com/davidmurdoch/LavaMoat/issues/1878)) ([467c248](https://github.com/davidmurdoch/LavaMoat/commit/467c248a80b4706b6f51da13fca67d1a64c2dc91))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @lavamoat/aa bumped from ^5.0.1 to ^6.0.0
    * lavamoat-core bumped from ^19.0.1 to ^20.0.0
    * lavamoat-tofu bumped from ^9.1.0 to ^10.0.0
</details>

<details><summary>lavamoat-browserify: 21.0.0</summary>

## [21.0.0](https://github.com/davidmurdoch/LavaMoat/compare/lavamoat-browserify-v20.0.9...lavamoat-browserify-v21.0.0) (2026-11-04)


###   BREAKING CHANGES

* Node.js v18 is no longer supported.
* indicate breaking change propagation: stop overwriting the policy file while loading. ([#1835](https://github.com/davidmurdoch/LavaMoat/issues/1835))

### Bug Fixes

* add Node.js v24.0.0 to supported engines ([ad9cdcd](https://github.com/davidmurdoch/LavaMoat/commit/ad9cdcdf83ccbda8bf2eba427d0c80f761f47a0a))
* add Node.js v26.0.0 to engines ([1b115cd](https://github.com/davidmurdoch/LavaMoat/commit/1b115cd2b69a34aa9c3b2206424231a3e9964086))
* **browserify,core,lavamoat-node,node:** do not publish extraneous files ([#1866](https://github.com/davidmurdoch/LavaMoat/issues/1866)) ([e7666d8](https://github.com/davidmurdoch/LavaMoat/commit/e7666d804e2f9af71fb0cd948af04a283458b6d1)), closes [#1865](https://github.com/davidmurdoch/LavaMoat/issues/1865)
* **browserify:** hotfix for incorrect policy validation in lavamoat-browserify ([#1840](https://github.com/davidmurdoch/LavaMoat/issues/1840)) ([a675e4a](https://github.com/davidmurdoch/LavaMoat/commit/a675e4a301816915ddf4fb71e33370974c73ba96))
* **core:** block circular global object endowments ([#1505](https://github.com/davidmurdoch/LavaMoat/issues/1505)) ([6745a0e](https://github.com/davidmurdoch/LavaMoat/commit/6745a0edee85171e4062aaec31d7f25bf3a97e46))
* **deps:** update babel monorepo ([afc9fe5](https://github.com/davidmurdoch/LavaMoat/commit/afc9fe5fef98c53abe014ff657a1d4f59883abe8))
* **deps:** update babel monorepo ([#1680](https://github.com/davidmurdoch/LavaMoat/issues/1680)) ([9739051](https://github.com/davidmurdoch/LavaMoat/commit/973905160650c659b567088aeef9c44ec814fd7c))
* **deps:** update babel monorepo to v7.29.7 ([#2010](https://github.com/davidmurdoch/LavaMoat/issues/2010)) ([9627a86](https://github.com/davidmurdoch/LavaMoat/commit/9627a86d477d9c70b387b860899a30fbbc0ad479))
* **deps:** update dependency readable-stream to v4.7.0 ([#1617](https://github.com/davidmurdoch/LavaMoat/issues/1617)) ([9cb1e4b](https://github.com/davidmurdoch/LavaMoat/commit/9cb1e4be3547de0763be5055ac50eb211d658af5))
* drop Node.js v18 support across the board ([#1886](https://github.com/davidmurdoch/LavaMoat/issues/1886)) ([1190c9b](https://github.com/davidmurdoch/LavaMoat/commit/1190c9b58294abc071eadd7cd14ea11bf63d28b4))
* indicate breaking change propagation: stop overwriting the policy file while loading. ([#1835](https://github.com/davidmurdoch/LavaMoat/issues/1835)) ([81f2cb0](https://github.com/davidmurdoch/LavaMoat/commit/81f2cb0bf00e61c9ddfb637ad20deacba95ca967))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @lavamoat/aa bumped from ^5.0.1 to ^6.0.0
    * @lavamoat/lavapack bumped from ^9.0.2 to ^10.0.0
    * lavamoat-core bumped from ^19.0.1 to ^20.0.0
  * devDependencies
    * lavamoat bumped from 11.1.7 to 12.0.0
</details>

<details><summary>lavamoat-core: 20.0.0</summary>

## [20.0.0](https://github.com/davidmurdoch/LavaMoat/compare/lavamoat-core-v19.0.1...lavamoat-core-v20.0.0) (2026-11-04)


###   BREAKING CHANGES

* **core:** support expanded LavaMoatPolicy.include
* **node:** The API of `generatePolicy()` has changed; instead of resolving with a `LavaMoatPolicy`, it now resolves with an object having properties `policy: LavaMoatPolicy` and `hasWarnings: boolean`. This only affects programmatic consumption of `@lavamoat/node`. To migrate, destructure `policy` from the resolved object. `generatePolicy()` no longer accepts `write`/`writableFs`  options and does not write policy to disk; to write a policy, use `writePolicy `imported from `@lavamoat/node`.
* Node.js v18 is no longer supported.
* **core:** stop overwriting the policy file while loading. ([#1835](https://github.com/davidmurdoch/LavaMoat/issues/1835))

### Features

* **core:** add "redefine" global policy value to schema ([09d78ba](https://github.com/davidmurdoch/LavaMoat/commit/09d78badd3b3cc2e982ce690e84133d9959f43b2)), closes [#1583](https://github.com/davidmurdoch/LavaMoat/issues/1583)
* **core:** add informative errors when the result of policy merge contains invalid entries ([#1848](https://github.com/davidmurdoch/LavaMoat/issues/1848)) ([fefd457](https://github.com/davidmurdoch/LavaMoat/commit/fefd457d53c2944fe3d2ee719cd741f5eafb8987))
* **core:** export MODULE_REFS constant; fix strict mode in function wrapper ([338caaf](https://github.com/davidmurdoch/LavaMoat/commit/338caaf82a2beae7273ff65c3828796e99a4b227))
* **core:** expose policy override compact function ([bf19d9d](https://github.com/davidmurdoch/LavaMoat/commit/bf19d9d283d03910d5e8ec95ab5ae3940a7fa24d))
* **core:** relax scuttling by skipping intrinsics ([#1645](https://github.com/davidmurdoch/LavaMoat/issues/1645)) ([5040521](https://github.com/davidmurdoch/LavaMoat/commit/5040521a089e10a03dcb882d37b0129b8d64a2c3))
* **core:** support expanded LavaMoatPolicy.include ([1fd71be](https://github.com/davidmurdoch/LavaMoat/commit/1fd71bec09835802da87691b93e56cf964a27630))
* **core:** support Firefox contentscript shenanigans with cross-realm window prototypes ([#1786](https://github.com/davidmurdoch/LavaMoat/issues/1786)) ([271598f](https://github.com/davidmurdoch/LavaMoat/commit/271598f59161ba83f525a3d340916b32e6f4a96a))
* **core:** support untrusted entrypoints ([36018de](https://github.com/davidmurdoch/LavaMoat/commit/36018dea2bbe9b7d16588e0333974dd98ee2d02d))
* **node:** add support in scuttling ([#1627](https://github.com/davidmurdoch/LavaMoat/issues/1627)) ([587644f](https://github.com/davidmurdoch/LavaMoat/commit/587644fb8ec59499b181d0e8c8d2660257d04015))
* **node:** use @endo/parser-pipeline ([9fe2cce](https://github.com/davidmurdoch/LavaMoat/commit/9fe2cceb6a969c2df9a5e5511527b7cf4825fb19))
* **webpack:** document and officially release scuttling in webpack plugin ([#1829](https://github.com/davidmurdoch/LavaMoat/issues/1829)) ([9c83030](https://github.com/davidmurdoch/LavaMoat/commit/9c83030d97371478bf59b10d636e63168bd8473d))


### Bug Fixes

* add Node.js v24.0.0 to supported engines ([ad9cdcd](https://github.com/davidmurdoch/LavaMoat/commit/ad9cdcdf83ccbda8bf2eba427d0c80f761f47a0a))
* add Node.js v26.0.0 to engines ([1b115cd](https://github.com/davidmurdoch/LavaMoat/commit/1b115cd2b69a34aa9c3b2206424231a3e9964086))
* avoid touching experimental localStorage API, fix scuttling tests ([5d65bff](https://github.com/davidmurdoch/LavaMoat/commit/5d65bfff756561b72def44404b17ad421a55955a))
* **browserify,core,lavamoat-node,node:** do not publish extraneous files ([#1866](https://github.com/davidmurdoch/LavaMoat/issues/1866)) ([e7666d8](https://github.com/davidmurdoch/LavaMoat/commit/e7666d804e2f9af71fb0cd948af04a283458b6d1)), closes [#1865](https://github.com/davidmurdoch/LavaMoat/issues/1865)
* **core,webpack:** remove deprecated lockdown options ([efec539](https://github.com/davidmurdoch/LavaMoat/commit/efec5391eec838689ce2426de617571d0f276f2c)), closes [#1578](https://github.com/davidmurdoch/LavaMoat/issues/1578)
* **core:** Avoid disruptive errors when a scuttled global is accessed by Chrome itself ([#2126](https://github.com/davidmurdoch/LavaMoat/issues/2126)) ([8c37400](https://github.com/davidmurdoch/LavaMoat/commit/8c3740059c89a0c8e3e14ccd216febe08b3c3bf9))
* **core:** block circular global object endowments ([#1505](https://github.com/davidmurdoch/LavaMoat/issues/1505)) ([6745a0e](https://github.com/davidmurdoch/LavaMoat/commit/6745a0edee85171e4062aaec31d7f25bf3a97e46))
* **core:** fix policy narrowing logic in the policy merge  ([#1843](https://github.com/davidmurdoch/LavaMoat/issues/1843)) ([ea5f3d4](https://github.com/davidmurdoch/LavaMoat/commit/ea5f3d46aa8db8ee8e51115ca4b46c5fd00a89b6))
* **core:** make the wrapper for global functions strict ([#1898](https://github.com/davidmurdoch/LavaMoat/issues/1898)) ([8c0205c](https://github.com/davidmurdoch/LavaMoat/commit/8c0205c5bbc0a6f70a6a86073f9b9d9ef100421f))
* **core:** move dependency execute after policy check ([#1974](https://github.com/davidmurdoch/LavaMoat/issues/1974)) ([886e82f](https://github.com/davidmurdoch/LavaMoat/commit/886e82fab62969d4fa45d974796dee45c1e37092))
* **core:** noSharedPrototype case in copyWrappedGlobals must include non-enumerable properties ([592f96e](https://github.com/davidmurdoch/LavaMoat/commit/592f96e1291aa31cfd6942493e40563b8680b871))
* **core:** prevent the endowment logic from skipping writable fields ([#2081](https://github.com/davidmurdoch/LavaMoat/issues/2081)) ([68118ab](https://github.com/davidmurdoch/LavaMoat/commit/68118ab3f8dc7e839ad0241fc01b02077134fce7))
* **core:** replace merge-deep with bespoke policy merge implementation ([#1909](https://github.com/davidmurdoch/LavaMoat/issues/1909)) ([1eb97f6](https://github.com/davidmurdoch/LavaMoat/commit/1eb97f6e92e55377d76aafcd8c9df47fbaa233a4))
* **core:** stop overwriting the policy file while loading. ([#1835](https://github.com/davidmurdoch/LavaMoat/issues/1835)) ([db57c1c](https://github.com/davidmurdoch/LavaMoat/commit/db57c1c3a8a8822733b887edec633e3ce1f1177a))
* **core:** transfer prototype over to a wraped function ([#1847](https://github.com/davidmurdoch/LavaMoat/issues/1847)) ([14e3c66](https://github.com/davidmurdoch/LavaMoat/commit/14e3c66957a8700fbf3a423e67f5785e7172e008))
* **core:** untangle another tsc confusion in generating .d.ts files ([#1867](https://github.com/davidmurdoch/LavaMoat/issues/1867)) ([5ce9b96](https://github.com/davidmurdoch/LavaMoat/commit/5ce9b9613d5b1601f24a320a07e7e8eccb96aa18))
* **deps:** update babel monorepo ([afc9fe5](https://github.com/davidmurdoch/LavaMoat/commit/afc9fe5fef98c53abe014ff657a1d4f59883abe8))
* **deps:** update babel monorepo ([#1680](https://github.com/davidmurdoch/LavaMoat/issues/1680)) ([9739051](https://github.com/davidmurdoch/LavaMoat/commit/973905160650c659b567088aeef9c44ec814fd7c))
* **deps:** update babel monorepo to v7.26.10 ([#1561](https://github.com/davidmurdoch/LavaMoat/issues/1561)) ([2757717](https://github.com/davidmurdoch/LavaMoat/commit/275771754578647346da1ece0f86afaabdd5de36))
* **deps:** update babel monorepo to v7.26.9 ([6a9dc73](https://github.com/davidmurdoch/LavaMoat/commit/6a9dc735f18a5b95e82b86ec2bd466ee4433172f))
* **deps:** update babel monorepo to v7.27.0 ([#1589](https://github.com/davidmurdoch/LavaMoat/issues/1589)) ([efd83d7](https://github.com/davidmurdoch/LavaMoat/commit/efd83d7ea7a5f5f9d2157248d4e2f8b7f9c48c56))
* **deps:** update babel monorepo to v7.27.3 ([#1672](https://github.com/davidmurdoch/LavaMoat/issues/1672)) ([72cb642](https://github.com/davidmurdoch/LavaMoat/commit/72cb6424bb5acb16655562deaefff8ef2cf2168e))
* **deps:** update babel monorepo to v7.29.7 ([#2010](https://github.com/davidmurdoch/LavaMoat/issues/2010)) ([9627a86](https://github.com/davidmurdoch/LavaMoat/commit/9627a86d477d9c70b387b860899a30fbbc0ad479))
* **deps:** update definitelytyped ([#1574](https://github.com/davidmurdoch/LavaMoat/issues/1574)) ([6c2d54e](https://github.com/davidmurdoch/LavaMoat/commit/6c2d54e851ea24a9482a52018b5e0d84716f87b6))
* **deps:** update dependency json-stable-stringify to v1.3.0 ([#1613](https://github.com/davidmurdoch/LavaMoat/issues/1613)) ([f9314d1](https://github.com/davidmurdoch/LavaMoat/commit/f9314d1a238d31a0164356c1c6bd6f6e36246d56))
* **deps:** update dependency ses to v1.12.0 [security] ([#1605](https://github.com/davidmurdoch/LavaMoat/issues/1605)) ([881ae86](https://github.com/davidmurdoch/LavaMoat/commit/881ae86b9a4c27ab60a3c76a4a69f5de246eb2ed))
* **deps:** update dependency ses to v1.14.0 ([#1746](https://github.com/davidmurdoch/LavaMoat/issues/1746)) ([3e4b834](https://github.com/davidmurdoch/LavaMoat/commit/3e4b834df3430d9f919e7df31f42d23e9b6bb352))
* **deps:** upgrade ses ([83f704a](https://github.com/davidmurdoch/LavaMoat/commit/83f704acbfc175a5bc1837752b3b52e597a0d5ad))
* **deps:** upgrade ses This upgrades `ses` to v2.3.0 across the board. ([#2111](https://github.com/davidmurdoch/LavaMoat/issues/2111)) ([32d830b](https://github.com/davidmurdoch/LavaMoat/commit/32d830b947c0e9a0fab4195cc9c6083e9b7b3714))
* **deps:** upgrade ses, @types/node, endo ([c6eca11](https://github.com/davidmurdoch/LavaMoat/commit/c6eca11b3cfc873b7f5776b0d08f6f329b48e490))
* drop Node.js v18 support across the board ([#1886](https://github.com/davidmurdoch/LavaMoat/issues/1886)) ([1190c9b](https://github.com/davidmurdoch/LavaMoat/commit/1190c9b58294abc071eadd7cd14ea11bf63d28b4))
* ensure internal sequence of specifier handling does not leak con& ([#1992](https://github.com/davidmurdoch/LavaMoat/issues/1992)) ([6acf157](https://github.com/davidmurdoch/LavaMoat/commit/6acf157cd43d2855d6d9250c507bda40225e5dab))
* typescript got confused into creating a cyclic reference in types for scuttling in core ([5e25a36](https://github.com/davidmurdoch/LavaMoat/commit/5e25a361094a7b3ed7ae2744cd405910f9dc3baa))
* upgrade ses to v1.11.0 ([a12dae1](https://github.com/davidmurdoch/LavaMoat/commit/a12dae13e8c7f70082199ba186659ea413e82ded))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @lavamoat/types bumped from ^2.0.0 to ^3.0.0
    * lavamoat-tofu bumped from ^9.1.0 to ^10.0.0
</details>

<details><summary>lavamoat-tofu: 10.0.0</summary>

## [10.0.0](https://github.com/davidmurdoch/LavaMoat/compare/lavamoat-tofu-v9.1.0...lavamoat-tofu-v10.0.0) (2026-11-04)


###   BREAKING CHANGES

* Node.js v18 is no longer supported.

### Features

* **core:** add informative errors when the result of policy merge contains invalid entries ([#1848](https://github.com/davidmurdoch/LavaMoat/issues/1848)) ([fefd457](https://github.com/davidmurdoch/LavaMoat/commit/fefd457d53c2944fe3d2ee719cd741f5eafb8987))
* **tofu:** enable deep dependency analysis of ES modules ([e5d1818](https://github.com/davidmurdoch/LavaMoat/commit/e5d181806788134b9b0b37ef58b0576056ac215a))
* **tofu:** Ignore cjs-module-lexer exports annotation ([#2129](https://github.com/davidmurdoch/LavaMoat/issues/2129)) ([7ccfb1f](https://github.com/davidmurdoch/LavaMoat/commit/7ccfb1f28efc475522fd03a17b0bdc9c941a1693))


### Bug Fixes

* add Node.js v24.0.0 to supported engines ([ad9cdcd](https://github.com/davidmurdoch/LavaMoat/commit/ad9cdcdf83ccbda8bf2eba427d0c80f761f47a0a))
* add Node.js v26.0.0 to engines ([1b115cd](https://github.com/davidmurdoch/LavaMoat/commit/1b115cd2b69a34aa9c3b2206424231a3e9964086))
* **deps:** update babel monorepo ([afc9fe5](https://github.com/davidmurdoch/LavaMoat/commit/afc9fe5fef98c53abe014ff657a1d4f59883abe8))
* **deps:** update babel monorepo ([#1680](https://github.com/davidmurdoch/LavaMoat/issues/1680)) ([9739051](https://github.com/davidmurdoch/LavaMoat/commit/973905160650c659b567088aeef9c44ec814fd7c))
* **deps:** update babel monorepo ([#1982](https://github.com/davidmurdoch/LavaMoat/issues/1982)) ([5b375cb](https://github.com/davidmurdoch/LavaMoat/commit/5b375cb85d85bc3e37962eae5836b67de9ed474c))
* **deps:** update babel monorepo to v7.26.10 ([#1561](https://github.com/davidmurdoch/LavaMoat/issues/1561)) ([2757717](https://github.com/davidmurdoch/LavaMoat/commit/275771754578647346da1ece0f86afaabdd5de36))
* **deps:** update babel monorepo to v7.26.9 ([6a9dc73](https://github.com/davidmurdoch/LavaMoat/commit/6a9dc735f18a5b95e82b86ec2bd466ee4433172f))
* **deps:** update babel monorepo to v7.27.0 ([#1589](https://github.com/davidmurdoch/LavaMoat/issues/1589)) ([efd83d7](https://github.com/davidmurdoch/LavaMoat/commit/efd83d7ea7a5f5f9d2157248d4e2f8b7f9c48c56))
* **deps:** update babel monorepo to v7.27.3 ([#1672](https://github.com/davidmurdoch/LavaMoat/issues/1672)) ([72cb642](https://github.com/davidmurdoch/LavaMoat/commit/72cb6424bb5acb16655562deaefff8ef2cf2168e))
* **deps:** update babel monorepo to v7.29.7 ([#2010](https://github.com/davidmurdoch/LavaMoat/issues/2010)) ([9627a86](https://github.com/davidmurdoch/LavaMoat/commit/9627a86d477d9c70b387b860899a30fbbc0ad479))
* **deps:** update definitelytyped ([2eab347](https://github.com/davidmurdoch/LavaMoat/commit/2eab34797e14fa0ff2d2b0aa6fd1ec77cc490900))
* **deps:** update definitelytyped ([#1574](https://github.com/davidmurdoch/LavaMoat/issues/1574)) ([6c2d54e](https://github.com/davidmurdoch/LavaMoat/commit/6c2d54e851ea24a9482a52018b5e0d84716f87b6))
* **deps:** update dependency type-fest to v4.40.0 ([#1619](https://github.com/davidmurdoch/LavaMoat/issues/1619)) ([4e20306](https://github.com/davidmurdoch/LavaMoat/commit/4e20306371ae605fc414dd645b8e422a68c71b93))
* **deps:** update dependency type-fest to v4.40.1 ([#1624](https://github.com/davidmurdoch/LavaMoat/issues/1624)) ([b918dcc](https://github.com/davidmurdoch/LavaMoat/commit/b918dcc7d7ea2b0a4779eecaa7a853c73ecc5246))
* **deps:** update dependency type-fest to v4.41.0 ([#1657](https://github.com/davidmurdoch/LavaMoat/issues/1657)) ([19e9bf1](https://github.com/davidmurdoch/LavaMoat/commit/19e9bf144c8c43f530501bc500480fed16f995ac))
* drop Node.js v18 support across the board ([#1886](https://github.com/davidmurdoch/LavaMoat/issues/1886)) ([1190c9b](https://github.com/davidmurdoch/LavaMoat/commit/1190c9b58294abc071eadd7cd14ea11bf63d28b4))
* **tofu:** Deprecate codeSampleFromAstNode and undo breaking change ([b43a23d](https://github.com/davidmurdoch/LavaMoat/commit/b43a23dbedeff3583c2425891a51f1ef0a434bc8))
* **tofu:** stop treating float typed arrays as primordials ([#2120](https://github.com/davidmurdoch/LavaMoat/issues/2120)) ([a299274](https://github.com/davidmurdoch/LavaMoat/commit/a299274b20d3c85d5418cb5d6ad3a23a94980750))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @lavamoat/types bumped from ^2.0.0 to ^3.0.0
  * peerDependencies
    * lavamoat-core bumped from >15.4.0 to >20.0.0
</details>

---
This PR was generated with [Release Please](https://github.com/googleapis/release-please). See [documentation](https://github.com/googleapis/release-please#release-please).