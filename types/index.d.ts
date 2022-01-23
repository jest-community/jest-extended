/// <reference types="jest" />

declare namespace jest {
  // noinspection JSUnusedGlobalSymbols
  interface Matchers<R> {
    /**
     * Note: Currently unimplemented
     * Passing assertion
     *
     * @param {String} message
     */
    pass(message: string): R;

    /**
     * Note: Currently unimplemented
     * Failing assertion
     *
     * @param {String} message
     */
    fail(message: string): never;

    /**
     * Use .toBeEmpty when checking if a String '', Array [], Object {} or Iterable (i.e. Map, Set) is empty.
     */
    toBeEmpty(): R;

    /**
     * Use .toBeOneOf when checking if a value is a member of a given Array.
     * @param {Array.<*>} members
     */
    toBeOneOf<E = any>(members: E[]): R;

    /**
     * Use `.toBeNil` when checking a value is `null` or `undefined`.
     */
    toBeNil(): R;

    /**
     * Use `.toSatisfy` when you want to use a custom matcher by supplying a predicate function that returns a `Boolean`.
     * @param {Function} predicate
     */
    toSatisfy<E = any>(predicate: (x: E) => boolean): R;

    /**
     * Use `.toBeArray` when checking if a value is an `Array`.
     */
    toBeArray(): R;

    /**
     * Use `.toBeArrayOfSize` when checking if a value is an `Array` of size x.
     * @param {Number} x
     */
    toBeArrayOfSize(x: number): R;

    /**
     * Use `.toBeAfter` when checking if a date occurs after `date`.
     * @param {Date} date
     */
    toBeAfter(date: Date): R;

    /**
     * Use `.toBeBefore` when checking if a date occurs before `date`.
     * @param {Date} date
     */
    toBeBefore(date: Date): R;

    /**
     * Use `.toIncludeAllMembers` when checking if an `Array` contains all of the same members of a given set.
     * @param {Array.<*>} members
     */
    toIncludeAllMembers<E = any>(members: E[]): R;

    /**
     * Use `.toIncludeAllPartialMembers` when checking if an `Array` contains all of the same partial members of a given set.
     * @param {Array.<*>} members
     */
    toIncludeAllPartialMembers<E = any>(members: E[]): R;

    /**
     * Use `.toIncludeAnyMembers` when checking if an `Array` contains any of the members of a given set.
     * @param {Array.<*>} members
     */
    toIncludeAnyMembers<E = any>(members: E[]): R;

    /**
     * Use `.toIncludeSameMembers` when checking if two arrays contain equal values, in any order.
     * @param {Array.<*>} members
     */
    toIncludeSameMembers<E = any>(members: E[]): R;

    /**
     * Use `.toPartiallyContain` when checking if any array value matches the partial member.
     * @param {*} member
     */
    toPartiallyContain<E = any>(member: E): R;

    /**
     * Use `.toSatisfyAll` when you want to use a custom matcher by supplying a predicate function that returns a `Boolean` for all values in an array.
     * @param {Function} predicate
     */
    toSatisfyAll<E = any>(predicate: (x: E) => boolean): R;

    /**
     * Use `.toSatisfyAny` when you want to use a custom matcher by supplying a predicate function that returns `true` for any matching value in an array.
     * @param {Function} predicate
     */
    toSatisfyAny(predicate: (x: any) => boolean): R;

    /**
     * Use `.toBeBoolean` when checking if a value is a `Boolean`.
     */
    toBeBoolean(): R;

    /**
     * Use `.toBeTrue` when checking a value is equal (===) to `true`.
     */
    toBeTrue(): R;

    /**
     * Use `.toBeFalse` when checking a value is equal (===) to `false`.
     */
    toBeFalse(): R;

    /**
     * Use `.toBeDate` when checking if a value is a `Date`.
     */
    toBeDate(): R;

    /**
     * Use `.toBeValidDate` when checking if a value is a `valid Date`.
     */
    toBeValidDate(): R;

