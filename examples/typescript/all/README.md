# Global Typescript setup of `jest-extended`

This example demonstrates how to setup `jest-extended` globally with Typescript.

You will need to register `jest-extended/all` with Jest using the `setupFilesAfterEnv` field in your Jest config, see here: [jest.config.js](/jest.config.js)

```sh
module.exports = {
  setupFilesAfterEnv: ['jest-extended/all'],
};
```

To enable `jest-extended` globally in your Typescript project you will need to tell Typescript where to find the `jest-extended` type declarations.

To do this add a `files` property to your tsconfig.json with an entry of `node_modules/jest-extended/types/index.d.ts`, see here [tsconfig.json](/tsconfig.json)
