---
'jest-extended': patch
---

Fix `toBeNegative` to reject `-Infinity`, matching its documented behavior and `toBePositive`'s handling of `Infinity`.
