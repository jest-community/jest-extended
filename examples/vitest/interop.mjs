import assert from 'node:assert/strict';
import { createRequire } from 'node:module';
import matchers, { toStartWith } from 'jest-extended/vitest.js';

const require = createRequire(import.meta.url);
assert.equal(require('jest-extended/vitest'), matchers);
assert.equal(toStartWith, matchers.toStartWith);
console.log('The packed entry point loads through native ESM and CommonJS.');
