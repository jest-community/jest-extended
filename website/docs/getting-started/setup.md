---
sidebar_position: 2
---

# Setup

:::caution
`jest-extended` only supports Jest version `27.2.5` and newer. If you're using an older version of Jest, use `1.2.1`.
:::

Add this line to `jest.config.mjs`

```javascript title="jest.config.mjs"
/** @type {import('jest').Config} */
const config = {
  ///...
  setupFilesAfterEnv: ['jest-extended/all'],
  ///...
};
```

Or create a setup script with the following:

```javascript title="testSetup.js"
// add all jest-extended matchers
import * as matchers from 'jest-extended';
expect.extend(matchers);

// or just add specific matchers
import { toBeArray, toBeSealed } from 'jest-extended';
expect.extend({ toBeArray, toBeSealed });
```

Add your setup script to your Jest `setupFilesAfterEnv` configuration. [See for help](https://jestjs.io/docs/en/configuration.html#setupfilesafterenv-array)

```json title="package.json"
"jest": {
  "setupFilesAfterEnv": ["./testSetup.js"]
}
```

To automatically extend `expect` with all matchers, you can use

```json title="package.json"
"jest": {
  "setupFilesAfterEnv": ["jest-extended/all"]
}
```

## Use with `vitest`

For Vitest 5.0.0 and newer, use the dedicated `jest-extended/vitest.js` entry point in your setup script:

```typescript title="testSetup.ts"
import { expect } from 'vitest';
import matchers from 'jest-extended/vitest.js';

expect.extend(matchers);
```

Add the setup script to your Vitest configuration:

```typescript title="vitest.config.ts"
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    setupFiles: ['./testSetup.ts'],
  },
});
```

Importing this entry point also extends Vitest's matcher types, including `.not`, `.resolves`, `.rejects`, and asymmetric
matchers such as `expect.toStartWith()`. Include your setup script in your TypeScript project. No custom declaration file,
Jest types, registration cast, or `skipLibCheck` setting is required.

This entry point preserves Vitest's native `toBeOneOf`, `toSatisfy`, `toHaveBeenCalledBefore`, and `toHaveBeenCalledAfter`
matchers. It also omits jest-extended's `fail` matcher to preserve Chai's `expect.fail` helper. The existing `jest-extended`
entry point continues to export all matchers for Jest.
