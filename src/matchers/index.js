import failMatcher from './fail';
import passMatcher from './pass';
import toBeAfterMatcher from './toBeAfter';
import toBeArrayMatcher from './toBeArray';
import toBeArrayOfSizeMatcher from './toBeArrayOfSize';
import toBeBeforeMatcher from './toBeBefore';
import toBeBooleanMatcher from './toBeBoolean';
import toBeDateMatcher from './toBeDate';
import toBeDateStringMatcher from './toBeDateString';
import toBeEmptyMatcher from './toBeEmpty';
import toBeEmptyObjectMatcher from './toBeEmptyObject';
import toBeEvenMatcher from './toBeEven';
import toBeExtensibleMatcher from './toBeExtensible';
import toBeFalseMatcher from './toBeFalse';
import toBeFiniteMatcher from './toBeFinite';
import toBeFrozenMatcher from './toBeFrozen';
import toBeFunctionMatcher from './toBeFunction';
import toBeHexadecimalMatcher from './toBeHexadecimal';
import toBeIntegerMatcher from './toBeInteger';
import toBeNaNMatcher from './toBeNaN';
import toBeNegativeMatcher from './toBeNegative';
import toBeNilMatcher from './toBeNil';
import toBeNumberMatcher from './toBeNumber';
import toBeObjectMatcher from './toBeObject';
import toBeOddMatcher from './toBeOdd';
import toBeOneOfMatcher from './toBeOneOf';
import toBePositiveMatcher from './toBePositive';
import toBeSealedMatcher from './toBeSealed';
import toBeStringMatcher from './toBeString';
import toBeSymbolMatcher from './toBeSymbol';
import toBeTrueMatcher from './toBeTrue';
import toBeValidDateMatcher from './toBeValidDate';
import toBeWithinMatcher from './toBeWithin';
import toContainAllEntriesMatcher from './toContainAllEntries';
import toContainAllKeysMatcher from './toContainAllKeys';
import toContainAllValuesMatcher from './toContainAllValues';
import toContainAnyEntriesMatcher from './toContainAnyEntries';
import toContainAnyKeysMatcher from './toContainAnyKeys';
import toContainAnyValuesMatcher from './toContainAnyValues';
import toContainEntriesMatcher from './toContainEntries';
import toContainEntryMatcher from './toContainEntry';
import toContainKeyMatcher from './toContainKey';
import toContainKeysMatcher from './toContainKeys';
import toContainValueMatcher from './toContainValue';
import toContainValuesMatcher from './toContainValues';
import toEndWithMatcher from './toEndWith';
import toEqualCaseInsensitiveMatcher from './toEqualCaseInsensitive';
import toHaveBeenCalledAfterMatcher from './toHaveBeenCalledAfter';
import toHaveBeenCalledBeforeMatcher from './toHaveBeenCalledBefore';
import toIncludeMatcher from './toInclude';
import toIncludeAllMembersMatcher from './toIncludeAllMembers';
import toIncludeAllPartialMembersMatcher from './toIncludeAllPartialMembers';
import toIncludeAnyMembersMatcher from './toIncludeAnyMembers';
import toIncludeMultipleMatcher from './toIncludeMultiple';
import toIncludeRepeatedMatcher from './toIncludeRepeated';
import toIncludeSameMembersMatcher from './toIncludeSameMembers';
import toRejectMatcher from './toReject';
import toResolveMatcher from './toResolve';
import toSatisfyMatcher from './toSatisfy';
import toSatisfyAllMatcher from './toSatisfyAll';
import toSatisfyAnyMatcher from './toSatisfyAny';
import toStartWithMatcher from './toStartWith';
import toThrowWithMessageMatcher from './toThrowWithMessage';

// this is absolutely horrible, but all matchers are default exports of an object with the name of the matcher

