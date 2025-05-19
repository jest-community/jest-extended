# jest-extended

## 5.0.1

### Patch Changes

- 0886e55: Fix import paths

## 5.0.0

### Major Changes

- b86423c: Drop support for Node 16 and 18

### Minor Changes

- b86423c: Replace jest-get-type with native type checking
- b86423c: Add Minor: Add toIncludeSamePartialMembers
- b86423c: Add toChange, toChangeBy, and toChangeTo matchers
- b86423c: Switch to TypeScript
- b86423c: Support custom equality testers

### Patch Changes

- b86423c: Fix toBeInRange wording
- b86423c: Dependency Updates

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
