import toBeTrue from './toBeTrue';
import toContainValue from './toContainValue';
import toContainValues from './toContainValues';
import toEqualCaseInsensitive from './toEqualCaseInsensitive';
import toBeExtensible from './toBeExtensible';
import toStartWith from './toStartWith';
import toBeNegative from './toBeNegative';
import toBeOneOf from './toBeOneOf';
import toContainKey from './toContainKey';
import toBeString from './toBeString';
import toHaveSomeMembers from './toHaveSomeMembers';

export default [
  toBeTrue,
  toContainValue,
  toContainValues,
  toEqualCaseInsensitive,
  toStartWith,
  toBeNegative,
  toBeOneOf,
  toContainKey,
  toBeString,
  toBeExtensible,
  toHaveSomeMembers
].reduce((acc, matcher) => ({ ...acc, ...matcher }), {});
