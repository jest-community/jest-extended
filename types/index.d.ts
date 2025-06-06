interface CustomMatchers<R> extends Record<string, any> {
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
  fail(message: string): R;

  /**
   * Use .toBeEmpty when checking if a String '', Array [] or Object {} is empty.
   */
  toBeEmpty(): R;

  /**
   * Use .toBeOneOf when checking if a value is a member of a given Array.
   * @param {Array.<*>} members
   */
  toBeOneOf<E = unknown>(members: readonly E[]): R;

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
   * Use `.toBeBigInt` when checking if a value is a `BigInt`.
   */
  toBeBigInt(): R;

  /**
   * Use `.toIncludeAllMembers` when checking if an `Array` contains all of the same members of a given set.
   * @param {Array.<*>} members
   */
  toIncludeAllMembers<E = unknown>(members: readonly E[] | E): R;

  /**
   * Use `.toIncludeAllPartialMembers` when checking if an `Array` contains all the same partial members of a given set.
   * @param {Array.<*>} members
   */
  toIncludeAllPartialMembers<E = unknown>(members: readonly E[] | E): R;

  /**
   * Use `.toIncludeSamePartialMembers` when checking if an `Array` contains exactly the same partial members as a given set, in any order
   * @param {Array.<*>} members
   */
  toIncludeSamePartialMembers<E = unknown>(members: readonly E[]): R;

  /**
   * Use `.toIncludeAnyMembers` when checking if an `Array` contains any of the members of a given set.
   * @param {Array.<*>} members
   */
  toIncludeAnyMembers<E = unknown>(members: readonly E[] | E): R;

  /**
   * Use `.toIncludeSameMembers` when checking if two arrays contain equal values, in any order.
   * @param {Array.<*>} members
   */
  toIncludeSameMembers<E = unknown>(members: readonly E[]): R;

  /**
   * Use `.toPartiallyContain` when checking if any array value matches the partial member.
   * @param {*} member
   */
  toPartiallyContain<E = unknown>(member: E): R;

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
   * @param {boolean} [failIfNoSecondInvocation=true]
   */
  toHaveBeenCalledBefore(mock: jest.MockInstance<any, any[]>, failIfNoSecondInvocation?: boolean): R;

  /**
   * Use `.toHaveBeenCalledAfter` when checking if a `Mock` was called after another `Mock`.
   *
   * Note: Required Jest version >=23
   *
   * @param {Mock} mock
   * @param {boolean} [failIfNoFirstInvocation=true]
   */
  toHaveBeenCalledAfter(mock: jest.MockInstance<any, any[]>, failIfNoFirstInvocation?: boolean): R;

  /**
   * Use `.toHaveBeenCalledOnce` to check if a `Mock` was called exactly one time.
   */
  toHaveBeenCalledOnce(): R;

  /**
   * Use `.toHaveBeenCalledExactlyOnceWith` to check if a `Mock` was called exactly one time with the expected value.
   */
  toHaveBeenCalledExactlyOnceWith(...args: unknown[]): R;

  /**
   * Use `.toBeNumber` when checking if a value is a `Number` or `BigInt`.
   */
  toBeNumber(): R;

  /**
   * Use `.toBeNaN` when checking a value is `NaN`.
   */
  toBeNaN(): R;

  /**
   * Use `.toBeFinite` when checking if a value is a `Number`, not `NaN` or `Infinity`, or a `BigInt`.
   */
  toBeFinite(): R;

  /**
   * Use `.toBePositive` when checking if a value is a positive `Number` or `BigInt`.
   */
  toBePositive(): R;

  /**
   * Use `.toBeNegative` when checking if a value is a negative `Number` or `BigInt`.
   */
  toBeNegative(): R;

  /**
   * Use `.toBeEven` when checking if a value is an even `Number` or `BigInt`.
   */
  toBeEven(): R;

  /**
   * Use `.toBeOdd` when checking if a value is an odd `Number` or `BigInt`.
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
   * Use `.toBeInRange` when checking if an array has elements in range min (inclusive) and max (exclusive).
   * Supports both number and BigInt values.
   *
   * @param min
   * @param max
   */
  toBeInRange(min: number | bigint, max: number | bigint): R;

  /**
   * Use `.toBeObject` when checking if a value is an `Object`.
   */
  toBeObject(): R;

  /**
   * Use `.toChange` when checking if a value has changed.
   * @param {Function} checker
   */
  toChange<E = unknown>(checker: () => E): R;

  /**
   * Use `.toChangeBy` when checking if a value changed by an amount.
   * @param {Function} checker
   * @param {Number|BigInt} by
   */
  toChangeBy(checker: () => number | bigint, by?: number | bigint): R;

  /**
   * Use `.toChangeTo` when checking if a value changed to a specific value.
   * @param {Function} checker
   * @param {*} to
   */
  toChangeTo<E = unknown>(checker: () => E, to: E): R;

  /**
   * Use `.toContainKey` when checking if an object contains the provided key.
   *
   * @param {String} key
   */
  toContainKey(key: string): R;

  /**
   * Use `.toContainKeys` when checking if an object has all of the provided keys.
   *
   * @param {Array.<String>} keys
   */
  toContainKeys<E = unknown>(keys: readonly (keyof E | string)[]): R;

  /**
   * Use `.toContainAllKeys` when checking if an object only contains all of the provided keys.
   *
   * @param {Array.<String>} keys
   */
  toContainAllKeys<E = unknown>(keys: readonly (keyof E | string)[]): R;

  /**
   * Use `.toContainAnyKeys` when checking if an object contains at least one of the provided keys.
   *
   * @param {Array.<String>} keys
   */
  toContainAnyKeys<E = unknown>(keys: readonly (keyof E | string)[]): R;

  /**
   * Use `.toContainValue` when checking if an object contains the provided value.
   *
   * @param {*} value
   */
  toContainValue<E = unknown>(value: E): R;

  /**
   * Use `.toContainValues` when checking if an object contains all of the provided values.
   *
   * @param {Array.<*>} values
   */
  toContainValues<E = unknown>(values: readonly E[]): R;

  /**
   * Use `.toContainAllValues` when checking if an object only contains all of the provided values.
   *
   * @param {Array.<*>} values
   */
  toContainAllValues<E = unknown>(values: readonly E[]): R;

  /**
   * Use `.toContainAnyValues` when checking if an object contains at least one of the provided values.
   *
   * @param {Array.<*>} values
   */
  toContainAnyValues<E = unknown>(values: readonly E[]): R;

  /**
   * Use `.toContainEntry` when checking if an object contains the provided entry.
   *
   * @param {Array.<[keyof E, E[keyof E]>} entry
   */
  toContainEntry<E = unknown>(entry: readonly [keyof E, E[keyof E]]): R;

  /**
   * Use `.toContainEntries` when checking if an object contains all of the provided entries.
   *
   * @param {Array.<Array.<keyof E, E[keyof E]>>} entries
   */
  toContainEntries<E = unknown>(entries: readonly (readonly [keyof E, E[keyof E]])[]): R;

  /**
   * Use `.toContainAllEntries` when checking if an object only contains all of the provided entries.
   *
   * @param {Array.<Array.<keyof E, E[keyof E]>>} entries
   */
  toContainAllEntries<E = unknown>(entries: readonly (readonly [keyof E, E[keyof E]])[]): R;

  /**
   * Use `.toContainAnyEntries` when checking if an object contains at least one of the provided entries.
   *
   * @param {Array.<Array.<keyof E, E[keyof E]>>} entries
   */
  toContainAnyEntries<E = unknown>(entries: readonly (readonly [keyof E, E[keyof E]])[]): R;

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
  toResolve(): R;

  /**
   * Use `.toReject` when checking if a promise rejects.
   */
  toReject(): R;

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
  toIncludeMultiple(substring: readonly string[]): R;

  /**
   * Use `.toThrowWithMessage` when checking if a callback function throws an error of a given type with a given error message.
   *
   * @param {Function} type
   * @param {String | RegExp} message
   */
  toThrowWithMessage(
    type: (new (...args: any[]) => { message: string }) | ((...args: any[]) => { message: string }),
    message: string | RegExp,
  ): R;

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
    toBeOneOf<E = unknown>(members: readonly E[]): R;

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
     * Use `.toBeBigInt` when checking if a value is a `BigInt`.
     */
    toBeBigInt(): R;

    /**
     * Use `.toIncludeAllMembers` when checking if an `Array` contains all the same members of a given set.
     * @param {Array.<*>} members
     */
    toIncludeAllMembers<E = unknown>(members: readonly E[] | E): R;

    /**
     * Use `.toIncludeAllPartialMembers` when checking if an `Array` contains all the same partial members of a given set.
     * @param {Array.<*>} members
     */
    toIncludeAllPartialMembers<E = unknown>(members: readonly E[] | E): R;

    /**
     * Use `.toIncludeSamePartialMembers` when checking if an `Array` contains exactly the same partial members as a given set, in any order
     * @param {Array.<*>} members
     */
    toIncludeSamePartialMembers<E = unknown>(members: readonly E[]): R;

    /**
     * Use `.toIncludeAnyMembers` when checking if an `Array` contains any of the members of a given set.
     * @param {Array.<*>} members
     */
    toIncludeAnyMembers<E = unknown>(members: readonly E[] | E): R;

    /**
     * Use `.toIncludeSameMembers` when checking if two arrays contain equal values, in any order.
     * @param {Array.<*>} members
     */
    toIncludeSameMembers<E = unknown>(members: readonly E[]): R;

    /**
     * Use `.toPartiallyContain` when checking if any array value matches the partial member.
     * @param {*} member
     */
    toPartiallyContain<E = unknown>(member: E): R;

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
     * @param {boolean} [failIfNoSecondInvocation=true]
     */
    toHaveBeenCalledBefore(mock: jest.MockInstance<any, any[]>, failIfNoSecondInvocation?: boolean): R;

    /**
     * Use `.toHaveBeenCalledAfter` when checking if a `Mock` was called after another `Mock`.
     *
     * Note: Required Jest version >=23
     *
     * @param {Mock} mock
     * @param {boolean} [failIfNoFirstInvocation=true]
     */
    toHaveBeenCalledAfter(mock: jest.MockInstance<any, any[]>, failIfNoFirstInvocation?: boolean): R;

    /**
     * Use `.toHaveBeenCalledOnce` to check if a `Mock` was called exactly one time.
     */
    toHaveBeenCalledOnce(): R;

    /**
     * Use `.toHaveBeenCalledExactlyOnceWith` to check if a `Mock` was called exactly one time with the expected value.
     */
    toHaveBeenCalledExactlyOnceWith(...args: unknown[]): R;

    /**
     * Use `.toBeNumber` when checking if a value is a `Number` or `BigInt`.
     */
    toBeNumber(): R;

    /**
     * Use `.toBeNaN` when checking a value is `NaN`.
     */
    toBeNaN(): R;

    /**
     * Use `.toBeFinite` when checking if a value is a `Number`, not `NaN` or `Infinity`, or a `BigInt`.
     */
    toBeFinite(): R;

    /**
     * Use `.toBePositive` when checking if a value is a positive `Number` or `BigInt`.
     */
    toBePositive(): R;

    /**
     * Use `.toBeNegative` when checking if a value is a negative `Number` or `BigInt`.
     */
    toBeNegative(): R;

    /**
     * Use `.toBeEven` when checking if a value is an even `Number` or `BigInt`.
     */
    toBeEven(): R;

    /**
     * Use `.toBeOdd` when checking if a value is an odd `Number` or `BigInt`.
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
     * Use `.toBeInRange` when checking if an array has elements in range min (inclusive) and max (exclusive).
     * Supports both number and BigInt values.
     *
     * @param min
     * @param max
     */
    toBeInRange(min: number | bigint, max: number | bigint): R;

    /**
     * Use `.toBeInteger` when checking if a value is an integer.
     */
    toBeInteger(): R;

    /**
     * Use `.toBeObject` when checking if a value is an `Object`.
     */
    toBeObject(): R;

    /**
     * Use `.toChange` when checking if a value has changed.
     * @param {Function} checker
     */
    toChange<E = unknown>(checker: () => E): R;

    /**
     * Use `.toChangeBy` when checking if a value changed by an amount.
     * @param {Function} checker
     * @param {Number|BigInt} by
     */
    toChangeBy(checker: () => number | bigint, by?: number | bigint): R;

    /**
     * Use `.toChangeTo` when checking if a value changed to a specific value.
     * @param {Function} checker
     * @param {*} to
     */
    toChangeTo<E = unknown>(checker: () => E, to: E): R;

    /**
     * Use `.toContainKey` when checking if an object contains the provided key.
     *
     * @param {String} key
     */
    toContainKey<E = unknown>(key: keyof E | string): R;

    /**
     * Use `.toContainKeys` when checking if an object has all of the provided keys.
     *
     * @param {Array.<String>} keys
     */
    toContainKeys<E = unknown>(keys: readonly (keyof E | string)[]): R;

    /**
     * Use `.toContainAllKeys` when checking if an object only contains all of the provided keys.
     *
     * @param {Array.<String>} keys
     */
    toContainAllKeys<E = unknown>(keys: readonly (keyof E | string)[]): R;

    /**
     * Use `.toContainAnyKeys` when checking if an object contains at least one of the provided keys.
     *
     * @param {Array.<String>} keys
     */
    toContainAnyKeys<E = unknown>(keys: readonly (keyof E | string)[]): R;

    /**
     * Use `.toContainValue` when checking if an object contains the provided value.
     *
     * @param {*} value
     */
    toContainValue<E = unknown>(value: E): R;

    /**
     * Use `.toContainValues` when checking if an object contains all of the provided values.
     *
     * @param {Array.<*>} values
     */
    toContainValues<E = unknown>(values: readonly E[]): R;

    /**
     * Use `.toContainAllValues` when checking if an object only contains all of the provided values.
     *
     * @param {Array.<*>} values
     */
    toContainAllValues<E = unknown>(values: readonly E[]): R;

    /**
     * Use `.toContainAnyValues` when checking if an object contains at least one of the provided values.
     *
     * @param {Array.<*>} values
     */
    toContainAnyValues<E = unknown>(values: readonly E[]): R;

    /**
     * Use `.toContainEntry` when checking if an object contains the provided entry.
     *
     * @param {Array.<String, String>} entry
     */
    toContainEntry<E = unknown>(entry: readonly [keyof E, E[keyof E]]): R;

    /**
     * Use `.toContainEntries` when checking if an object contains all the provided entries.
     *
     * @param {Array.<Array.<keyof E, E[keyof E]>>} entries
     */
    toContainEntries<E = unknown>(entries: readonly (readonly [keyof E, E[keyof E]])[]): R;

    /**
     * Use `.toContainAllEntries` when checking if an object only contains all the provided entries.
     *
     * @param {Array.<Array.<keyof E, E[keyof E]>>} entries
     */
    toContainAllEntries<E = unknown>(entries: readonly (readonly [keyof E, E[keyof E]])[]): R;

    /**
     * Use `.toContainAnyEntries` when checking if an object contains at least one of the provided entries.
     *
     * @param {Array.<Array.<keyof E, E[keyof E]>>} entries
     */
    toContainAnyEntries<E = unknown>(entries: readonly (readonly [keyof E, E[keyof E]])[]): R;

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
    toIncludeMultiple(substring: readonly string[]): R;

    /**
     * Use `.toThrowWithMessage` when checking if a callback function throws an error of a given type with a given error message.
     *
     * @param {Function} type
     * @param {String | RegExp} message
     */
    toThrowWithMessage(
      type: (new (...args: any[]) => { message: string }) | ((...args: any[]) => { message: string }),
      message: string | RegExp,
    ): R;

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
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  interface Expect extends CustomMatchers<any> {}

  // noinspection JSUnusedGlobalSymbols
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  interface InverseAsymmetricMatchers extends Expect {}
}

declare module 'jest-extended' {
  const matchers: CustomMatchers<any>;
  export = matchers;
}
