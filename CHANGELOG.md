# Changelog

# 25/05/2017

  * Update style-loader to version v0.18.1
    * express                  ^4.15.2  →  ^4.15.3
    * react-redux               ^5.0.4  →   ^5.0.5
    * tvg-conf                  ^0.5.3  →   ^0.5.4
    * tvg-ui-bootstrap         ^4.1.12  →  ^4.1.17
    * babel-jest               ^20.0.1  →  ^20.0.3
    * babel-preset-env          ^1.4.0  →   ^1.5.1
    * css-loader               ^0.28.1  →  ^0.28.2
    * eslint-config-prettier    ^2.1.0  →   ^2.1.1
    * eslint-plugin-import      ^2.2.0  →   ^2.3.0
    * eslint-plugin-jest       ^20.0.1  →  ^20.0.3
    * eslint-plugin-jsx-a11y    ^5.0.1  →   ^5.0.3
    * eslint-plugin-prettier    ^2.0.1  →   ^2.1.1
    * happypack                 ^3.0.3  →   ^3.1.0
    * jest                     ^20.0.1  →  ^20.0.4
    * lint-staged               ^3.4.1  →   ^3.4.2
    * lodash-webpack-plugin    ^0.11.3  →  ^0.11.4
    * postcss-smart-import      ^0.7.0  →   ^0.7.2
    * style-loader             ^0.17.0  →  ^0.18.1
    * webpack                   ^2.5.1  →   ^2.6.0
    * webpack-bundle-analyzer   ^2.8.1  →   ^2.8.2
  * Lock all dependencies to fixed versions.

# 17/05/2017

  * Add .idea/ folder to .gitignore
  * Add application prefix to output, redux store.
  * Fix scripts to not include script tag.
  * Update flow-typed defs.
  * Update dependencies (minor versions):
    * tvg-conf                    ^0.5.0  →   ^0.5.3
    * babel-jest                 ^20.0.0  →  ^20.0.1
    * eslint-config-airbnb       ^15.0.0  →  ^15.0.1
    * eslint-config-airbnb-base  ^11.1.3  →  ^11.2.0
    * eslint-config-prettier      ^2.0.0  →   ^2.1.0
    * eslint-plugin-flowtype     ^2.32.1  →  ^2.33.0
    * eslint-plugin-jest         ^20.0.0  →  ^20.0.1
    * eslint-plugin-react         ^7.0.0  →   ^7.0.1
    * jest                       ^20.0.0  →  ^20.0.1
    * postcss-cssnext            ^2.10.0  →  ^2.11.0
    * postcss-loader              ^2.0.1  →   ^2.0.5
    * webpack-bundle-analyzer     ^2.4.0  →   ^2.8.1

# 16/05/2017

  * Update dependencies:
    * [prettier](https://github.com/prettier/prettier) to [v.1.3.1](https://github.com/prettier/prettier/releases/tag/1.3.0)

# 15/05/2017

  * Update dependencies:
    * [eslint-config-airbnb](https://github.com/airbnb/javascript) to [v.15.0.0](https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb/CHANGELOG.md#1500--2017-05-14)
    * [eslint-plugin-jsx-a11y](https://github.com/evcohen/eslint-plugin-jsx-a11y) to [v5.0.1](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/CHANGELOG.md#500--2017-05-05)

## 14/05/2017

  * Update dependencies:
    * [cross-env](https://github.com/kentcdodds/cross-env) to version [v5.0.0](https://github.com/kentcdodds/cross-env/releases/tag/v5.0.0)
    * [flow-bin](https://github.com/flowtype/flow-bin) to version [v0.46.0](https://github.com/facebook/flow/releases/tag/v0.46.0)
    * [postcss-smart-import](https://github.com/sebastian-software/postcss-smart-import) to version [v0.7.0](https://github.com/sebastian-software/postcss-smart-import/releases/tag/0.7.0)

## 11/05/2017

  * Added Lint Staged to run eslint and jest on js and jsx files [lint-staged](https://github.com/okonet/lint-staged)
  * Added lint staged that fixes stylint issues and then runs it again to check [stylefmt](https://github.com/morishitter/stylefmt)
  * Removed pre push hook

## 10/05/2017

  * Force application to server static files under its prefix path: `/assets/` -> `/boilerplate/`
  * Always serve JSON content if requested with `accept: application/json`.
  * Always use `[name]` and `[chunkhash]` for CSS assets to avoid collisions.
  * Update [tvg-conf](https://bitbucket.org/betfair-us/tvg-conf) to v0.5.0.

## 08/05/2017

  * Update dependencies
    * Update [eslint-config-react](https://github.com/yannickcr/eslint-plugin-react) to version [7.0.0](https://github.com/yannickcr/eslint-plugin-react/blob/master/CHANGELOG.md#700---2017-05-06).
    * Update [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier) to version [2.0.0](https://github.com/prettier/eslint-config-prettier/blob/master/CHANGELOG.md#version-200-2017-05-07).
    * Update [postcss-loader](https://github.com/postcss/postcss-loader) to version [2.0.1](https://github.com/postcss/postcss-loader/blob/master/CHANGELOG.md#201-2017-05-08)
    * Update [jest](https://github.com/facebook/jest) to version [20.0.0](https://github.com/facebook/jest/blob/2a9d2daf2f320da2ce828e618b7f4ce37133bb8d/CHANGELOG.md#jest-2000)
  * Add [.codacy.yml](https://support.codacy.com/hc/en-us/articles/115002130625-Codacy-Configuration-File) to exclude files per project.

## 05/05/2017

  * Update Flowtype module map to help with [CSS Modules coverage](https://github.com/ckknight/css-module-flow). More info here: https://gist.github.com/lambdahands/d19e0da96285b749f0ef

## 04/05/2017

  * Update dependencies
  * Enable JSON support for server
  * Fix CSS chunk names
  * Fix SVG loads

## 03/05/2017

  * Enable source-maps on UglifyJsPlugin. [webpack #1385](https://github.com/webpack/webpack/issues/1385)

## 02/05/2017

  * Update dependencies.
  * Update flow-typed definitions.
  * Add [flow-coverage](https://github.com/rpl/flow-coverage-report).
  * Add lcov as Jest reporter to integrate with Codacy in the future.
  * Trigger ESLint warnings about Flow weak types (any/Function/Object).
  * Start a changelog to help developers get on pair with changes.
