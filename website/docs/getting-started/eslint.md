---
sidebar_position: 4
---

# ESLint

## Installation

npm:

```
npm install --save-dev eslint eslint-plugin-jest-extended
```

Yarn:

```
yarn add --dev eslint eslint-plugin-jest-extended
```

**Note:** If you installed ESLint globally then you must also install `eslint-plugin-jest-extended` globally.

## Usage

Add `jest-extended` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
  "plugins": ["jest-extended"]
}
```

Then configure the rules you want to use under the rules section.

```json
{
  "rules": {
    "jest-extended/prefer-to-be-true": "warn",
    "jest-extended/prefer-to-be-false": "error"
  }
}
```

:::info
Full docs can be found: [`eslint-plugin-jest-extended`](https://github.com/jest-community/eslint-plugin-jest-extended).
:::
