---
'jest-extended': patch
---

Fix `toBeEmpty` throwing a TypeError for `null` and `undefined`. These values now produce a normal assertion failure, and `.not.toBeEmpty()` passes.