    /**
     * Use `.toBeFunction` when checking if a value is a `Function`.
     */
    toBeFunction(): R;

    /**
     * Use `.toBeDateString` when checking if a value is a valid date string.
     */
    toBeDateString(): R;

    /**
     * Use `.toBeHexadecimal` when checking if a value is a valid HTML hex color.
     */
    toBeHexadecimal(): R;

    /**
     * Use `.toHaveBeenCalledBefore` when checking if a `Mock` was called before another `Mock`.
     *
     * Note: Required Jest version >=23
     *
     * @param {Mock} mock
     */
    toHaveBeenCalledBefore(mock: jest.Mock): R;

    /**
     * Use `.toHaveBeenCalledAfter` when checking if a `Mock` was called after another `Mock`.
     *
     * Note: Required Jest version >=23
     *
     * @param {Mock} mock
     */
    toHaveBeenCalledAfter(mock: jest.Mock): R;

    /**
     * Use `.toHaveBeenCalledOnce` to check if a `Mock` was called exactly one time.
     */
    toHaveBeenCalledOnce(): R;

    /**
     * Use `.toBeNumber` when checking if a value is a `Number`.
     */
    toBeNumber(): R;

    /**
     * Use `.toBeNaN` when checking a value is `NaN`.
     */
    toBeNaN(): R;

    /**
     * Use `.toBeFinite` when checking if a value is a `Number`, not `NaN` or `Infinity`.
     */
    toBeFinite(): R;

    /**
     * Use `.toBePositive` when checking if a value is a positive `Number`.
     */
    toBePositive(): R;

    /**
     * Use `.toBeNegative` when checking if a value is a negative `Number`.
     */
    toBeNegative(): R;

    /**
     * Use `.toBeEven` when checking if a value is an even `Number`.
     */
    toBeEven(): R;

    /**
     * Use `.toBeOdd` when checking if a value is an odd `Number`.
     */
    toBeOdd(): R;

    /**
     * Use `.toBeWithin` when checking if a number is in between the given bounds of: start (inclusive) and end (exclusive).
     *
     * @param {Number} start
     * @param {Number} end
     */
    toBeWithin(start: number, end: number): R;

    /**
     * Use `.toBeInteger` when checking if a value is an integer.
     */
    toBeInteger(): R;

    /**
     * Use `.toBeObject` when checking if a value is an `Object`.
     */
    toBeObject(): R;

    /**
     * Use `.toContainKey` when checking if an object contains the provided key.
     *
     * @param {String} key
     */
    toContainKey<E = any>(key: keyof E | string): R;

    /**
     * Use `.toContainKeys` when checking if an object has all of the provided keys.
     *
     * @param {Array.<String>} keys
     */
    toContainKeys<E = any>(keys: (keyof E | string)[]): R;

    /**
     * Use `.toContainAllKeys` when checking if an object only contains all of the provided keys.
     *
     * @param {Array.<String>} keys
     */
    toContainAllKeys<E = any>(keys: (keyof E | string)[]): R;

    /**
     * Use `.toContainAnyKeys` when checking if an object contains at least one of the provided keys.
     *
     * @param {Array.<String>} keys
     */
    toContainAnyKeys<E = any>(keys: (keyof E | string)[]): R;

    /**
     * Use `.toContainValue` when checking if an object contains the provided value.
     *
     * @param {*} value
     */
    toContainValue<E = any>(value: E): R;

    /**
     * Use `.toContainValues` when checking if an object contains all of the provided values.
     *
     * @param {Array.<*>} values
     */
    toContainValues<E = any>(values: E[]): R;

    /**
     * Use `.toContainAllValues` when checking if an object only contains all of the provided values.
     *
     * @param {Array.<*>} values
     */
    toContainAllValues<E = any>(values: E[]): R;

    /**
     * Use `.toContainAnyValues` when checking if an object contains at least one of the provided values.
     *
     * @param {Array.<*>} values
     */
    toContainAnyValues<E = any>(values: E[]): R;

