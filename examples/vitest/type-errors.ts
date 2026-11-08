import { expect } from 'vitest';
import matchers from 'jest-extended/vitest.js';

expect('hello').toStartWith(123);
expect([1]).toBeArrayOfSize('one');
expect('hello').nonexistentMatcher();
const wrong: number = expect(Promise.resolve('hello')).resolves.toStartWith('hello');
matchers.toStartWith('hello', 123);
