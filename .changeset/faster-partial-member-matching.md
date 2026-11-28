---
'jest-extended': patch
---

<!-- original-commit: 0bdff1867b9fdcd747bb006c67f43d5babb1b7b3 -->

Speed up `toIncludeAllPartialMembers` by reading each expected object's entries once per assertion instead of once per candidate. ([#881](https://github.com/jest-community/jest-extended/pull/881))