    /**
     * Use `.toContainEntry` when checking if an object contains the provided entry.
     *
     * @param {Array.<String, String>} entry
     */
    toContainEntry<E = any>(entry: [keyof E, E[keyof E]]): R;

    /**
     * Use `.toContainEntries` when checking if an object contains all of the provided entries.
     *
     * @param {Array.<Array.<keyof E, E[keyof E]>>} entries
     */
    toContainEntries<E = any>(entries: [keyof E, E[keyof E]][]): R;

    /**
     * Use `.toContainAllEntries` when checking if an object only contains all of the provided entries.
     *
     * @param {Array.<Array.<keyof E, E[keyof E]>>} entries
     */
    toContainAllEntries<E = any>(entries: [keyof E, E[keyof E]][]): R;

    /**
     * Use `.toContainAnyEntries` when checking if an object contains at least one of the provided entries.
     *
     * @param {Array.<Array.<keyof E, E[keyof E]>>} entries
     */
    toContainAnyEntries<E = any>(entries: [keyof E, E[keyof E]][]): R;

    /**
     * Use `.toBeExtensible` when checking if an object is extensible.
     */
    toBeExtensible(): R;

    /**
     * Use `.toBeFrozen` when checking if an object is frozen.
     */
    toBeFrozen(): R;

    /**
     * Use `.toBeSealed` when checking if an object is sealed.
     */
    toBeSealed(): R;

    /**
     * Use `.toResolve` when checking if a promise resolves.
     */
    toResolve(): Promise<R>;

    /**
     * Use `.toReject` when checking if a promise rejects.
     */
    toReject(): Promise<R>;

    /**
     * Use `.toBeString` when checking if a value is a `String`.
     */
    toBeString(): R;

    /**
     * Use `.toEqualCaseInsensitive` when checking if a string is equal (===) to another ignoring the casing of both strings.
     *
     * @param {String} string
     */
    toEqualCaseInsensitive(string: string): R;

    /**
     * Use `.toStartWith` when checking if a `String` starts with a given `String` prefix.
     *
     * @param {String} prefix
     */
    toStartWith(prefix: string): R;

    /**
     * Use `.toEndWith` when checking if a `String` ends with a given `String` suffix.
     *
     * @param {String} suffix
     */
    toEndWith(suffix: string): R;

    /**
     * Use `.toInclude` when checking if a `String` includes the given `String` substring.
     *
     * @param {String} substring
     */
    toInclude(substring: string): R;

    /**
     * Use `.toIncludeRepeated` when checking if a `String` includes the given `String` substring the correct number of times.
     *
     * @param {String} substring
     * @param {Number} times
     */
    toIncludeRepeated(substring: string, times: number): R;

    /**
     * Use `.toIncludeMultiple` when checking if a `String` includes all of the given substrings.
     *
     * @param {Array.<String>} substring
     */
    toIncludeMultiple(substring: string[]): R;

    /**
     * Use `.toThrowWithMessage` when checking if a callback function throws an error of a given type with a given error message.
     *
     * @param {Function} type
     * @param {String | RegExp} message
     */
    toThrowWithMessage(type: Function, message: string | RegExp): R;

    /**
     * Use `.toBeEmptyObject` when checking if a value is an empty `Object`.
     */
    toBeEmptyObject(): R;

    /**
     * Use `.toBeSymbol` when checking if a value is a `Symbol`.
     */
    toBeSymbol(): R;

    /**
     * Use `.toBeBetween` when checking if a date occurs between `startDate` and `endDate`.
     * @param {Date} startDate
     * @param {Date} endDate
     */
    toBeBetween(startDate: Date, endDate: Date): R;

    /**
     * Use `.toBeBeforeOrEqualTo` when checking if a date equals to or occurs before `date`.
     * @param {Date} date
     */
    toBeBeforeOrEqualTo(date: Date): R;

    /**
     * Use `.toBeAfterOrEqualTo` when checking if a date equals to or occurs after `date`.
     * @param {Date} date
     */
    toBeAfterOrEqualTo(date: Date): R;

