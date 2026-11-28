# jest-extended

## 8.0.0

### Major Changes

- c137116: Stop coercing inputs in `toBeInteger`, `toBeNaN`, and `toBeInRange`.

  `toBeInteger` now accepts only integer Number primitives and BigInt primitives.
  Numeric strings, boxed numbers, arrays, and other objects no longer pass.
  `toBeNaN` now accepts only the actual `NaN` value, rather than values that become
  `NaN` after conversion. BigInts and Symbols produce normal assertion failures
  instead of coercion errors. Negated assertions follow the same strict semantics.

  `toBeInRange` now requires each array element to be a Number or BigInt primitive
  that satisfies the inclusive lower and exclusive upper bounds. It rejects numeric
  strings, objects, `null`, `undefined`, `NaN`, and sparse array holes instead of
  coercing or silently accepting them. Mixed Number and BigInt values remain
  supported without conversion to Number. Empty arrays still pass.

  If conversion is intended, make it explicit with `Number(value)` before asserting,
  for example `expect(Number('42')).toBeInteger()` or
  `expect(Number('not a number')).toBeNaN()`. For arrays, convert elements explicitly,
  for example `expect(values.map(Number)).toBeInRange(0, 10)`.

### Minor Changes

- 128f4a9: Add a dedicated `jest-extended/vitest.js` entry point for Vitest 5 with compatible matcher declarations and registration types. It preserves Vitest's overlapping matchers and does not require Jest ambient types, a registration cast, or `skipLibCheck`.

### Patch Changes

- ab7dac4: Fix `toBeHexadecimal` so repeated assertions on valid three- and six-digit hex colors produce consistent results. ([#883](https://github.com/jest-community/jest-extended/pull/883))
- 6b132ad: Add regression coverage for `null` and `undefined` inputs in `toContainAnyKeys`, `toContainKey`, and `toContainKeys`. ([#885](https://github.com/jest-community/jest-extended/pull/885))
- 5414886: Use explicit types in the internal helpers for `toHaveBeenCalledBefore` and `toHaveBeenCalledAfter`. ([#876](https://github.com/jest-community/jest-extended/pull/876))
- 188bf2b: Reduce work when extracting object entries and values in `toContainAnyEntries`, `toContainAnyValues`, `toContainValue`, `toContainAllValues`, and `toContainValues`. ([#879](https://github.com/jest-community/jest-extended/pull/879))
- 0bdff18: Speed up `toIncludeAllPartialMembers` by reading each expected object's entries once per assertion instead of once per candidate. ([#881](https://github.com/jest-community/jest-extended/pull/881))
- e309bde: Fix the Changesets workflow input so the release job can run the npm publish command. ([#980](https://github.com/jest-community/jest-extended/pull/980))
- 48f5ba0: Handle empty strings safely when formatting colored matcher diffs. ([#882](https://github.com/jest-community/jest-extended/pull/882))
- 7d41bd3: Match literal substrings in `toIncludeRepeated` so regular expression characters are counted correctly and cannot cause syntax errors.

  If you previously passed `[.]` to count literal dots, pass `.` instead. The matcher now treats `[.]` as a literal three-character substring.

- 5b1b760: Add the project homepage and issue tracker to the published npm package metadata. ([#928](https://github.com/jest-community/jest-extended/pull/928))
- 7f50f06: Fix own-property checks in key and entry matchers so they handle `null`, `undefined`, and objects with a missing or shadowed `hasOwnProperty`. ([#878](https://github.com/jest-community/jest-extended/pull/878))
- ef9d2c2: Fix `toBeInteger` throwing a TypeError for BigInt values.
- ecb7c55: Fix `toBeEmpty` throwing a TypeError for `null` and `undefined`. These values now produce a normal assertion failure, and `.not.toBeEmpty()` passes.
- f6bfebf: Fix `toBeNegative` to reject `-Infinity`, matching its documented behavior and `toBePositive`'s handling of `Infinity`.
- 273b7c1: Improve toHaveBeenCalledExactlyOnceWith messages
- b36780b: Check that the predicate is a function before calling it in `toSatisfy`, `toSatisfyAll`, and `toSatisfyAny`. ([#877](https://github.com/jest-community/jest-extended/pull/877))

## 7.0.0

### Major Changes

- 50a96f9: Drop support for Node 18 and 23 and add support for Node 24 and 25

## 6.0.0

### Major Changes

- 46ed810: Add BigInt support to number matchers
  and add new toBeBigInt matchers

## 5.0.3

### Patch Changes

- 3a031b6: Fix some types bugs

## 5.0.2

### Patch Changes

- 846fac2: toIncludeSameMembers should fail when passed non-arrays
- 89c99c4: toBeWithin fails with bigints

## 5.0.1

### Patch Changes

- 0886e55: Fix import paths

## 5.0.0

### Major Changes

- b86423c: Drop support for Node 16 and 18

### Minor Changes

- 94935ea: Replace jest-get-type with native type checking
- 2483bcc: Add Minor: Add toIncludeSamePartialMembers
- deb17c6: Add toChange, toChangeBy, and toChangeTo matchers
- b2c1bd4: Switch to TypeScript
- 50e6a8a: Support custom equality testers

### Patch Changes

- 3f47e14: Fix toBeInRange wording
- Dependency Updates

## 4.0.2

### Patch Changes

- 1f88101: Mark 2nd param of toHaveBeenCalledBefore and toHaveBeenCalledAfter optional

## 4.0.1

### Patch Changes

- bad7056: Fix `toHaveBeenCalledExactlyOnceWith` typings
- 1609897: Remove problematic Vitest types

## 4.0.0

### Major Changes

- ab20845: Rename toHaveBeenCalledOnceWith to toHaveBeenCalledExactlyOnceWith

### Minor Changes

- 5b80ca8: support vitest 0.31.0

### Patch Changes

- ab20845: Make CustomMatchers extend Record to fix a TypeScript error
- ab20845: Fix toHaveBeenCalledOnceWith messages
- ab20845: Change unknown to any in toHaveBeenCalledBefore and toHaveBeenCalledAfter

## 3.2.4

### Patch Changes

- 0b07513: Support varargs in toHaveBeenCalledOnceWith (#557)
