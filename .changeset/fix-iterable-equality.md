---
'jest-extended': patch
---

Fix Map, Set and other iterable comparisons in equals-based matchers so they compare values by their entries instead of falling back to reference equality