    /**
     * Use `.toEqualIgnoringWhitespace` when checking if a `String` is equal (===) to given `String` ignoring white-space.
     *
     * @param {String} string
     */
    toEqualIgnoringWhitespace(string: string): R;
  }

  // noinspection JSUnusedGlobalSymbols
  interface Expect {
    /**
     * Note: Currently unimplemented
     * Passing assertion
     *
     * @param {String} message
     */
    pass(message: string): any;

    /**
     * Note: Currently unimplemented
     * Failing assertion
     *
     * @param {String} message
     */
    fail(message: string): any;

    /**
     * Use .toBeEmpty when checking if a String '', Array [] or Object {} is empty.
     */
    toBeEmpty(): any;

    /**
     * Use .toBeOneOf when checking if a value is a member of a given Array.
     * @param {Array.<*>} members
     */
    toBeOneOf<E = any>(members: E[]): any;

    /**
     * Use `.toBeNil` when checking a value is `null` or `undefined`.
     */
    toBeNil(): any;

    /**
     * Use `.toSatisfy` when you want to use a custom matcher by supplying a predicate function that returns a `Boolean`.
     * @param {Function} predicate
     */
    toSatisfy<E = any>(predicate: (x: E) => boolean): any;

    /**
     * Use `.toBeArray` when checking if a value is an `Array`.
     */
    toBeArray(): any;

    /**
     * Use `.toBeArrayOfSize` when checking if a value is an `Array` of size x.
     * @param {Number} x
     */
    toBeArrayOfSize(x: number): any;

    /**
     * Use `.toBeAfter` when checking if a date occurs after `date`.
     * @param {Date} date
     */
    toBeAfter(date: Date): any;

    /**
     * Use `.toBeBefore` when checking if a date occurs before `date`.
     * @param {Date} date
     */
    toBeBefore(date: Date): any;

    /**
     * Use `.toIncludeAllMembers` when checking if an `Array` contains all of the same members of a given set.
     * @param {Array.<*>} members
     */
    toIncludeAllMembers<E = any>(members: E[]): any;

    /**
     * Use `.toIncludeAnyMembers` when checking if an `Array` contains any of the members of a given set.
     * @param {Array.<*>} members
     */
    toIncludeAnyMembers<E = any>(members: E[]): any;

    /**
     * Use `.toIncludeSameMembers` when checking if two arrays contain equal values, in any order.
     * @param {Array.<*>} members
     */
    toIncludeSameMembers<E = any>(members: E[]): any;

    /**
     * Use `.toPartiallyContain` when checking if any array value matches the partial member.
     * @param {*} member
     */
    toPartiallyContain<E = any>(member: E): any;

    /**
     * Use `.toSatisfyAll` when you want to use a custom matcher by supplying a predicate function that returns a `Boolean` for all values in an array.
     * @param {Function} predicate
     */
    toSatisfyAll<E = any>(predicate: (x: E) => boolean): any;

    /**
     * Use `.toSatisfyAny` when you want to use a custom matcher by supplying a predicate function that returns `true` for any matching value in an array.
     * @param {Function} predicate
     */
    toSatisfyAny(predicate: (x: any) => boolean): any;

    /**
     * Use `.toBeBoolean` when checking if a value is a `Boolean`.
     */
    toBeBoolean(): any;

    /**
     * Use `.toBeTrue` when checking a value is equal (===) to `true`.
     */
    toBeTrue(): any;

    /**
     * Use `.toBeFalse` when checking a value is equal (===) to `false`.
     */
    toBeFalse(): any;

    /**
     * Use `.toBeDate` when checking if a value is a `Date`.
     */
    toBeDate(): any;

    /**
     * Use `.toBeValidDate` when checking if a value is a `valid Date`.
     */
    toBeValidDate(): any;

    /**
     * Use `.toBeFunction` when checking if a value is a `Function`.
     */
    toBeFunction(): any;

