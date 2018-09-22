<div align="center">
  <h1>jest-extended</h1>

  🃏💪

  Additional Jest matchers
</div>

<hr />

[![Build Status](https://img.shields.io/travis/jest-community/jest-extended.svg?style=flat-square)](https://travis-ci.org/jest-community/jest-extended)
[![Code Coverage](https://img.shields.io/codecov/c/github/jest-community/jest-extended.svg?style=flat-square)](https://codecov.io/github/jest-community/jest-extended)
[![version](https://img.shields.io/npm/v/jest-extended.svg?style=flat-square)](https://www.npmjs.com/package/jest-extended)
[![downloads](https://img.shields.io/npm/dm/jest-extended.svg?style=flat-square)](http://npm-stat.com/charts.html?package=jest-extended&from=2017-09-14)
[![MIT License](https://img.shields.io/npm/l/jest-extended.svg?style=flat-square)](https://github.com/jest-community/jest-extended/blob/master/LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
[![Roadmap](https://img.shields.io/badge/%F0%9F%93%94-roadmap-CD9523.svg?style=flat-square)](https://github.com/jest-community/jest-extended/blob/master/docs/ROADMAP.md)
[![Examples](https://img.shields.io/badge/%F0%9F%92%A1-examples-ff615b.svg?style=flat-square)](https://github.com/jest-community/jest-extended/blob/master/docs/EXAMPLES.md)

## Problem

Jest is an amazing test runner and has some awesome assertion APIs built in by default. However there are times when
having more specific matchers (assertions) would be far more convenient.

## Solution

jest-extended aims to add additional matchers to Jest's default ones making it easy to test everything 🙌

## Contributing

If you've come here to help contribute - Thanks! Take a look at the [contributing](/CONTRIBUTING.md) docs as a way of getting started.

---

- [Problem](#problem)
- [Solution](#solution)
- [Contributing](#contributing)
- [Installation](#installation)
- [Setup](#setup)
- [API](#api)
    - [.pass(message)](#passmessage)
    - [.fail(message)](#failmessage)
    - [.toBeEmpty()](#tobeempty)
    - [.toBeOneOf([members])](#tobeoneofmembers)
    - [.toBeNil()](#tobenil)
    - [.toSatisfy(predicate)](#tosatisfypredicate)
  - [Array](#array)
    - [.toBeArray()](#tobearray)
    - [.toBeArrayOfSize()](#tobearrayofsize)
    - [.toIncludeAllMembers([members])](#toincludeallmembersmembers)
    - [.toIncludeAnyMembers([members])](#toincludeanymembersmembers)
    - [.toIncludeSameMembers([members])](#toincludesamemembersmembers)
    - [.toSatisfyAll(predicate)](#tosatisfyallpredicate)
  - [Boolean](#boolean)
    - [.toBeBoolean()](#tobeboolean)
    - [.toBeTrue()](#tobetrue)
    - [.toBeFalse()](#tobefalse)
  - [Date](#date)
    - [.toBeDate()](#tobedate)
    - [.toBeValidDate()](#tobevaliddate)
    - [.toBeAfter(date)](#tobeafterdate)
    - [.toBeBefore(date)](#tobebeforedate)
    - Further proposals in [#117](https://github.com/jest-community/jest-extended/issues/117) PRs welcome
  - [Function](#function)
    - [.toBeFunction()](#tobefunction)
  - [Mock](#mock)
    - [.toHaveBeenCalledBefore()](#tohavebeencalledbefore)
    - [.toHaveBeenCalledAfter()](#tohavebeencalledafter)
  - [Number](#number)
    - [.toBeNumber()](#tobenumber)
    - [.toBeNaN()](#tobenan)
    - [.toBeFinite()](#tobefinite)
    - [.toBePositive()](#tobepositive)
    - [.toBeNegative()](#tobenegative)
    - [.toBeEven()](#tobeeven)
    - [.toBeOdd()](#tobeodd)
    - [.toBeWithin(start, end)](#tobewithinstart--end)
  - [Object](#object)
    - [.toBeObject()](#tobeobject)
    - [.toContainKey(key)](#tocontainkeykey)
    - [.toContainKeys([keys])](#tocontainkeyskeys)
    - [.toContainAllKeys([keys])](#tocontainallkeyskeys)
    - [.toContainAnyKeys([keys])](#tocontainanykeyskeys)
    - [.toContainValue(value)](#tocontainvaluevalue)
    - [.toContainValues([values])](#tocontainvaluesvalues)
    - [.toContainAllValues([values])](#tocontainallvaluesvalues)
    - [.toContainAnyValues([values])](#tocontainanyvaluesvalues)
    - [.toContainEntry([key, value])](#tocontainentrykey--value)
    - [.toContainEntries([[key, value]])](#tocontainentrieskey--value)
    - [.toContainAllEntries([[key, value]])](#tocontainallentrieskey--value)
    - [.toContainAnyEntries([[key, value]])](#tocontainanyentrieskey--value)
    - [.toBeExtensible()](#tobeextensible)
    - [.toBeFrozen()](#tobefrozen)
    - [.toBeSealed()](#tobesealed)
  - [~~Promise~~](#promise)
  - [String](#string)
    - [.toBeString()](#tobestring)
    - [.toBeHexadecimal(string)](#tobehexadecimal)
    - [.toEqualCaseInsensitive(string)](#toequalcaseinsensitivestring)
    - [.toStartWith(prefix)](#tostartwithprefix)
    - [.toEndWith(suffix)](#toendwithsuffix)
    - [.toInclude(substring)](#toincludesubstring)
    - [.toIncludeRepeated(substring, times)](#toincluderepeatedsubstring--times)
    - [.toIncludeMultiple([substring])](#toincludemultiplesubstring)
- [Contributors](#contributors)
- [LICENSE](#license)

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

If you are already using another test framework, like [jest-chain](https://github.com/mattphillips/jest-chain), then you should create a test setup file and `require` each of the frameworks you are using.

For example:

```js
// ./testSetup.js
require('jest-extended');
require('any other test framework libraries you are using');
```

Then in your Jest config:

```json
"jest": {
  "setupTestFrameworkScriptFile": "./testSetup.js"
}
```

## API

#### .pass(message)

_Note: Currently unimplemented_

Passing assertion.

```js
expect().pass('should pass');
```

#### .fail(message)

_Note: Currently unimplemented_

Failing assertion.

```js
expect().fail('test should fail');
```

#### .toBeEmpty()

Use `.toBeEmpty` when checking if a `String` `''`, `Array` `[]` or `Object` `{}` is empty.

```js
test('passes when given an empty string', () => {
  expect('').toBeEmpty();
  expect('hello').not.toBeEmpty();
});

test('passes when given an empty array', () => {
  expect([]).toBeEmpty();
  expect(['hello']).not.toBeEmpty();
});

test('passes when given an empty object', () => {
  expect({}).toBeEmpty();
  expect({ hello: 'world' }).not.toBeEmpty();
});
```

[Open toBeEmpty in repl](https://codesandbox.io/s/github/jest-community/jest-extended/tree/master/docs/sandbox?module=%2Fmatchers%2FtoBeEmpty.test.js)

#### .toBeOneOf([members])

Use `.toBeOneOf` when checking if a value is a member of a given `Array`.

```js
test('passes when value is in given array', () => {
  expect(1).toBeOneOf([1, 2, 3]);
  expect(4).not.toBeOneOf([1, 2, 3]);
});
```

[Open toBeOneOf in repl](https://codesandbox.io/s/github/jest-community/jest-extended/tree/master/docs/sandbox?module=%2Fmatchers%2FtoBeOneOf.test.js)

#### .toBeNil()

Use `.toBeNil` when checking a value is `null` or `undefined`.

```js
test('passes when value is null or undefined', () => {
  expect(null).toBeNil();
  expect(undefined).toBeNil();
  expect(true).not.toBeNil();
});
```

[Open toBeNil in repl](https://codesandbox.io/s/github/jest-community/jest-extended/tree/master/docs/sandbox?module=%2Fmatchers%2FtoBeNil.test.js)

#### .toSatisfy(predicate)

Use `.toSatisfy` when you want to use a custom matcher by supplying a predicate function that returns a `Boolean`.

```js
test('passes when value passes given predicate', () => {
  const greaterThanOneButNotThree = n => n > 1 && n !== 3;
  expect(100).toSatisfy(greaterThanOneButNotThree);
  expect(0).not.toSatisfy(greaterThanOneButNotThree);
  expect(3).not.toSatisfy(greaterThanOneButNotThree);
});
```

[Open toSatisfy in repl](https://codesandbox.io/s/github/jest-community/jest-extended/tree/master/docs/sandbox?module=%2Fmatchers%2FtoSatisfy.test.js)

### Array

#### .toBeArray()

Use `.toBeArray` when checking if a value is an `Array`.

```js
test('passes when value is an array', () => {
  expect([]).toBeArray();
  expect([1]).toBeArray();
  expect(true).not.toBeArray();
});
```

[Open toBeArray in repl](https://codesandbox.io/s/github/jest-community/jest-extended/tree/master/docs/sandbox?module=%2Fmatchers%2Farray%2FtoBeArray.test.js)

#### .toBeArrayOfSize()

Use `.toBeArrayOfSize` when checking if a value is an `Array` of size x.

```js
test('passes when value is an array', () => {
  expect([]).toBeArrayOfSize(0);
  expect([1]).toBeArrayOfSize(1);
  expect(true).not.toBeArrayOfSize(1);
});
```

[Open toBeArrayOfSize in repl](https://codesandbox.io/s/github/jest-community/jest-extended/tree/master/docs/sandbox?module=%2Fmatchers%2Farray%2FtoBeArrayOfSize.test.js)

#### .toIncludeAllMembers([members])

Use `.toIncludeAllMembers` when checking if an `Array` contains all of the same members of a given set.

```js
test('passes when given array values match the members of the set', () => {
  expect([1, 2, 3]).toIncludeAllMembers([2, 1, 3]);
  expect([1, 2, 2]).toIncludeAllMembers([2, 1]);
});
```

[Open toIncludeAllMembers in repl](https://codesandbox.io/s/github/jest-community/jest-extended/tree/master/docs/sandbox?module=%2Fmatchers%2Farray%2FtoIncludeAllMembers.test.js)

#### .toIncludeAnyMembers([members])

Use `.toIncludeAnyMembers` when checking if an `Array` contains any of the members of a given set.

```js
test('passes when given array values match any of the members in the set', () => {
  expect([1, 2, 3]).toIncludeAnyMembers([2, 1, 3]);
  expect([1, 2, 2]).toIncludeAnyMembers([2]);
  expect([1, 2, 2]).not.toIncludeAnyMembers([3]);
});
```

[Open toIncludeAnyMembers in repl](https://codesandbox.io/s/github/jest-community/jest-extended/tree/master/docs/sandbox?module=%2Fmatchers%2Farray%2FtoIncludeAnyMembers.test.js)

#### .toIncludeSameMembers([members])

Use `.toIncludeSameMembers` when checking if two arrays contain equal values, in any order.

```js
test('passes when arrays match in a different order', () => {
  expect([1, 2, 3]).toIncludeSameMembers([3, 1, 2]);
  expect([{ foo: 'bar' }, { baz: 'qux' }]).toIncludeSameMembers([{ baz: 'qux' }, { foo: 'bar' }]);
});
```

[Open toIncludeSameMembers in repl](https://codesandbox.io/s/github/jest-community/jest-extended/tree/master/docs/sandbox?module=%2Fmatchers%2Farray%2FtoIncludeSameMembers.test.js)

#### .toSatisfyAll(predicate)

Use `.toSatisfyAll` when you want to use a custom matcher by supplying a predicate function that returns a `Boolean` for all values in an array.

```js
test('passes when all values in array pass given predicate', () => {
  const isOdd = el => el % 2 === 1;
  expect([1, 3, 5, 7]).toSatisfyAll(isOdd);
  expect([1, 3, 4, 5, 7]).not.toSatisfyAll(isOdd);
});
```

[Open toSatisfyAll in repl](https://codesandbox.io/s/github/jest-community/jest-extended/tree/master/docs/sandbox?module=%2Fmatchers%2Farray%2FtoSatisfyAll.test.js)

### Boolean

#### .toBeBoolean()

Use `.toBeBoolean` when checking if a value is a `Boolean`.

```js
test('passes when value is a boolean', () => {
  expect(false).toBeBoolean();
  expect(true).toBeBoolean();
  expect(1 === 1).toBeBoolean();
  expect(1).not.toBeBoolean();
});
```

[Open toBeBoolean in repl](https://codesandbox.io/s/github/jest-community/jest-extended/tree/master/docs/sandbox?module=%2Fmatchers%2Fboolean%2FtoBeBoolean.test.js)

#### .toBeTrue()

Use `.toBeTrue` when checking a value is equal (===) to `true`.

```js
test('is jest cool', () => {
  const isJestCool = () => true;
  expect(isJestCool()).toBeTrue();
  expect(false).not.toBeTrue();
});
```

[Open toBeTrue in repl](https://codesandbox.io/s/github/jest-community/jest-extended/tree/master/docs/sandbox?module=%2Fmatchers%2Fboolean%2FtoBeTrue.test.js)

#### .toBeFalse()

Use `.toBeFalse` when checking a value is equal (===) to `false`.

```js
test('returns false', () => {
  expect(false).toBeFalse();
  expect(true).not.toBeFalse();
});
```

[Open toBeFalse in repl](https://codesandbox.io/s/github/jest-community/jest-extended/tree/master/docs/sandbox?module=%2Fmatchers%2Fboolean%2FtoBeFalse.test.js)

### ~~Date~~

Proposal in #117 (*under development*)

#### .toBeDate()

Use `.toBeDate` when checking if a value is a `Date`.

```js
test('passes when value is a date', () => {
  expect(new Date()).toBeDate();
  expect('01/01/2018').not.toBeDate();
  expect(new Date('01/01/2018')).toBeDate();
  expect(undefined).not.toBeDate();
});
```

[Open toBeDate in repl](https://codesandbox.io/s/github/jest-community/jest-extended/tree/master/docs/sandbox?module=%2Fmatchers%2Fdate%2FtoBeDate.test.js)

#### .toBeValidDate()

Use `.toBeValidDate` when checking if a given `Date` object is valid.

```js
test('passes when Date is valid', () => {
  expect(new Date()).toBeValidDate();
  expect('01/01/2018').not.toBeValidDate();
  expect(new Date('01/01/2018')).toBeValidDate();
  expect(new Date('01/90/2018')).not.toBeValidDate();
  expect(undefined).not.toBeValidDate();
});
```

[Open toBeValidDate in repl](https://codesandbox.io/s/github/jest-community/jest-extended/tree/master/docs/sandbox?module=%2Fmatchers%2Fdate%2FtoBeValidDate.test.js)

#### .toBeAfter(date)

Use `.toBeAfter` when checking if a date occurs after `date`.

```js
test('passes when input is after date', () => {
  expect(new Date('01/01/2019')).toBeAfter(new Date('01/01/2018'));
  expect('01/01/2018').not.toBeAfter(new Date('01/01/2019'));
});
```

[Open toBeAfter in repl](https://codesandbox.io/s/github/jest-community/jest-extended/tree/master/docs/sandbox?module=%2Fmatchers%2Fdate%2FtoBeAfter.test.js)

#### .toBeBefore(date)

Use `.toBeBefore` when checking if a date occurs before `date`.

```js
test('passes when input is before date', () => {
  expect(new Date('01/01/2018')).toBeBefore(new Date('01/01/2019'));
  expect('01/01/2019').not.toBeBefore(new Date('01/01/2018'));
});
```

[Open toBeBefore in repl](https://codesandbox.io/s/github/jest-community/jest-extended/tree/master/docs/sandbox?module=%2Fmatchers%2Fdate%2FtoBeBefore.test.js)

### Function

#### .toBeFunction()

Use `.toBeFunction` when checking if a value is a `Function`.

```js
test('passes when value is a function', () => {
  function noop() {}
  expect(() => {}).toBeFunction();
  expect(noop).toBeFunction();
  expect(true).not.toBeFunction();
});
```

[Open toBeFunction in repl](https://codesandbox.io/s/github/jest-community/jest-extended/tree/master/docs/sandbox?module=%2Fmatchers%2Ffunction%2FtoBeFunction.test.js)

### Mock

#### .toHaveBeenCalledBefore()

Use `.toHaveBeenCalledBefore` when checking if a `Mock` was called before another `Mock`.

_Note: Required Jest version >=23_

```js
it('calls mock1 before mock2', () => {
  const mock1 = jest.fn();
  const mock2 = jest.fn();

  mock1();
  mock2();
  mock1();

  expect(mock1).toHaveBeenCalledBefore(mock2);
});
```

[Open toHaveBeenCalledBefore in repl](https://codesandbox.io/s/github/jest-community/jest-extended/tree/master/docs/sandbox?module=%2Fmatchers%2Fmock%2FtoHaveBeenCalledBefore.test.js)

#### .toHaveBeenCalledAfter()

Use `.toHaveBeenCalledAfter` when checking if a `Mock` was called after another `Mock`.

_Note: Required Jest version >=23_

```js
it('calls mock1 after mock2', () => {
  const mock1 = jest.fn();
  const mock2 = jest.fn();

  mock2();
  mock1();
  mock2();

  expect(mock1).toHaveBeenCalledAfter(mock2);
});
```

[Open toHaveBeenCalledAfter in repl](https://codesandbox.io/s/github/jest-community/jest-extended/tree/master/docs/sandbox?module=%2Fmatchers%2Fmock%2FtoHaveBeenCalledAfter.test.js)

### Number

#### .toBeNumber()

Use `.toBeNumber` when checking if a value is a `Number`.

```js
test('passes when value is a number', () => {
  expect(1).toBeNumber();
  expect(NaN).toBeNumber();
  expect(Infinity).toBeNumber();
  expect(true).not.toBeNumber();
});
```

[Open toBeNumber in repl](https://codesandbox.io/s/github/jest-community/jest-extended/tree/master/docs/sandbox?module=%2Fmatchers%2Fnumber%2FtoBeNumber.test.js)

#### .toBeNaN()

Use `.toBeNaN` when checking a value is `NaN`.

```js
test('passes when value is NaN', () => {
  expect(NaN).toBeNaN();
  expect(1).not.toBeNaN();
});
```

[Open toBeNaN in repl](https://codesandbox.io/s/github/jest-community/jest-extended/tree/master/docs/sandbox?module=%2Fmatchers%2Fnumber%2FtoBeNaN.test.js)

#### .toBeFinite()

Use `.toBeFinite` when checking if a value is a `Number`, not `NaN` or `Infinity`.

```js
test('passes when value is a finite number', () => {
  expect(1).toBeFinite();
  expect(Infinity).not.toBeFinite();
  expect(NaN).not.toBeFinite();
});
```

[Open toBeFinite in repl](https://codesandbox.io/s/github/jest-community/jest-extended/tree/master/docs/sandbox?module=%2Fmatchers%2Fnumber%2FtoBeFinite.test.js)

#### .toBePositive()

Use `.toBePositive` when checking if a value is a positive `Number`.

```js
test('passes when value is a positive number', () => {
  expect(1).toBePositive();
  expect(Infinity).not.toBePositive();
  expect(-1).not.toBePositive();
  expect(NaN).not.toBePositive();
});
```

[Open toBePositive in repl](https://codesandbox.io/s/github/jest-community/jest-extended/tree/master/docs/sandbox?module=%2Fmatchers%2Fnumber%2FtoBePositive.test.js)

#### .toBeNegative()

Use `.toBeNegative` when checking if a value is a negative `Number`.

```js
test('passes when value is a negative number', () => {
  expect(-1).toBeNegative();
  expect(-Infinity).not.toBeNegative();
  expect(1).not.toBeNegative();
  expect(NaN).not.toBeNegative();
});
```

[Open toBeNegative in repl](https://codesandbox.io/s/github/jest-community/jest-extended/tree/master/docs/sandbox?module=%2Fmatchers%2Fnumber%2FtoBeNegative.test.js)

#### .toBeEven()

Use `.toBeEven` when checking if a value is an even `Number`.

```js
test('passes when value is an even number', () => {
  expect(2).toBeEven();
  expect(1).not.toBeEven();
  expect(NaN).not.toBeEven();
});
```

[Open toBeEven in repl](https://codesandbox.io/s/github/jest-community/jest-extended/tree/master/docs/sandbox?module=%2Fmatchers%2Fnumber%2FtoBeEven.test.js)

#### .toBeOdd()

Use `.toBeOdd` when checking if a value is an odd `Number`.

```js
test('passes when value is an odd number', () => {
  expect(1).toBeOdd();
  expect(2).not.toBeOdd();
  expect(NaN).not.toBeOdd();
});
```

[Open toBeOdd in repl](https://codesandbox.io/s/github/jest-community/jest-extended/tree/master/docs/sandbox?module=%2Fmatchers%2Fnumber%2FtoBeOdd.test.js)

#### .toBeWithin(start, end)

Use `.toBeWithin` when checking if a number is in between the given bounds of: start (inclusive) and end (exclusive).

```js
test('passes when number is within given bounds', () => {
  expect(1).toBeWithin(1, 3);
  expect(2).toBeWithin(1, 3);
  expect(3).not.toBeWithin(1, 3);
});
```

[Open toBeWithin in repl](https://codesandbox.io/s/github/jest-community/jest-extended/tree/master/docs/sandbox?module=%2Fmatchers%2Fnumber%2FtoBeWithin.test.js)

### Object

#### .toBeObject()

Use `.toBeObject` when checking if a value is an `Object`.

```js
test('passes when value is an object', () => {
  expect({}).toBeObject();
  expect({ a: 'hello' }).toBeObject();
  expect(true).not.toBeObject();
});
```

[Open toBeObject in repl](https://codesandbox.io/s/github/jest-community/jest-extended/tree/master/docs/sandbox?module=%2Fmatchers%2Fobject%2FtoBeObject.test.js)

#### .toContainKey(key)

Use `.toContainKey` when checking if an object contains the provided key.

```js
test('passes when object contains the given key', () => {
  const o = { a: 'foo', b: 'bar', c: 'baz' };
  expect(o).toContainKey('a');
  expect(o).toContainKey('b');
  expect(o).toContainKey('c');
  expect(o).not.toContainKey('d');
});
```

[Open toContainKey in repl](https://codesandbox.io/s/github/jest-community/jest-extended/tree/master/docs/sandbox?module=%2Fmatchers%2Fobject%2FtoContainKey.test.js)

#### .toContainKeys([keys])

Use `.toContainKeys` when checking if an object has all of the provided keys.

```js
test('passes when object contains all keys', () => {
  const o = { a: 'foo', b: 'bar', c: 'baz' };
  expect(o).toContainKeys(['a', 'b']);
  expect(o).toContainKeys(['b', 'c']);
  expect(o).not.toContainKeys(['d']);
});
```

[Open toContainKeys in repl](https://codesandbox.io/s/github/jest-community/jest-extended/tree/master/docs/sandbox?module=%2Fmatchers%2Fobject%2FtoContainKeys.test.js)

#### .toContainAllKeys([keys])

Use `.toContainAllKeys` when checking if an object only contains all of the provided keys.

```js
test('passes when object only contains all keys', () => {
  const o = { a: 'hello', b: 'world' };
  expect(o).toContainAllKeys(['a', 'b']);
  expect(o).toContainAllKeys(['b', 'a']);
  expect(o).not.toContainAllKeys(['b']);
});
```

[Open toContainAllKeys in repl](https://codesandbox.io/s/github/jest-community/jest-extended/tree/master/docs/sandbox?module=%2Fmatchers%2Fobject%2FtoContainAllKeys.test.js)

#### .toContainAnyKeys([keys])

Use `.toContainAnyKeys` when checking if an object contains at least one of the provided keys.

```js
test('passes when object contains at least one matching key', () => {
  const o = { a: 'hello', b: 'world' };
  expect(o).toContainAnyKeys(['a']);
  expect(o).toContainAnyKeys(['b']);
  expect(o).toContainAnyKeys(['b', 'c']);
  expect(o).not.toContainAnyKeys(['c']);
});
```

[Open toContainAnyKeys in repl](https://codesandbox.io/s/github/jest-community/jest-extended/tree/master/docs/sandbox?module=%2Fmatchers%2Fobject%2FtoContainAnyKeys.test.js)

#### .toContainValue(value)

Use `.toContainValue` when checking if an object contains the provided value.

```js
test('passes when object contains given value', () => {
  const o = { a: 'foo', b: 'bar', c: 'baz' };
  expect(o).toContainValue('foo');
  expect(o).toContainValue('bar');
  expect(o).not.toContainValue('qux');
});
```

[Open toContainValue in repl](https://codesandbox.io/s/github/jest-community/jest-extended/tree/master/docs/sandbox?module=%2Fmatchers%2Fobject%2FtoContainValue.test.js)

#### .toContainValues([values])

Use `.toContainValues` when checking if an object contains all of the provided values.

```js
test('passes when object contains all of the given values', () => {
  const o = { a: 'foo', b: 'bar', c: 'baz' };
  expect(o).toContainValues(['foo']);
  expect(o).toContainValues(['baz', 'bar']);
  expect(o).not.toContainValues(['qux', 'foo']);
});
```

[Open toContainValues in repl](https://codesandbox.io/s/github/jest-community/jest-extended/tree/master/docs/sandbox?module=%2Fmatchers%2Fobject%2FtoContainValues.test.js)

#### .toContainAllValues([values])

Use `.toContainAllValues` when checking if an object only contains all of the provided values.

```js
test('passes when object only contains all of the given values', () => {
  const o = { a: 'foo', b: 'bar', c: 'baz' };
  expect(o).toContainAllValues(['foo', 'bar', 'baz']);
  expect(o).toContainAllValues(['baz', 'bar', 'foo']);
  expect(o).not.toContainAllValues(['bar', 'foo']);
});
```

[Open toContainAllValues in repl](https://codesandbox.io/s/github/jest-community/jest-extended/tree/master/docs/sandbox?module=%2Fmatchers%2Fobject%2FtoContainAllValues.test.js)

#### .toContainAnyValues([values])

Use `.toContainAnyValues` when checking if an object contains at least one of the provided values.

```js
test('passes when object contains at least one of the given values', () => {
  const o = { a: 'foo', b: 'bar', c: 'baz' };
  expect(o).toContainAnyValues(['qux', 'foo']);
  expect(o).toContainAnyValues(['qux', 'bar']);
  expect(o).toContainAnyValues(['qux', 'baz']);
  expect(o).not.toContainAnyValues(['qux']);
});
```

[Open toContainAnyValues in repl](https://codesandbox.io/s/github/jest-community/jest-extended/tree/master/docs/sandbox?module=%2Fmatchers%2Fobject%2FtoContainAnyValues.test.js)

#### .toContainEntry([key, value])

Use `.toContainEntry` when checking if an object contains the provided entry.

```js
test('passes when object contains given entry', () => {
  const o = { a: 'foo', b: 'bar', c: 'baz' };
  expect(o).toContainEntry(['a', 'foo']);
  expect(o).toContainEntry(['b', 'bar']);
  expect(o).toContainEntry(['c', 'baz']);
  expect(o).not.toContainEntry(['a', 'qux']);
});
```

[Open toContainEntry in repl](https://codesandbox.io/s/github/jest-community/jest-extended/tree/master/docs/sandbox?module=%2Fmatchers%2Fobject%2FtoContainEntry.test.js)

#### .toContainEntries([[key, value]])

Use `.toContainEntries` when checking if an object contains all of the provided entries.

```js
test('passes when object contains all of the given entries', () => {
  const o = { a: 'foo', b: 'bar', c: 'baz' };
  expect(o).toContainEntries([['a', 'foo']]);
  expect(o).toContainEntries([['c', 'baz'], ['a', 'foo']]);
  expect(o).not.toContainEntries([['b', 'qux'], ['a', 'foo']]);
});
```

[Open toContainEntries in repl](https://codesandbox.io/s/github/jest-community/jest-extended/tree/master/docs/sandbox?module=%2Fmatchers%2Fobject%2FtoContainEntries.test.js)

#### .toContainAllEntries([[key, value]])

Use `.toContainAllEntries` when checking if an object only contains all of the provided entries.

```js
test('passes when object only contains all of the given entries', () => {
  const o = { a: 'foo', b: 'bar', c: 'baz' };
  expect(o).toContainAllEntries([['a', 'foo'], ['b', 'bar'], ['c', 'baz']]);
  expect(o).not.toContainAllEntries([['a', 'foo'], ['b', 'bar']]);
});
```

[Open toContainAllEntries in repl](https://codesandbox.io/s/github/jest-community/jest-extended/tree/master/docs/sandbox?module=%2Fmatchers%2Fobject%2FtoContainAllEntries.test.js)

#### .toContainAnyEntries([[key, value]])

Use `.toContainAnyEntries` when checking if an object contains at least one of the provided entries.

```js
test('passes when object contains at least one of the given entries', () => {
  const o = { a: 'foo', b: 'bar', c: 'baz' };
  expect(o).toContainAnyEntries([['a', 'qux'], ['a', 'foo']]);
  expect(o).toContainAnyEntries([['a', 'qux'], ['b', 'bar']]);
  expect(o).toContainAnyEntries([['a', 'qux'], ['c', 'baz']]);
  expect(o).not.toContainAnyEntries([['d', 'qux']]);
});
```

[Open toContainAnyEntries in repl](https://codesandbox.io/s/github/jest-community/jest-extended/tree/master/docs/sandbox?module=%2Fmatchers%2Fobject%2FtoContainAnyEntries.test.js)

#### .toBeExtensible()

Use `.toBeExtensible` when checking if an object is extensible.

```js
test('passes when value is extensible', () => {
  expect({ a: 1 }).toBeExtensible();
  expect(1).not.toBeExtensible();
});
```

[Open toBeExtensible in repl](https://codesandbox.io/s/github/jest-community/jest-extended/tree/master/docs/sandbox?module=%2Fmatchers%2Fobject%2FtoBeExtensible.test.js)

#### .toBeFrozen()

Use `.toBeFrozen` when checking if an object is frozen.

```js
test('passes when value is frozen', () => {
  expect(Object.frozen({})).toBeFrozen();
  expect({}).not.toBeFrozen();
  expect(1).not.toBeFrozen();
});
```

[Open toBeFrozen in repl](https://codesandbox.io/s/github/jest-community/jest-extended/tree/master/docs/sandbox?module=%2Fmatchers%2Fobject%2FtoBeFrozen.test.js)

#### .toBeSealed()

Use `.toBeSealed` when checking if an object is sealed.

```js
test('passes when value is sealed', () => {
  expect(Object.seal({})).toBeSealed();
  expect({}).not.toBeSealed();
  expect(1).not.toBeSealed();
});
```

[Open toBeSealed in repl](https://codesandbox.io/s/github/jest-community/jest-extended/tree/master/docs/sandbox?module=%2Fmatchers%2Fobject%2FtoBeSealed.test.js)

### ~~Promise~~

_No APIs proposed yet_

### String

#### .toBeString()

Use `.toBeString` when checking if a value is a `String`.

```js
test('passes when value is a string', () => {
  expect('').toBeString();
  expect('hello').toBeString();
  expect(new String('hello')).toBeString();
  expect(true).not.toBeString();
});
```

[Open toBeString in repl](https://codesandbox.io/s/github/jest-community/jest-extended/tree/master/docs/sandbox?module=%2Fmatchers%2Fstring%2FtoBeString.test.js)

#### .toBeHexadecimal(string)

Use `.toBeHexadecimal` when checking if a value is a valid HTML hexadecimal color.

```js
test('passes when value is a valid hexadecimal', () => {
  expect('#abc123').toBeHexadecimal();
  expect('#FFF').toBeHexadecimal();
  expect('#000000').toBeHexadecimal();
  expect('#123ffg').not.toBeHexadecimal();
});
```

[Open toBeHexadecimal in repl](https://codesandbox.io/s/github/jest-community/jest-extended/tree/master/docs/sandbox?module=%2Fmatchers%2Fstring%2FtoBeHexadecimal.test.js)

#### .toEqualCaseInsensitive(string)

Use `.toEqualCaseInsensitive` when checking if a string is equal (===) to another ignoring the casing of both strings.

```js
test('passes when strings are equal ignoring case', () => {
  expect('hello world').toEqualCaseInsensitive('hello world');
  expect('hello WORLD').toEqualCaseInsensitive('HELLO world');
  expect('HELLO WORLD').toEqualCaseInsensitive('hello world');
  expect('hello world').toEqualCaseInsensitive('HELLO WORLD');
  expect('hello world').not.toEqualCaseInsensitive('hello');
});
```

[Open toEqualCaseInsensitive in repl](https://codesandbox.io/s/github/jest-community/jest-extended/tree/master/docs/sandbox?module=%2Fmatchers%2Fstring%2FtoEqualCaseInsensitive.test.js)

#### .toStartWith(prefix)

Use `.toStartWith` when checking if a `String` starts with a given `String` prefix.

```js
test('passes when value is starts with given string', () => {
  expect('hello world').toStartWith('hello');
  expect('hello world').not.toStartWith('world');
});
```

[Open toStartWith in repl](https://codesandbox.io/s/github/jest-community/jest-extended/tree/master/docs/sandbox?module=%2Fmatchers%2Fstring%2FtoStartWith.test.js)

#### .toEndWith(suffix)

Use `.toEndWith` when checking if a `String` ends with a given `String` suffix.

```js
test('passes when value is ends with given string', () => {
  expect('hello world').toEndWith('world');
  expect('hello world').not.toEndWith('hello');
});
```

[Open toEndWith in repl](https://codesandbox.io/s/github/jest-community/jest-extended/tree/master/docs/sandbox?module=%2Fmatchers%2Fstring%2FtoEndWith.test.js)

#### .toInclude(substring)

Use `.toInclude` when checking if a `String` includes the given `String` substring.

```js
test('passes when value includes substring', () => {
  expect('hello world').toInclude('ell');
  expect('hello world').not.toInclude('bob');
});
```

[Open toInclude in repl](https://codesandbox.io/s/github/jest-community/jest-extended/tree/master/docs/sandbox?module=%2Fmatchers%2Fstring%2FtoInclude.test.js)

#### .toIncludeRepeated(substring, times)

Use `.toIncludeRepeated` when checking if a `String` includes the given `String` substring the correct number of times.

```js
test('passes when value includes substring n times', () => {
  expect('hello hello world').toIncludeRepeated('hello', 2);
  expect('hello hello world').not.toIncludeRepeated('hello', 1);
});
```

[Open toIncludeRepeated in repl](https://codesandbox.io/s/github/jest-community/jest-extended/tree/master/docs/sandbox?module=%2Fmatchers%2Fstring%2FtoIncludeRepeated.test.js)

#### .toIncludeMultiple([substring])

Use `.toIncludeMultiple` when checking if a `String` includes all of the given substrings.

```js
test('passes when value includes all substrings', () => {
  expect('hello world').toIncludeMultiple(['world', 'hello']);
  expect('hello world').not.toIncludeMultiple(['world', 'hello', 'bob']);
});
```

[Open toIncludeMultiple in repl](https://codesandbox.io/s/github/jest-community/jest-extended/tree/master/docs/sandbox?module=%2Fmatchers%2Fstring%2FtoIncludeMultiple.test.js)

## Contributors

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
| [<img src="https://avatars0.githubusercontent.com/u/5610087?v=4" width="100px;"/><br /><sub>Matt Phillips</sub>](http://mattphillips.io)<br />[📝](#blog-mattphillips "Blogposts") [💻](https://github.com/mattphillips/jest-extended/commits?author=mattphillips "Code") [📖](https://github.com/mattphillips/jest-extended/commits?author=mattphillips "Documentation") [💡](#example-mattphillips "Examples") [🚇](#infra-mattphillips "Infrastructure (Hosting, Build-Tools, etc)") [⚠️](https://github.com/mattphillips/jest-extended/commits?author=mattphillips "Tests") | [<img src="https://avatars1.githubusercontent.com/u/611927?v=4" width="100px;"/><br /><sub>Stephen Bluck</sub>](https://github.com/stevebluck)<br />[💻](https://github.com/mattphillips/jest-extended/commits?author=stevebluck "Code") [⚠️](https://github.com/mattphillips/jest-extended/commits?author=stevebluck "Tests") | [<img src="https://avatars3.githubusercontent.com/u/5880416?v=4" width="100px;"/><br /><sub>Christoffer Hasselberg</sub>](https://github.com/stofolus)<br />[💻](https://github.com/mattphillips/jest-extended/commits?author=stofolus "Code") | [<img src="https://avatars1.githubusercontent.com/u/20847518?v=4" width="100px;"/><br /><sub>Brandon Newton</sub>](https://btnwtn.com)<br />[💻](https://github.com/mattphillips/jest-extended/commits?author=btnwtn "Code") [📖](https://github.com/mattphillips/jest-extended/commits?author=btnwtn "Documentation") [⚠️](https://github.com/mattphillips/jest-extended/commits?author=btnwtn "Tests") | [<img src="https://avatars2.githubusercontent.com/u/4533277?v=4" width="100px;"/><br /><sub>Devan Patel</sub>](http://www.devanpatel.me)<br />[💻](https://github.com/mattphillips/jest-extended/commits?author=devanp92 "Code") [📖](https://github.com/mattphillips/jest-extended/commits?author=devanp92 "Documentation") | [<img src="https://avatars2.githubusercontent.com/u/8472688?v=4" width="100px;"/><br /><sub>Gary Leutheuser</sub>](https://GaryLeutheuser.github.io)<br />[💻](https://github.com/mattphillips/jest-extended/commits?author=GaryLeutheuser "Code") | [<img src="https://avatars3.githubusercontent.com/u/24882614?v=4" width="100px;"/><br /><sub>Johan Lindgren</sub>](https://github.com/lindgr3n)<br />[💻](https://github.com/mattphillips/jest-extended/commits?author=lindgr3n "Code") [📖](https://github.com/mattphillips/jest-extended/commits?author=lindgr3n "Documentation") [⚠️](https://github.com/mattphillips/jest-extended/commits?author=lindgr3n "Tests") |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| [<img src="https://avatars1.githubusercontent.com/u/159848?v=4" width="100px;"/><br /><sub>Andrew Hayward</sub>](http://andrewhayward.net)<br />[💻](https://github.com/mattphillips/jest-extended/commits?author=andrewhayward "Code") [⚠️](https://github.com/mattphillips/jest-extended/commits?author=andrewhayward "Tests") | [<img src="https://avatars3.githubusercontent.com/u/6209178?v=4" width="100px;"/><br /><sub>Oliver Schneider</sub>](https://ols.io)<br />[💻](https://github.com/mattphillips/jest-extended/commits?author=olsio "Code") [⚠️](https://github.com/mattphillips/jest-extended/commits?author=olsio "Tests") | [<img src="https://avatars1.githubusercontent.com/u/22359375?s=460&v=4" width="100px;"/><br /><sub>Tyle Whalen</sub>](https://github.com/tjwhalen16)<br />[💻](https://github.com/mattphillips/jest-extended/commits?author=tjwhalen16 "Code") [📖](https://github.com/mattphillips/jest-extended/commits?author=tjwhalen16 "Documentation") | [<img src="https://avatars2.githubusercontent.com/u/17944339?v=4" width="100px;"/><br /><sub>Martius</sub>](https://github.com/martiuslim)<br />[💻](https://github.com/mattphillips/jest-extended/commits?author=martiuslim "Code") [⚠️](https://github.com/mattphillips/jest-extended/commits?author=martiuslim "Tests") | [<img src="https://avatars2.githubusercontent.com/u/10856932?v=4" width="100px;"/><br /><sub>Eli Collis</sub>](https://github.com/ecollis6)<br />[💻](https://github.com/mattphillips/jest-extended/commits?author=ecollis6 "Code") | [<img src="https://avatars0.githubusercontent.com/u/10706203?v=4" width="100px;"/><br /><sub>Marcin Lichwała</sub>](https://github.com/marcinlichwala)<br />[💻](https://github.com/mattphillips/jest-extended/commits?author=marcinlichwala "Code") [⚠️](https://github.com/mattphillips/jest-extended/commits?author=marcinlichwala "Tests") | [<img src="https://avatars3.githubusercontent.com/u/1984733?v=4" width="100px;"/><br /><sub>Massimo Prencipe</sub>](https://github.com/mprencipe)<br />[💻](https://github.com/mattphillips/jest-extended/commits?author=mprencipe "Code") [⚠️](https://github.com/mattphillips/jest-extended/commits?author=mprencipe "Tests") |
| [<img src="https://avatars2.githubusercontent.com/u/33098064?v=4" width="100px;"/><br /><sub>mjmiles</sub>](https://github.com/mjmiles)<br />[💻](https://github.com/mattphillips/jest-extended/commits?author=mjmiles "Code") [📖](https://github.com/mattphillips/jest-extended/commits?author=mjmiles "Documentation") | [<img src="https://avatars1.githubusercontent.com/u/13333582?v=4" width="100px;"/><br /><sub>Gary Meehan</sub>](https://github.com/garmeeh)<br />[💻](https://github.com/mattphillips/jest-extended/commits?author=garmeeh "Code") [📖](https://github.com/mattphillips/jest-extended/commits?author=garmeeh "Documentation") [⚠️](https://github.com/mattphillips/jest-extended/commits?author=garmeeh "Tests") | [<img src="https://avatars2.githubusercontent.com/u/3191489?v=4" width="100px;"/><br /><sub>Fredrik Mäkilä</sub>](https://github.com/GitHug)<br />[💻](https://github.com/mattphillips/jest-extended/commits?author=GitHug "Code") [⚠️](https://github.com/mattphillips/jest-extended/commits?author=GitHug "Tests") | [<img src="https://avatars2.githubusercontent.com/u/9046616?v=4" width="100px;"/><br /><sub>Daniel Reinoso</sub>](http://kloc.io/)<br />[💻](https://github.com/mattphillips/jest-extended/commits?author=danielr18 "Code") [⚠️](https://github.com/mattphillips/jest-extended/commits?author=danielr18 "Tests") | [<img src="https://avatars1.githubusercontent.com/u/4359781?v=4" width="100px;"/><br /><sub>Chris Hut</sub>](https://github.com/tophernuts)<br />[💻](https://github.com/mattphillips/jest-extended/commits?author=tophernuts "Code") [⚠️](https://github.com/mattphillips/jest-extended/commits?author=tophernuts "Tests") | [<img src="https://avatars2.githubusercontent.com/u/1513183?v=4" width="100px;"/><br /><sub>Kelvin Ly</sub>](https://github.com/cactorium)<br />[💻](https://github.com/mattphillips/jest-extended/commits?author=cactorium "Code") [⚠️](https://github.com/mattphillips/jest-extended/commits?author=cactorium "Tests") | [<img src="https://avatars0.githubusercontent.com/u/11182826?v=4" width="100px;"/><br /><sub>Francis Ngo</sub>](https://github.com/francisngo)<br />[💻](https://github.com/mattphillips/jest-extended/commits?author=francisngo "Code") [⚠️](https://github.com/mattphillips/jest-extended/commits?author=francisngo "Tests") |
| [<img src="https://avatars1.githubusercontent.com/u/10330923?v=4" width="100px;"/><br /><sub>Amish Shah</sub>](https://hydrabolt.me/)<br />[💻](https://github.com/mattphillips/jest-extended/commits?author=hydrabolt "Code") [⚠️](https://github.com/mattphillips/jest-extended/commits?author=hydrabolt "Tests") | [<img src="https://avatars3.githubusercontent.com/u/2045206?v=4" width="100px;"/><br /><sub>Dave Cooper</sub>](http://davecooper.org)<br />[💻](https://github.com/mattphillips/jest-extended/commits?author=grug "Code") [⚠️](https://github.com/mattphillips/jest-extended/commits?author=grug "Tests") | [<img src="https://avatars3.githubusercontent.com/u/3630495?v=4" width="100px;"/><br /><sub>Swann Polydor</sub>](https://github.com/soueuls)<br />[💻](https://github.com/mattphillips/jest-extended/commits?author=soueuls "Code") [⚠️](https://github.com/mattphillips/jest-extended/commits?author=soueuls "Tests") | [<img src="https://avatars1.githubusercontent.com/u/2027003?v=4" width="100px;"/><br /><sub>vikneshwar</sub>](https://github.com/vikneshwar)<br />[💻](https://github.com/mattphillips/jest-extended/commits?author=vikneshwar "Code") [⚠️](https://github.com/mattphillips/jest-extended/commits?author=vikneshwar "Tests") | [<img src="https://avatars1.githubusercontent.com/u/1243921?v=4" width="100px;"/><br /><sub>Budi Irawan</sub>](http://budiirawan.com)<br />[💻](https://github.com/mattphillips/jest-extended/commits?author=deerawan "Code") [⚠️](https://github.com/mattphillips/jest-extended/commits?author=deerawan "Tests") | [<img src="https://avatars2.githubusercontent.com/u/980783?v=4" width="100px;"/><br /><sub>Tejas Bubane</sub>](http://foss-geek.blogspot.com/)<br />[💻](https://github.com/mattphillips/jest-extended/commits?author=tejasbubane "Code") [⚠️](https://github.com/mattphillips/jest-extended/commits?author=tejasbubane "Tests") [📖](https://github.com/mattphillips/jest-extended/commits?author=tejasbubane "Documentation") | [<img src="https://avatars2.githubusercontent.com/u/13134653?v=4" width="100px;"/><br /><sub>Subinoy Ghosh</sub>](https://github.com/subinoy7)<br />[💻](https://github.com/mattphillips/jest-extended/commits?author=subinoy7 "Code") [⚠️](https://github.com/mattphillips/jest-extended/commits?author=subinoy7 "Tests") |
| [<img src="https://avatars1.githubusercontent.com/u/1404810?v=4" width="100px;"/><br /><sub>Simen Bekkhus</sub>](https://github.com/SimenB)<br />[📖](https://github.com/mattphillips/jest-extended/commits?author=SimenB "Documentation") | [<img src="https://avatars2.githubusercontent.com/u/49038?v=4" width="100px;"/><br /><sub>Orta</sub>](http://orta.io)<br />[📖](https://github.com/mattphillips/jest-extended/commits?author=orta "Documentation") | [<img src="https://avatars3.githubusercontent.com/u/17221813?v=4" width="100px;"/><br /><sub>Tom</sub>](https://jsdevtom.com)<br />[💻](https://github.com/mattphillips/jest-extended/commits?author=jsdevtom "Code") [📖](https://github.com/mattphillips/jest-extended/commits?author=jsdevtom "Documentation") [💡](#example-jsdevtom "Examples") [⚠️](https://github.com/mattphillips/jest-extended/commits?author=jsdevtom "Tests") | [<img src="https://avatars0.githubusercontent.com/u/15064535?v=4" width="100px;"/><br /><sub>Lucian Buzzo</sub>](https://github.com/LucianBuzzo)<br /> | [<img src="https://avatars3.githubusercontent.com/u/2997844?v=4" width="100px;"/><br /><sub>Thiago Delgado Pinto</sub>](https://github.com/thiagodp)<br />[💻](https://github.com/mattphillips/jest-extended/commits?author=thiagodp "Code") [📖](https://github.com/mattphillips/jest-extended/commits?author=thiagodp "Documentation") [💡](#example-thiagodp "Examples") [🤔](#ideas-thiagodp "Ideas, Planning, & Feedback") [⚠️](https://github.com/mattphillips/jest-extended/commits?author=thiagodp "Tests") | [<img src="https://avatars0.githubusercontent.com/u/3042904?v=4" width="100px;"/><br /><sub>Ragnar Laud</sub>](https://github.com/xprn)<br />[💻](https://github.com/mattphillips/jest-extended/commits?author=xprn "Code") [📖](https://github.com/mattphillips/jest-extended/commits?author=xprn "Documentation") | [<img src="https://avatars0.githubusercontent.com/u/3047126?v=4" width="100px;"/><br /><sub>Luiz Américo</sub>](https://github.com/blikblum)<br />[💻](https://github.com/mattphillips/jest-extended/commits?author=blikblum "Code") |
| [<img src="https://avatars0.githubusercontent.com/u/615334?v=4" width="100px;"/><br /><sub>Frederick Fogerty</sub>](https://github.com/frederickfogerty)<br />[💻](https://github.com/mattphillips/jest-extended/commits?author=frederickfogerty "Code") [🤔](#ideas-frederickfogerty "Ideas, Planning, & Feedback") | [<img src="https://avatars1.githubusercontent.com/u/10714808?v=4" width="100px;"/><br /><sub>Benjamin Kay</sub>](https://github.com/benjaminkay93)<br />[💻](https://github.com/mattphillips/jest-extended/commits?author=benjaminkay93 "Code") [📖](https://github.com/mattphillips/jest-extended/commits?author=benjaminkay93 "Documentation") | [<img src="https://avatars1.githubusercontent.com/u/868844?v=4" width="100px;"/><br /><sub>Gilles De Mey</sub>](https://demey.io)<br />[💻](https://github.com/mattphillips/jest-extended/commits?author=gillesdemey "Code") [📖](https://github.com/mattphillips/jest-extended/commits?author=gillesdemey "Documentation") [⚠️](https://github.com/mattphillips/jest-extended/commits?author=gillesdemey "Tests") | [<img src="https://avatars0.githubusercontent.com/u/50928?v=4" width="100px;"/><br /><sub>Deniz Dogan</sub>](https://github.com/denizdogan)<br />[💻](https://github.com/mattphillips/jest-extended/commits?author=denizdogan "Code") | [<img src="https://avatars1.githubusercontent.com/u/13043635?v=4" width="100px;"/><br /><sub>Mikey Powers</sub>](https://github.com/mvpowers)<br />[💻](https://github.com/mattphillips/jest-extended/commits?author=mvpowers "Code") [📖](https://github.com/mattphillips/jest-extended/commits?author=mvpowers "Documentation") [⚠️](https://github.com/mattphillips/jest-extended/commits?author=mvpowers "Tests") |
<!-- ALL-CONTRIBUTORS-LIST:END -->

## LICENSE

[MIT](/LICENSE)
