---
'jest-extended': patch
---

Match literal substrings in `toIncludeRepeated` so regular expression characters are counted correctly and cannot cause syntax errors.

If you previously passed `[.]` to count literal dots, pass `.` instead. The matcher now treats `[.]` as a literal three-character substring.
