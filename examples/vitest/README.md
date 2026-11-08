# Vitest 5

This example imports `jest-extended/vitest.js` and registers its matchers without a cast or a custom declaration file. TypeScript checks dependency declarations with `skipLibCheck: false`; no Jest types are installed. The explicit `.js` extension also supports native Node ESM resolution without changing the package's existing exports.

Run from the repository root after installing dependencies:

```text
yarn build
yarn test:vitest
```

The runner packs the library, creates a temporary consumer outside the checkout, installs the example's pinned dependencies, checks its types, runs Vitest, and verifies that invalid matcher usage fails compilation. It leaves the temporary consumer available for inspection and prints its location.

The tests cover synchronous, asynchronous, negated, and asymmetric matchers, plus Vitest's native overlapping matchers. They also check that the consumer does not load Jest ambient declarations.
