---
'jest-extended': patch
---

Fix `toContainAllKeys` throwing a `TypeError` instead of producing an assertion failure message when the received value is `null` or `undefined`