    /**
     * Use `.toBeDateString` when checking if a value is a valid date string.
     */
    toBeDateString(): any;

    /**
     * Use `.toBeHexadecimal` when checking if a value is a valid HTML hex color.
     */
    toBeHexadecimal(): any;

    /**
     * Use `.toHaveBeenCalledBefore` when checking if a `Mock` was called before another `Mock`.
     *
     * Note: Required Jest version >=23
     *
     * @param {Mock} mock
     */
    toHaveBeenCalledBefore(mock: jest.Mock): any;

    /**
     * Use `.toHaveBeenCalledAfter` when checking if a `Mock` was called after another `Mock`.
     *
     * Note: Required Jest version >=23
     *
     * @param {Mock} mock
     */
    toHaveBeenCalledAfter(mock: jest.Mock): any;

    /**
     * Use `.toHaveBeenCalledOnce` to check if a `Mock` was called exactly one time.
     */
    toHaveBeenCalledOnce(): any;

    /**
     * Use `.toBeNumber` when checking if a value is a `Number`.
     */
    toBeNumber(): any;

    /**
     * Use `.toBeNaN` when checking a value is `NaN`.
     */
    toBeNaN(): any;

    /**
     * Use `.toBeFinite` when checking if a value is a `Number`, not `NaN` or `Infinity`.
     */
    toBeFinite(): any;

    /**
     * Use `.toBePositive` when checking if a value is a positive `Number`.
     */
    toBePositive(): any;

    /**
     * Use `.toBeNegative` when checking if a value is a negative `Number`.
     */
    toBeNegative(): any;

    /**
     * Use `.toBeEven` when checking if a value is an even `Number`.
     */
    toBeEven(): any;

    /**
     * Use `.toBeOdd` when checking if a value is an odd `Number`.
     */
    toBeOdd(): any;

    /**
     * Use `.toBeWithin` when checking if a number is in between the given bounds of: start (inclusive) and end (exclusive).
     *
     * @param {Number} start
     * @param {Number} end
     */
    toBeWithin(start: number, end: number): any;

    /**
     * Use `.toBeObject` when checking if a value is an `Object`.
     */
    toBeObject(): any;

    /**
     * Use `.toContainKey` when checking if an object contains the provided key.
     *
     * @param {String} key
     */
    toContainKey(key: string): any;

    /**
     * Use `.toContainKeys` when checking if an object has all of the provided keys.
     *
     * @param {Array.<String>} keys
     */
    toContainKeys<E = any>(keys: (keyof E | string)[]): any;

    /**
     * Use `.toContainAllKeys` when checking if an object only contains all of the provided keys.
     *
     * @param {Array.<String>} keys
     */
    toContainAllKeys<E = any>(keys: (keyof E | string)[]): any;

    /**
     * Use `.toContainAnyKeys` when checking if an object contains at least one of the provided keys.
     *
     * @param {Array.<String>} keys
     */
    toContainAnyKeys<E = any>(keys: (keyof E | string)[]): any;

    /**
     * Use `.toContainValue` when checking if an object contains the provided value.
     *
     * @param {*} value
     */
    toContainValue<E = any>(value: E): any;

    /**
     * Use `.toContainValues` when checking if an object contains all of the provided values.
     *
     * @param {Array.<*>} values
     */
    toContainValues<E = any>(values: E[]): any;

    /**
     * Use `.toContainAllValues` when checking if an object only contains all of the provided values.
     *
     * @param {Array.<*>} values
     */
    toContainAllValues<E = any>(values: E[]): any;

    /**
     * Use `.toContainAnyValues` when checking if an object contains at least one of the provided values.
     *
     * @param {Array.<*>} values
     */
    toContainAnyValues<E = any>(values: E[]): any;

    /**
     * Use `.toContainEntry` when checking if an object contains the provided entry.
     *
     * @param {Array.<[keyof E, E[keyof E]>} entry
     */
    toContainEntry<E = any>(entry: [keyof E, E[keyof E]]): any;

