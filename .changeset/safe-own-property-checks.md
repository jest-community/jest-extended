---
'jest-extended': patch
---

<!-- original-commit: 7f50f06986c4f1bacae83fd7b83f77afa5ace349 -->

Fix own-property checks in key and entry matchers so they handle `null`, `undefined`, and objects with a missing or shadowed `hasOwnProperty`. ([#878](https://github.com/jest-community/jest-extended/pull/878))
