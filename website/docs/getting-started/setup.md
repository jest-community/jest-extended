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

#### Vitest >= 0.31.0

```typescript
import type CustomMatchers from 'jest-extended';
import 'vitest';

declare module 'vitest' {
  interface Assertion<T = any> extends CustomMatchers<T> {}
  interface AsymmetricMatchersContaining<T = any> extends CustomMatchers<T> {}
  interface ExpectStatic<T = any> extends CustomMatchers<T> {}
}
```

This can be combined with matchers from other dependencies or your own custom matchers. Here's an example of a custom matcher.

```typescript
import type CustomMatchers from 'jest-extended';
import 'vitest';

interface MyCustomMatchers {
  toBeFoo(): any;
}

declare module 'vitest' {
  interface Assertion<T = any> extends CustomMatchers<T>, MyCustomMatchers {}
  interface AsymmetricMatchersContaining<T = any> extends CustomMatchers<T>, MyCustomMatchers {}
  interface ExpectStatic extends CustomMatchers, MyCustomMatchers {}
}
```

#### Vitest < 0.31.0

```typescript
import type CustomMatchers from 'jest-extended';
import 'vi';

declare module 'vi' {
  interface Assertion<T = any> extends CustomMatchers<T> {}
  interface AsymmetricMatchersContaining<T = any> extends CustomMatchers<T> {}
  interface ExpectStatic extends CustomMatchers<T> {}
}
```

This can be combined with matchers from other dependencies or your own custom matchers. Here's an example of a custom matcher.

```typescript
import type CustomMatchers from 'jest-extended';
import 'vi';

interface MyCustomMatchers {
  toBeFoo(): any;
}

declare module 'vi' {
  interface Assertion<T = any> extends CustomMatchers<T>, MyCustomMatchers {}
  interface AsymmetricMatchersContaining<T = any> extends CustomMatchers<T>, MyCustomMatchers {}
  interface ExpectStatic extends CustomMatchers, MyCustomMatchers {}
}
```
