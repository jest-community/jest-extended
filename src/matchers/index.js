import toBeEven from './toBeEven';
import toBeTrue from './toBeTrue';
import toBeFalse from './toBeFalse';
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
import toBeBoolean from './toBeBoolean';
import toBeFunction from './toBeFunction';
import toBeNumber from './toBeNumber';
import toBeOdd from './toBeOdd';
import toContainAllValues from './toContainAllValues';
import toContainEntry from './toContainEntry';
import toContainAllEntries from './toContainAllEntries';
import toContainEntries from './toContainEntries';
import toContainAnyEntries from './toContainAnyEntries';

export default [
  toBeEven,
  toBeTrue,
  toBeFalse,
  toContainValue,
  toContainValues,
  toBeArray,
  toEqualCaseInsensitive,
  toStartWith,
  toBeNegative,
  toBeOneOf,
  toContainKey,
  toBeExtensible,
  toBeString,
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
  toInclude,
  toBeBoolean,
  toBeFunction,
  toBeNumber,
  toBeOdd,
  toContainAllValues,
  toContainEntry,
  toContainAllEntries,
  toContainEntries,
  toContainAnyEntries
].reduce((acc, matcher) => ({ ...acc, ...matcher }), {});
