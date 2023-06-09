---
sidebar_position: 3
---

# Typescript

If your editor does not recognise the custom `jest-extended` matchers, add a `global.d.ts` file to your project with:

```ts
import 'jest-extended';
```

:::caution
When using `ts-jest >= 25.5.0`
:::

Since the breaking changes in `25.5.0` you may also need to update your `tsconfig.json` to include the new `global.d.ts` file in the `files` property like so:

```json
{
  "compilerOptions": {
    ...
  },
  ...
  "files": ["global.d.ts"]
}
```

Also note that when adding this for the first time this affects which files are compiled by the TypeScript compiler and you might need to add the `include` property as well. See the [TypeScript docs](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html) for more details.

If the above import syntax does not work, replace it with the following:

```ts
/// <reference types="jest-extended" />
```

:::info
An example of project with Typescript globally setup can be found [here](https://github.com/jest-community/jest-extended/tree/main/examples/typescript/all).
:::

## Use with `vitest`

If your editor does not recognise the custom `jest-extended` matchers, add a `global.d.ts` file to your project with:

```ts
import type { CustomMatchers } from 'jest-extended';

declare module 'vitest' {
  interface Assertion<T = unknown> extends CustomMatchers<T> {}
  interface AsymmetricMatchersContaining extends CustomMatchers<unknown> {}
}
```
