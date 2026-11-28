import { expect, expectTypeOf, test, vi, type MatcherState } from 'vitest';
import matchers from 'jest-extended/vitest.js';

declare module 'vitest' {
  interface Matchers<R, T> {
    toHaveMessage(message: string): R;
  }
}

test('plain and negated assertions', () => {
  const result = expect('hello world').toStartWith('hello');
  expectTypeOf(result).toEqualTypeOf<void>();
  expect('hello world').not.toStartWith('goodbye');
});

test('resolved and rejected assertions', async () => {
  const result = expect(Promise.resolve('hello world')).resolves.toStartWith('hello');
  expectTypeOf(result).toEqualTypeOf<Promise<void>>();
  await result;
  await expect(Promise.reject('hello world')).rejects.toStartWith('hello');
  await expect(Promise.resolve('hello world')).resolves.not.toStartWith('goodbye');
  await expect(Promise.reject('hello world')).rejects.not.toStartWith('goodbye');
});

test('async matchers have promise return types', async () => {
  const resolved = expect(Promise.resolve('hello')).toResolve();
  const rejected = expect(Promise.reject('hello')).toReject();
  expectTypeOf(resolved).toEqualTypeOf<Promise<void>>();
  expectTypeOf(rejected).toEqualTypeOf<Promise<void>>();
  await resolved;
  await rejected;
});

test('asymmetric and negated asymmetric assertions', () => {
  expect({ message: 'hello world' }).toEqual({ message: expect.toStartWith('hello') });
  expect({ message: 'hello world' }).toEqual({ message: expect.not.toStartWith('goodbye') });
});

test('array, number, object, and passing assertions', () => {
  expect([1, 2, 3]).toBeArrayOfSize(3);
  expect(4).toBeEven();
  expect(4).toBeInteger();
  expect(Object.seal({})).toBeSealed();
  expect('anything').pass('passes');
});

test('generic assertions preserve their argument types', () => {
  expect({ message: 'hello' }).toContainEntry<{ message: string }>(['message', 'hello']);
  expect([1, 2]).toSatisfyAll<number>(value => value > 0);
  let message = 'before';
  expect(() => {
    message = 'after';
  }).toChange(() => message);
});

test('generic implementation functions retain their type parameters', () => {
  expectTypeOf(matchers.toContainEntry<{ message: string }>)
    .parameter(1)
    .toEqualTypeOf<readonly ['message', string]>();
  expectTypeOf(matchers.toSatisfyAll<number>)
    .parameter(1)
    .toEqualTypeOf<(value: number) => boolean>();
});

test('implementation functions can be reused in custom matchers', () => {
  const toContainEntry = matchers.toContainEntry<{ message: string }>;
  expect.extend({
    toHaveMessage(this: MatcherState, received: unknown, message: string) {
      return toContainEntry.call(this, received, ['message', message]);
    },
  });
  expect({ message: 'hello' }).toHaveMessage('hello');
});

test('incorrect values fail assertions', () => {
  expect(() => expect('goodbye').toStartWith('hello')).toThrow();
  expect(() => expect('hello').not.toStartWith('hello')).toThrow();
  expect(() => expect({ message: 'goodbye' }).toEqual({ message: expect.toStartWith('hello') })).toThrow();
});

test('native membership retains Set support', () => {
  expect('hello').toBeOneOf(new Set(['hello', 'world']));
  expect({ message: 'hello' }).toEqual({ message: expect.toBeOneOf(new Set(['hello', 'world'])) });
});

test('native predicate retains its optional message', () => {
  expect(4).toSatisfy(value => value % 2 === 0, 'expected an even number');
});

test('native call-order matchers accept Vitest mocks', () => {
  const first = vi.fn();
  const second = vi.fn();
  first();
  second();
  expect(first).toHaveBeenCalledBefore(second);
  expect(second).toHaveBeenCalledAfter(first);
});

test('native failure helper is preserved', () => {
  expect(() => expect.fail('native failure')).toThrow('native failure');
});
