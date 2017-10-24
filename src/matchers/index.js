import toBeTrue from './toBeTrue';
import toContainValue from './toContainValue';
import toContainValues from './toContainValues';
import toBeArray from './toBeArray';
import toEqualCaseInsensitive from './toEqualCaseInsensitive';
import toStartWith from './toStartWith';
import toBeNegative from './toBeNegative';
import toBeOneOf from './toBeOneOf';
import toContainKey from './toContainKey';
import toBeString from './toBeString';
import toBeExtensible from './toBeExtensible';
import toBeWithin from './toBeWithin';

export default [
  toBeTrue,
  toContainValue,
  toContainValues,
  toBeArray,
  toEqualCaseInsensitive,
  toStartWith,
  toBeNegative,
  toBeOneOf,
  toContainKey,
  toBeString,
  toBeExtensible,
  toBeWithin
].reduce((acc, matcher) => ({ ...acc, ...matcher }), {});
