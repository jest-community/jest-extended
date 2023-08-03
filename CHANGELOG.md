# jest-extended

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