export const fail = failMatcher.fail;
export const pass = passMatcher.pass;
export const toBeAfter = toBeAfterMatcher.toBeAfter;
export const toBeArray = toBeArrayMatcher.toBeArray;
export const toBeArrayOfSize = toBeArrayOfSizeMatcher.toBeArrayOfSize;
export const toBeBefore = toBeBeforeMatcher.toBeBefore;
export const toBeBoolean = toBeBooleanMatcher.toBeBoolean;
export const toBeDate = toBeDateMatcher.toBeDate;
export const toBeDateString = toBeDateStringMatcher.toBeDateString;
export const toBeEmpty = toBeEmptyMatcher.toBeEmpty;
export const toBeEmptyObject = toBeEmptyObjectMatcher.toBeEmptyObject;
export const toBeEven = toBeEvenMatcher.toBeEven;
export const toBeExtensible = toBeExtensibleMatcher.toBeExtensible;
export const toBeFalse = toBeFalseMatcher.toBeFalse;
export const toBeFinite = toBeFiniteMatcher.toBeFinite;
export const toBeFrozen = toBeFrozenMatcher.toBeFrozen;
export const toBeFunction = toBeFunctionMatcher.toBeFunction;
export const toBeHexadecimal = toBeHexadecimalMatcher.toBeHexadecimal;
export const toBeInteger = toBeIntegerMatcher.toBeInteger;
export const toBeNaN = toBeNaNMatcher.toBeNaN;
export const toBeNegative = toBeNegativeMatcher.toBeNegative;
export const toBeNil = toBeNilMatcher.toBeNil;
export const toBeNumber = toBeNumberMatcher.toBeNumber;
export const toBeObject = toBeObjectMatcher.toBeObject;
export const toBeOdd = toBeOddMatcher.toBeOdd;
export const toBeOneOf = toBeOneOfMatcher.toBeOneOf;
export const toBePositive = toBePositiveMatcher.toBePositive;
export const toBeSealed = toBeSealedMatcher.toBeSealed;
export const toBeString = toBeStringMatcher.toBeString;
export const toBeSymbol = toBeSymbolMatcher.toBeSymbol;
export const toBeTrue = toBeTrueMatcher.toBeTrue;
export const toBeValidDate = toBeValidDateMatcher.toBeValidDate;
export const toBeWithin = toBeWithinMatcher.toBeWithin;
export const toContainAllEntries = toContainAllEntriesMatcher.toContainAllEntries;
export const toContainAllKeys = toContainAllKeysMatcher.toContainAllKeys;
export const toContainAllValues = toContainAllValuesMatcher.toContainAllValues;
export const toContainAnyEntries = toContainAnyEntriesMatcher.toContainAnyEntries;
export const toContainAnyKeys = toContainAnyKeysMatcher.toContainAnyKeys;
export const toContainAnyValues = toContainAnyValuesMatcher.toContainAnyValues;
export const toContainEntries = toContainEntriesMatcher.toContainEntries;
export const toContainEntry = toContainEntryMatcher.toContainEntry;
export const toContainKey = toContainKeyMatcher.toContainKey;
export const toContainKeys = toContainKeysMatcher.toContainKeys;
export const toContainValue = toContainValueMatcher.toContainValue;
export const toContainValues = toContainValuesMatcher.toContainValues;
export const toEndWith = toEndWithMatcher.toEndWith;
export const toEqualCaseInsensitive = toEqualCaseInsensitiveMatcher.toEqualCaseInsensitive;
export const toHaveBeenCalledAfter = toHaveBeenCalledAfterMatcher.toHaveBeenCalledAfter;
export const toHaveBeenCalledBefore = toHaveBeenCalledBeforeMatcher.toHaveBeenCalledBefore;
export const toInclude = toIncludeMatcher.toInclude;
export const toIncludeAllMembers = toIncludeAllMembersMatcher.toIncludeAllMembers;
export const toIncludeAllPartialMembers = toIncludeAllPartialMembersMatcher.toIncludeAllPartialMembers;
export const toIncludeAnyMembers = toIncludeAnyMembersMatcher.toIncludeAnyMembers;
export const toIncludeMultiple = toIncludeMultipleMatcher.toIncludeMultiple;
export const toIncludeRepeated = toIncludeRepeatedMatcher.toIncludeRepeated;
export const toIncludeSameMembers = toIncludeSameMembersMatcher.toIncludeSameMembers;
export const toReject = toRejectMatcher.toReject;
export const toResolve = toResolveMatcher.toResolve;
export const toSatisfy = toSatisfyMatcher.toSatisfy;
export const toSatisfyAll = toSatisfyAllMatcher.toSatisfyAll;
export const toSatisfyAny = toSatisfyAnyMatcher.toSatisfyAny;
export const toStartWith = toStartWithMatcher.toStartWith;
export const toThrowWithMessage = toThrowWithMessageMatcher.toThrowWithMessage;
