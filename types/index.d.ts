/// <reference types="jest" />

declare namespace jest {
  // noinspection JSUnusedGlobalSymbols
  interface Matchers<R, T> {
    /**
     * Note: Currently unimplemented
     * Passing assertion
     */
    pass(message: string): R;

    /**
     * Note: Currently unimplemented
     * Failing assertion
     */
    fail(message: string): never;

    /**
     * Use .toBeEmpty when checking if a String '', Array [], Object {} or Iterable (i.e. Map, Set) is empty.
     */
    toBeEmpty(): R;

    /**
     * Use .toBeOneOf when checking if a value is a member of a given Array.
     */
    toBeOneOf(members: T[]): R;

    /**
     * Use `.toBeNil` when checking a value is `null` or `undefined`.
     */
    toBeNil(): R;

    /**
     * Use `.toSatisfy` when you want to use a custom matcher by supplying a predicate function that returns a `Boolean`.
     */
    toSatisfy(predicate: (x: T) => boolean): R;

    /**
     * Use `.toBeArray` when checking if a value is an `Array`.
     */
    toBeArray(): R;

    /**
     * Use `.toBeArrayOfSize` when checking if a value is an `Array` of size x.
     */
    toBeArrayOfSize(x: number): R;

    /**
     * Use `.toBeAfter` when checking if a date occurs after `date`.
     */
    toBeAfter(date: Date): R;

    /**
     * Use `.toBeBefore` when checking if a date occurs before `date`.
     */
    toBeBefore(date: Date): R;

    /**
     * Use `.toIncludeAllMembers` when checking if an `Array` contains all of the same members of a given set.
     */
    toIncludeAllMembers(members: T): R;

    /**
     * Use `.toIncludeAllPartialMembers` when checking if an `Array` contains all of the same partial members of a given set.
     */
    toIncludeAllPartialMembers(members: T): R;

    /**
     * Use `.toIncludeAnyMembers` when checking if an `Array` contains any of the members of a given set.
     */
    toIncludeAnyMembers(members: T): R;

    /**
     * Use `.toIncludeSameMembers` when checking if two arrays contain equal values, in any order.
     */
    toIncludeSameMembers(members: T): R;

    /**
     * Use `.toPartiallyContain` when checking if any array value matches the partial member.
     */
    toPartiallyContain(member: Partial<T extends Array<infer U> ? U : T>): R;

    /**
     * Use `.toSatisfyAll` when you want to use a custom matcher by supplying a predicate function that returns a `Boolean` for all values in an array.
     */
    toSatisfyAll(predicate: (x: T extends Array<infer U> ? U : T) => boolean): R;

    /**
     * Use `.toSatisfyAny` when you want to use a custom matcher by supplying a predicate function that returns `true` for any matching value in an array.
     */
    toSatisfyAny(predicate: (x: T extends Array<infer U> ? U : T) => boolean): R;

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
     */
    toHaveBeenCalledBefore(mock: Mock): R;

    /**
     * Use `.toHaveBeenCalledAfter` when checking if a `Mock` was called after another `Mock`.
     *
     * Note: Required Jest version >=23
     */
    toHaveBeenCalledAfter(mock: Mock): R;

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
     */
    toContainKey(key: keyof T): R;

    /**
     * Use `.toContainKeys` when checking if an object has all of the provided keys.
     */
    toContainKeys(keys: Array<keyof T>): R;

    /**
     * Use `.toContainAllKeys` when checking if an object only contains all of the provided keys.
     */
    toContainAllKeys(keys: Array<keyof T>): R;

    /**
     * Use `.toContainAnyKeys` when checking if an object contains at least one of the provided keys.
     */
    toContainAnyKeys(keys: Array<keyof T>): R;

    /**
     * Use `.toContainValue` when checking if an object contains the provided value.
     */
    toContainValue(value: T[keyof T]): R;

    /**
     * Use `.toContainValues` when checking if an object contains all of the provided values.
     */
    toContainValues(values: Array<T[keyof T]>): R;

    /**
     * Use `.toContainAllValues` when checking if an object only contains all of the provided values.
     */
    toContainAllValues(values: Array<T[keyof T]>): R;

    /**
     * Use `.toContainAnyValues` when checking if an object contains at least one of the provided values.
     */
    toContainAnyValues(values: Array<T[keyof T]>): R;

    /**
     * Use `.toContainEntry` when checking if an object contains the provided entry.
     */
    toContainEntry(entry: [keyof T, T[keyof T]]): R;

    /**
     * Use `.toContainEntries` when checking if an object contains all of the provided entries.
     */
    toContainEntries(entries: Array<[keyof T, T[keyof T]]>): R;

    /**
     * Use `.toContainAllEntries` when checking if an object only contains all of the provided entries.
     */
    toContainAllEntries(entries: Array<[keyof T, T[keyof T]]>): R;

