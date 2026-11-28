// Vitest's ESM declarations must be augmented in an ESM declaration file.
import './vitest.mjs';

declare const matchers: typeof import('./dist/vitest');
export = matchers;
