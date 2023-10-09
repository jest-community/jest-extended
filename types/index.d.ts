/* eslint-disable @typescript-eslint/no-explicit-any */

export interface CustomMatchers<R> extends Record<string, any> {
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
   * Use `.toIncludeAllMembers` when checking if an `Array` contains all of the same members of a given set.
   * @param {Array.<*>} members
   */
  toIncludeAllMembers<E = unknown>(members: readonly E[]): R;

  /**
   * Use `.toIncludeAnyMembers` when checking if an `Array` contains any of the members of a given set.
   * @param {Array.<*>} members
   */
  toIncludeAnyMembers<E = unknown>(members: readonly E[]): R;

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
  toHaveBeenCalledBefore(mock: jest.MockInstance<any, any[]>, failIfNoSecondInvocation: boolean): R;

  /**
   * Use `.toHaveBeenCalledAfter` when checking if a `Mock` was called after another `Mock`.
   *
   * Note: Required Jest version >=23
   *
   * @param {Mock} mock
   * @param {boolean} [failIfNoFirstInvocation=true]
   */
  toHaveBeenCalledAfter(mock: jest.MockInstance<any, any[]>, failIfNoFirstInvocation: boolean): R;

  /**
   * Use `.toHaveBeenCalledOnce` to check if a `Mock` was called exactly one time.
   */
  toHaveBeenCalledOnce(): R;

  /**
   * Use `.toHaveBeenCalledExactlyOnceWith` to check if a `Mock` was called exactly one time with the expected value.
   */
  toHaveBeenCalledExactlyOnceWith(...args: unknown[]): R;

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
   * Use `.toBeInRange` when checking if an array has elements in range min (inclusive) and max (inclusive).
   *
   * @param min
   * @param max
   */
  toBeInRange(min: number, max: number): R;

  /**
   * Use `.toBeObject` when checking if a value is an `Object`.
   */
  toBeObject(): R;

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
  toThrowWithMessage(type: (...args: any[]) => any, message: string | RegExp): R;

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
     * Use `.toIncludeAllMembers` when checking if an `Array` contains all of the same members of a given set.
     * @param {Array.<*>} members
     */
    toIncludeAllMembers<E = unknown>(members: readonly E[]): R;

    /**
     * Use `.toIncludeAllPartialMembers` when checking if an `Array` contains all of the same partial members of a given set.
     * @param {Array.<*>} members
     */
    toIncludeAllPartialMembers<E = unknown>(members: readonly E[]): R;

    /**
     * Use `.toIncludeAnyMembers` when checking if an `Array` contains any of the members of a given set.
     * @param {Array.<*>} members
     */
    toIncludeAnyMembers<E = unknown>(members: readonly E[]): R;

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
     * Use `.toBeInRange` when checking if an array has elements in range min (inclusive) and max (inclusive).
     *
     * @param min
     * @param max
     */
    toBeInRange(min: number, max: number): R;

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
      type:
        | (new (...args: any[]) => { message: string })
        | (abstract new (...args: any[]) => { message: string })
        | ((...args: any[]) => { message: string }),
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
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface Expect extends CustomMatchers<any> {}

  // noinspection JSUnusedGlobalSymbols
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface InverseAsymmetricMatchers extends Expect {}

  type RejectedValue<T> = T extends PromiseLike<any> ? any : never;

  type ResolvedValue<T> = T extends PromiseLike<infer U> ? U | T : never;