    /**
     * Use `.toContainAnyEntries` when checking if an object contains at least one of the provided entries.
     */
    toContainAnyEntries(entries: Array<[keyof T, T[keyof T]]>): R;

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
     */
    toEqualCaseInsensitive(string: string): R;

    /**
     * Use `.toStartWith` when checking if a `String` starts with a given `String` prefix.
     */
    toStartWith(prefix: string): R;

    /**
     * Use `.toEndWith` when checking if a `String` ends with a given `String` suffix.
     */
    toEndWith(suffix: string): R;

    /**
     * Use `.toInclude` when checking if a `String` includes the given `String` substring.
     */
    toInclude(substring: string): R;

    /**
     * Use `.toIncludeRepeated` when checking if a `String` includes the given `String` substring the correct number of times.
     */
    toIncludeRepeated(substring: string, times: number): R;

    /**
     * Use `.toIncludeMultiple` when checking if a `String` includes all of the given substrings.
     */
    toIncludeMultiple(substring: string[]): R;

    /**
     * Use `.toThrowWithMessage` when checking if a callback function throws an error of a given type with a given error message.
     */
    toThrowWithMessage(type: () => void, message: string | RegExp): R;

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
     */
    toBeBetween(startDate: Date, endDate: Date): R;

    /**
     * Use `.toBeBeforeOrEqualTo` when checking if a date equals to or occurs before `date`.
     */
    toBeBeforeOrEqualTo(date: Date): R;

    /**
     * Use `.toBeAfterOrEqualTo` when checking if a date equals to or occurs after `date`.
     */
    toBeAfterOrEqualTo(date: Date): R;

    /**
     * Use `.toEqualIgnoringWhitespace` when checking if a `String` is equal (===) to given `String` ignoring white-space.
     */
    toEqualIgnoringWhitespace(string: string): R;
  }

  // noinspection JSUnusedGlobalSymbols
  interface Expect {
    /**
     * Note: Currently unimplemented
     * Passing assertion
     */
    pass(message: string): any;

    /**
     * Note: Currently unimplemented
     * Failing assertion
     */
    fail(message: string): any;

    /**
     * Use .toBeEmpty when checking if a String '', Array [] or Object {} is empty.
     */
    toBeEmpty(): any;

    /**
     * Use .toBeOneOf when checking if a value is a member of a given Array.
     */
    // tslint:disable-next-line: no-unnecessary-generics
    toBeOneOf<E = any[]>(members: E[]): any;

    /**
     * Use `.toBeNil` when checking a value is `null` or `undefined`.
     */
    toBeNil(): any;

    /**
     * Use `.toSatisfy` when you want to use a custom matcher by supplying a predicate function that returns a `Boolean`.
     */
    // tslint:disable-next-line: no-unnecessary-generics
    toSatisfy<E = any>(predicate: (x: E) => boolean): any;

    /**
     * Use `.toBeArray` when checking if a value is an `Array`.
     */
    toBeArray(): any;

    /**
     * Use `.toBeArrayOfSize` when checking if a value is an `Array` of size x.
     */
    toBeArrayOfSize(x: number): any;

    /**
     * Use `.toBeAfter` when checking if a date occurs after `date`.
     */
    toBeAfter(date: Date): any;

    /**
     * Use `.toBeBefore` when checking if a date occurs before `date`.
     */
    toBeBefore(date: Date): any;

    /**
     * Use `.toIncludeAllMembers` when checking if an `Array` contains all of the same members of a given set.
     */
    // tslint:disable-next-line: no-unnecessary-generics
    toIncludeAllMembers<E = any>(members: E[]): any;

    /**
     * Use `.toIncludeAnyMembers` when checking if an `Array` contains any of the members of a given set.
     */
    // tslint:disable-next-line: no-unnecessary-generics
    toIncludeAnyMembers<E = any>(members: E[]): any;

    /**
     * Use `.toIncludeSameMembers` when checking if two arrays contain equal values, in any order.
     */
    // tslint:disable-next-line: no-unnecessary-generics
    toIncludeSameMembers<E = any>(members: E[]): any;

    /**
     * Use `.toPartiallyContain` when checking if any array value matches the partial member.
     */
    // tslint:disable-next-line: no-unnecessary-generics
    toPartiallyContain<E = any>(member: E): any;

    /**
     * Use `.toSatisfyAll` when you want to use a custom matcher by supplying a predicate function that returns a `Boolean` for all values in an array.
     */
    // tslint:disable-next-line: no-unnecessary-generics
    toSatisfyAll<E = any>(predicate: (x: E) => boolean): any;

    /**
     * Use `.toSatisfyAny` when you want to use a custom matcher by supplying a predicate function that returns `true` for any matching value in an array.
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
     */
    toHaveBeenCalledBefore(mock: Mock): any;