    /**
     * Use `.toContainEntries` when checking if an object contains all of the provided entries.
     *
     * @param {Array.<Array.<keyof E, E[keyof E]>>} entries
     */
    toContainEntries<E = any>(entries: [keyof E, E[keyof E]][]): any;

    /**
     * Use `.toContainAllEntries` when checking if an object only contains all of the provided entries.
     *
     * @param {Array.<Array.<keyof E, E[keyof E]>>} entries
     */
    toContainAllEntries<E = any>(entries: [keyof E, E[keyof E]][]): any;

    /**
     * Use `.toContainAnyEntries` when checking if an object contains at least one of the provided entries.
     *
     * @param {Array.<Array.<keyof E, E[keyof E]>>} entries
     */
    toContainAnyEntries<E = any>(entries: [keyof E, E[keyof E]][]): any;

    /**
     * Use `.toBeExtensible` when checking if an object is extensible.
     */
    toBeExtensible(): any;

    /**
     * Use `.toBeFrozen` when checking if an object is frozen.
     */
    toBeFrozen(): any;

    /**
     * Use `.toBeSealed` when checking if an object is sealed.
     */
    toBeSealed(): any;

    /**
     * Use `.toResolve` when checking if a promise resolves.
     */
    toResolve(): any;

    /**
     * Use `.toReject` when checking if a promise rejects.
     */
    toReject(): any;

    /**
     * Use `.toBeString` when checking if a value is a `String`.
     */
    toBeString(): any;

    /**
     * Use `.toEqualCaseInsensitive` when checking if a string is equal (===) to another ignoring the casing of both strings.
     *
     * @param {String} string
     */
    toEqualCaseInsensitive(string: string): any;

    /**
     * Use `.toStartWith` when checking if a `String` starts with a given `String` prefix.
     *
     * @param {String} prefix
     */
    toStartWith(prefix: string): any;

    /**
     * Use `.toEndWith` when checking if a `String` ends with a given `String` suffix.
     *
     * @param {String} suffix
     */
    toEndWith(suffix: string): any;

    /**
     * Use `.toInclude` when checking if a `String` includes the given `String` substring.
     *
     * @param {String} substring
     */
    toInclude(substring: string): any;

    /**
     * Use `.toIncludeRepeated` when checking if a `String` includes the given `String` substring the correct number of times.
     *
     * @param {String} substring
     * @param {Number} times
     */
    toIncludeRepeated(substring: string, times: number): any;

    /**
     * Use `.toIncludeMultiple` when checking if a `String` includes all of the given substrings.
     *
     * @param {Array.<String>} substring
     */
    toIncludeMultiple(substring: string[]): any;

    /**
     * Use `.toThrowWithMessage` when checking if a callback function throws an error of a given type with a given error message.
     *
     * @param {Function} type
     * @param {String | RegExp} message
     */
    toThrowWithMessage(type: Function, message: string | RegExp): any;

    /**
     * Use `.toBeEmptyObject` when checking if a value is an empty `Object`.
     */
    toBeEmptyObject(): any;

    /**
     * Use `.toBeSymbol` when checking if a value is a `Symbol`.
     */
    toBeSymbol(): any;

    /**
     * Use `.toBeBetween` when checking if a date occurs between `startDate` and `endDate`.
     * @param {Date} startDate
     * @param {Date} endDate
     */
    toBeBetween(startDate: Date, endDate: Date): any;

    /**
     * Use `.toBeBeforeOrEqualTo` when checking if a date equals to or occurs before `date`.
     * @param {Date} date
     */
    toBeBeforeOrEqualTo(date: Date): any;

    /**
     * Use `.toBeAfterOrEqualTo` when checking if a date equals to or occurs after `date`.
     * @param {Date} date
     */
    toBeAfterOrEqualTo(date: Date): any;

    /**
     * Use `.toEqualIgnoringWhitespace` when checking if a `String` is equal (===) to given `String` ignoring white-space.
     *
     * @param {String} string
     */
    toEqualIgnoringWhitespace(string: string): any;
  }
}
