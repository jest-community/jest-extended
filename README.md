<div align="center">
  <h1>jest-extended</h1>

  🃏💪

  Additional Jest matchers
</div>

<hr />

[![Build Status](https://img.shields.io/travis/mattphillips/jest-extended.svg?style=flat-square)](https://travis-ci.org/mattphillips/jest-extended)
[![Code Coverage](https://img.shields.io/codecov/c/github/mattphillips/jest-extended.svg?style=flat-square)](https://codecov.io/github/mattphillips/jest-extended)
[![version](https://img.shields.io/npm/v/jest-extended.svg?style=flat-square)](https://www.npmjs.com/package/jest-extended)
[![downloads](https://img.shields.io/npm/dm/jest-extended.svg?style=flat-square)](http://npm-stat.com/charts.html?package=jest-extended&from=2017-09-14)
[![MIT License](https://img.shields.io/npm/l/jest-extended.svg?style=flat-square)](https://github.com/mattphillips/jest-extended/blob/master/LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
[![Roadmap](https://img.shields.io/badge/%F0%9F%93%94-roadmap-CD9523.svg?style=flat-square)](https://github.com/mattphillips/jest-extended/blob/master/docs/ROADMAP.md)
[![Examples](https://img.shields.io/badge/%F0%9F%92%A1-examples-ff615b.svg?style=flat-square)](https://github.com/mattphillips/jest-extended/blob/master/docs/EXAMPLES.md)


## Problem

Jest is an amazing test running and has some awesome assertion APIs built in by default. However there are times when
having more specific matchers (assertions) would be far more convenient.

## Solution

jest-extended aims to add additional matchers to Jest's default ones making it easy to test everything 🙌

## Contributing

If you've come here to help contribute - Thanks! Take a look at the [contributing](/CONTRIBUTING.md) docs as a way of getting started.

## Installation

With npm:
```sh
npm install --save-dev jest-extended
```

With yarn:
```sh
yarn add -D jest-extended
```

## Setup

Add jest-extended to your Jest setupTestFrameworkScriptFile configuration. [See for help](http://facebook.github.io/jest/docs/en/configuration.html#setuptestframeworkscriptfile-string)

``` json
"jest": {
  "setupTestFrameworkScriptFile": "jest-extended"
}
```

## API

### .toBeFalse()

Use .toBeFalse when checking a value is `false`

```js
test('is api loading', () => {
  expect(isApiLoading()).toBeFalse();
});
```

### .toBeTrue()

Use .toBeTrue when checking a value is `true`

```js
test('is jest cool', () => {
  expect(isJestCool()).toBeTrue();
});
```

## Contributors

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
| [<img src="https://avatars0.githubusercontent.com/u/5610087?v=4" width="100px;"/><br /><sub>Matt Phillips</sub>](http://mattphillips.io)<br />[📝](#blog-mattphillips "Blogposts") [💻](https://github.com/mattphillips/jest-extended/commits?author=mattphillips "Code") [📖](https://github.com/mattphillips/jest-extended/commits?author=mattphillips "Documentation") [💡](#example-mattphillips "Examples") [🚇](#infra-mattphillips "Infrastructure (Hosting, Build-Tools, etc)") [⚠️](https://github.com/mattphillips/jest-extended/commits?author=mattphillips "Tests") |
| :---: |
<!-- ALL-CONTRIBUTORS-LIST:END -->

## LICENSE

MIT