    /**
     * Use `.toHaveBeenCalledAfter` when checking if a `Mock` was called after another `Mock`.
     *
     * Note: Required Jest version >=23
     */
    toHaveBeenCalledAfter(mock: Mock): any;

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
     */
    toBeWithin(start: number, end: number): any;

    /**
     * Use `.toBeObject` when checking if a value is an `Object`.
     */
    toBeObject(): any;

    /**
     * Use `.toContainKey` when checking if an object contains the provided key.
     */
    toContainKey(key: string): any;

    /**
     * Use `.toContainKeys` when checking if an object has all of the provided keys.
     */
    // tslint:disable-next-line: no-unnecessary-generics
    toContainKeys<E = any>(keys: Array<keyof E>): any;

    /**
     * Use `.toContainAllKeys` when checking if an object only contains all of the provided keys.
     */
    // tslint:disable-next-line: no-unnecessary-generics
    toContainAllKeys<E = any>(keys: Array<keyof E>): any;

    /**
     * Use `.toContainAnyKeys` when checking if an object contains at least one of the provided keys.
     */
    // tslint:disable-next-line: no-unnecessary-generics
    toContainAnyKeys<E = any>(keys: Array<keyof E>): any;

    /**
     * Use `.toContainValue` when checking if an object contains the provided value.
     */
    // tslint:disable-next-line: no-unnecessary-generics
    toContainValue<E = any>(value: E): any;

    /**
     * Use `.toContainValues` when checking if an object contains all of the provided values.
     */
    // tslint:disable-next-line: no-unnecessary-generics
    toContainValues<E = any>(values: E[]): any;

    /**
     * Use `.toContainAllValues` when checking if an object only contains all of the provided values.
     */
    // tslint:disable-next-line: no-unnecessary-generics
    toContainAllValues<E = any>(values: E[]): any;

    /**
     * Use `.toContainAnyValues` when checking if an object contains at least one of the provided values.
     */
    // tslint:disable-next-line: no-unnecessary-generics
    toContainAnyValues<E = any>(values: E[]): any;

    /**
     * Use `.toContainEntry` when checking if an object contains the provided entry.
     */
    // tslint:disable-next-line: no-unnecessary-generics
    toContainEntry<E = any>(entry: [keyof E, E[keyof E]]): any;

    /**
     * Use `.toContainEntries` when checking if an object contains all of the provided entries.
     */
    // tslint:disable-next-line: no-unnecessary-generics
    toContainEntries<E = any>(entries: Array<[keyof E, E[keyof E]]>): any;

    /**
     * Use `.toContainAllEntries` when checking if an object only contains all of the provided entries.
     */
    // tslint:disable-next-line: no-unnecessary-generics
    toContainAllEntries<E = any>(entries: Array<[keyof E, E[keyof E]]>): any;

    /**
     * Use `.toContainAnyEntries` when checking if an object contains at least one of the provided entries.
     */
    // tslint:disable-next-line: no-unnecessary-generics
    toContainAnyEntries<E = any>(entries: Array<[keyof E, E[keyof E]]>): any;

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
     */
    toEqualCaseInsensitive(string: string): any;

    /**
     * Use `.toStartWith` when checking if a `String` starts with a given `String` prefix.
     */
    toStartWith(prefix: string): any;

    /**
     * Use `.toEndWith` when checking if a `String` ends with a given `String` suffix.
     */
    toEndWith(suffix: string): any;

    /**
     * Use `.toInclude` when checking if a `String` includes the given `String` substring.
     */
    toInclude(substring: string): any;

    /**
     * Use `.toIncludeRepeated` when checking if a `String` includes the given `String` substring the correct number of times.
     */
    toIncludeRepeated(substring: string, times: number): any;

    /**
     * Use `.toIncludeMultiple` when checking if a `String` includes all of the given substrings.
     */
    toIncludeMultiple(substring: string[]): any;

    /**
     * Use `.toThrowWithMessage` when checking if a callback function throws an error of a given type with a given error message.
     */
    toThrowWithMessage(type: () => void, message: string | RegExp): any;

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
     */
    toBeBetween(startDate: Date, endDate: Date): any;

    /**
     * Use `.toBeBeforeOrEqualTo` when checking if a date equals to or occurs before `date`.
     */
    toBeBeforeOrEqualTo(date: Date): any;

    /**
     * Use `.toBeAfterOrEqualTo` when checking if a date equals to or occurs after `date`.
     */
    toBeAfterOrEqualTo(date: Date): any;

    /**
     * Use `.toEqualIgnoringWhitespace` when checking if a `String` is equal (===) to given `String` ignoring white-space.
     */
    toEqualIgnoringWhitespace(string: string): any;
  }
}
