---
sidebar_position: 2
---

# Setup

:::caution
`jest-extended` only supports Jest version `27.2.5` and newer. If you're using an older version of Jest, use `1.2.1`.
:::

Create a setup script with the following:

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

`jest-extended` works with `vitest` because their `expect.extend` API is compatible. In your setup script:

```javascript title="testSetup.js"
import { expect } from 'vitest';
import * as matchers from 'jest-extended';
expect.extend(matchers);
```

Add this setup script to your `vitest.config.js`:

```javascript title="vitest.config.js"
export default defineConfig({
  test: {
    setupFiles: ['./testSetup.js'],
  },
});
```

### Vitest TypeScript types setup

To use Vitest with TypeScript, create a file named `jest-extended.d.ts` with the content below in addition to the setup above.

```typescript
/// <reference types="vitest" />

export interface CustomMatchers<R> extends Record<string, any> {
  toHaveBeenCalledAfter(
    mock: jest.MockInstance<any, any[]> | import('vitest').MockInstance<any, any[]>,
    failIfNoFirstInvocation?: boolean,
  ): R;

  toHaveBeenCalledBefore(
    mock: jest.MockInstance<any, any[]> | import('vitest').MockInstance<any, any[]>,
    failIfNoSecondInvocation?: boolean,
  ): R;

  toHaveBeenCalledExactlyOnceWith(...args: unknown[]): R;
}
```

For Vitest >= 0.31.0, append the content below to the new file.

```typescript
declare module 'vitest' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface Assertion<T = any> extends CustomMatchers<T> {}
}
```

For Vitest < 0.31.0, append the content below to the new file.

```typescript
declare namespace Vi {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface AsymmetricMatchersContaining extends CustomMatchers<any> {}
}
```
