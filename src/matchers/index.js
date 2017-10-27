import toBeEven from './toBeEven';
import toBeTrue from './toBeTrue';
import toBeFalse from './toBeFalse';
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
import toBeObject from './toBeObject';
import toContainAllKeys from './toContainAllKeys';
import toContainAnyKeys from './toContainAnyKeys';
import toContainKeys from './toContainKeys';
import toBeFinite from './toBeFinite';
import toIncludeAnyMembers from './toIncludeAnyMembers';
import toIncludeAllMembers from './toIncludeAllMembers';
import toBeNaN from './toBeNaN';
import toBePositive from './toBePositive';
import toInclude from './toInclude';

export default [
  toBeEven,
  toBeTrue,
  toBeFalse,
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
  toBeFrozen,
  toBeObject,
  toContainAllKeys,
  toContainAnyKeys,
  toContainKeys,
  toBeFinite,
  toIncludeAnyMembers,
  toIncludeAllMembers,
  toBeNaN,
  toBePositive,
  toInclude
].reduce((acc, matcher) => ({ ...acc, ...matcher }), {});
