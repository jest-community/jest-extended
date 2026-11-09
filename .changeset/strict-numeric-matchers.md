---
'jest-extended': major
---

Stop coercing inputs in `toBeInteger`, `toBeNaN`, and `toBeInRange`.

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
