import toBeTrue from './toBeTrue';
import toContainValue from './toContainValue';
import toContainValues from './toContainValues';
import toEqualCaseInsensitive from './toEqualCaseInsensitive';
import toStartWith from './toStartWith';
import toEndWith from './toEndWith';
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
  toEqualCaseInsensitive,
  toStartWith,
  toEndWith,
  toBeOneOf,
  toContainKey,
  toBeString,
  toBeExtensible,
  toBeWithin
].reduce((acc, matcher) => ({ ...acc, ...matcher }), {});
