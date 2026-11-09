---
'jest-extended': major
---

Stop coercing inputs in `toBeInteger` and `toBeNaN`.

`toBeInteger` now accepts only integer Number primitives and BigInt primitives.
Numeric strings, boxed numbers, arrays, and other objects no longer pass.
`toBeNaN` now accepts only the actual `NaN` value, rather than values that become
`NaN` after conversion. BigInts and Symbols produce normal assertion failures
instead of coercion errors. Negated assertions follow the same strict semantics.

If conversion is intended, make it explicit with `Number(value)` before asserting,
for example `expect(Number('42')).toBeInteger()` or
`expect(Number('not a number')).toBeNaN()`.
