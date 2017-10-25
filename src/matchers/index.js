import toBeTrue from './toBeTrue';
import toContainValue from './toContainValue';
import toContainValues from './toContainValues';
import toEqualCaseInsensitive from './toEqualCaseInsensitive';
import toStartWith from './toStartWith';
import toBeNegative from './toBeNegative';
import toBeOneOf from './toBeOneOf';
import toContainKey from './toContainKey';
import toBeString from './toBeString';
import toBeExtensible from './toBeExtensible';
import toBeWithin from './toBeWithin';
import toIncludeMultiple from './toIncludeMultiple';
import toEndWith from './toEndWith';
import toBeFrozen from './toBeFrozen';

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
  toBeWithin,
  toIncludeMultiple,
  toEndWith,
  toBeFrozen
].reduce((acc, matcher) => ({ ...acc, ...matcher }), {});