  interface MockInstance<T, Y extends any[]> {
    /** Returns the mock name string set by calling `mockFn.mockName(value)`. */
    getMockName(): string;
    /** Provides access to the mock's metadata */
    mock: MockContext<T, Y>;
    /**
     * Resets all information stored in the mockFn.mock.calls and mockFn.mock.instances arrays.
     *
     * Often this is useful when you want to clean up a mock's usage data between two assertions.
     *
     * Beware that `mockClear` will replace `mockFn.mock`, not just `mockFn.mock.calls` and `mockFn.mock.instances`.
     * You should therefore avoid assigning mockFn.mock to other variables, temporary or not, to make sure you
     * don't access stale data.
     */
    mockClear(): this;
    /**
     * Resets all information stored in the mock, including any initial implementation and mock name given.
     *
     * This is useful when you want to completely restore a mock back to its initial state.
     *
     * Beware that `mockReset` will replace `mockFn.mock`, not just `mockFn.mock.calls` and `mockFn.mock.instances`.
     * You should therefore avoid assigning mockFn.mock to other variables, temporary or not, to make sure you
     * don't access stale data.
     */
    mockReset(): this;
    /**
     * Does everything that `mockFn.mockReset()` does, and also restores the original (non-mocked) implementation.
     *
     * This is useful when you want to mock functions in certain test cases and restore the original implementation in others.
     *
     * Beware that `mockFn.mockRestore` only works when mock was created with `jest.spyOn`. Thus you have to take care of restoration
     * yourself when manually assigning `jest.fn()`.
     *
     * The [`restoreMocks`](https://jestjs.io/docs/en/configuration.html#restoremocks-boolean) configuration option is available
     * to restore mocks automatically between tests.
     */
    mockRestore(): void;
    /**
     * Returns the function that was set as the implementation of the mock (using mockImplementation).
     */
    getMockImplementation(): ((...args: Y) => T) | undefined;
    /**
     * Accepts a function that should be used as the implementation of the mock. The mock itself will still record
     * all calls that go into and instances that come from itself – the only difference is that the implementation
     * will also be executed when the mock is called.
     *
     * Note: `jest.fn(implementation)` is a shorthand for `jest.fn().mockImplementation(implementation)`.
     */
    mockImplementation(fn?: (...args: Y) => T): this;
    /**
     * Accepts a function that will be used as an implementation of the mock for one call to the mocked function.
     * Can be chained so that multiple function calls produce different results.
     *
     * @example
     *
     * const myMockFn = jest
     *   .fn()
     *    .mockImplementationOnce(cb => cb(null, true))
     *    .mockImplementationOnce(cb => cb(null, false));
     *
     * myMockFn((err, val) => console.log(val)); // true
     *
     * myMockFn((err, val) => console.log(val)); // false
     */
    mockImplementationOnce(fn: (...args: Y) => T): this;
    /**
     * Temporarily overrides the default mock implementation within the callback,
     * then restores its previous implementation.
     *
     * @remarks
     * If the callback is async or returns a `thenable`, `withImplementation` will return a promise.
     * Awaiting the promise will await the callback and reset the implementation.
     */
    withImplementation(fn: (...args: Y) => T, callback: () => Promise<unknown>): Promise<void>;
    /**
     * Temporarily overrides the default mock implementation within the callback,
     * then restores its previous implementation.
     */
    withImplementation(fn: (...args: Y) => T, callback: () => void): void;
    /** Sets the name of the mock. */
    mockName(name: string): this;
    /**
     * Just a simple sugar function for:
     *
     * @example
     *
     *   jest.fn(function() {
     *     return this;
     *   });
     */
    mockReturnThis(): this;
    /**
     * Accepts a value that will be returned whenever the mock function is called.
     *
     * @example
     *
     * const mock = jest.fn();
     * mock.mockReturnValue(42);
     * mock(); // 42
     * mock.mockReturnValue(43);
     * mock(); // 43
     */
    mockReturnValue(value: T): this;
    /**
     * Accepts a value that will be returned for one call to the mock function. Can be chained so that
     * successive calls to the mock function return different values. When there are no more
     * `mockReturnValueOnce` values to use, calls will return a value specified by `mockReturnValue`.
     *
     * @example
     *
     * const myMockFn = jest.fn()
     *   .mockReturnValue('default')
     *   .mockReturnValueOnce('first call')
     *   .mockReturnValueOnce('second call');
     *
     * // 'first call', 'second call', 'default', 'default'
     * console.log(myMockFn(), myMockFn(), myMockFn(), myMockFn());
     *
     */
    mockReturnValueOnce(value: T): this;
    /**
     * Simple sugar function for: `jest.fn().mockImplementation(() => Promise.resolve(value));`
     */
    mockResolvedValue(value: ResolvedValue<T>): this;
    /**
     * Simple sugar function for: `jest.fn().mockImplementationOnce(() => Promise.resolve(value));`
     *
     * @example
     *
     * test('async test', async () => {
     *  const asyncMock = jest
     *    .fn()
     *    .mockResolvedValue('default')
     *    .mockResolvedValueOnce('first call')
     *    .mockResolvedValueOnce('second call');
     *
     *  await asyncMock(); // first call
     *  await asyncMock(); // second call
     *  await asyncMock(); // default
     *  await asyncMock(); // default
     * });
     *
     */
    mockResolvedValueOnce(value: ResolvedValue<T>): this;
    /**
     * Simple sugar function for: `jest.fn().mockImplementation(() => Promise.reject(value));`
     *
     * @example
     *
     * test('async test', async () => {
     *   const asyncMock = jest.fn().mockRejectedValue(new Error('Async error'));
     *
     *   await asyncMock(); // throws "Async error"
     * });
     */
    mockRejectedValue(value: RejectedValue<T>): this;

    /**
     * Simple sugar function for: `jest.fn().mockImplementationOnce(() => Promise.reject(value));`
     *
     * @example
     *
     * test('async test', async () => {
     *  const asyncMock = jest
     *    .fn()
     *    .mockResolvedValueOnce('first call')
     *    .mockRejectedValueOnce(new Error('Async error'));
     *
     *  await asyncMock(); // first call
     *  await asyncMock(); // throws "Async error"
     * });
     *
     */
    mockRejectedValueOnce(value: RejectedValue<T>): this;
  }

  /**
   * Represents the result of a single call to a mock function with a return value.
   */
  interface MockResultReturn<T> {
    type: 'return';
    value: T;
  }
  /**
   * Represents the result of a single incomplete call to a mock function.
   */
  interface MockResultIncomplete {
    type: 'incomplete';
    value: undefined;
  }
  /**
   * Represents the result of a single call to a mock function with a thrown error.
   */
  interface MockResultThrow {
    type: 'throw';
    value: any;
  }

  type MockResult<T> = MockResultReturn<T> | MockResultThrow | MockResultIncomplete;

  interface MockContext<T, Y extends any[]> {
    /**
     * List of the call arguments of all calls that have been made to the mock.
     */
    calls: Y[];
    /**
     * List of all the object instances that have been instantiated from the mock.
     */
    instances: T[];
    /**
     * List of the call order indexes of the mock. Jest is indexing the order of
     * invocations of all mocks in a test file. The index is starting with `1`.
     */
    invocationCallOrder: number[];
    /**
     * List of the call arguments of the last call that was made to the mock.
     * If the function was not called, it will return `undefined`.
     */
    lastCall?: Y;
    /**
     * List of the results of all calls that have been made to the mock.
     */
    results: MockResult<T>[];
  }
}

declare module 'jest-extended' {
  const matchers: CustomMatchers<any>;
  export = matchers;
}
