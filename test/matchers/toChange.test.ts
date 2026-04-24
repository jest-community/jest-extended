import * as matcher from 'src/matchers/toChange';
import { Counter } from '../fixtures/counter';

expect.extend(matcher);

describe('.toChange', () => {
  test('passes when given a value that the mutator increments', () => {
    let value = 0;
    expect(() => value++).toChange(() => value);
  });

  test('passes when mutating a counter', () => {
    const counter = new Counter();
    expect(counter.increment).toChange(counter.count);
  });

  test('fails when a given value does not increment', () => {
    const value = 0;
    expect(() => expect(() => value).toChange(() => value)).toThrowErrorMatchingSnapshot();
  });

  test('fails when not mutating a counter', () => {
    const counter = new Counter();
    expect(() => expect(counter.count).toChange(counter.count)).toThrowErrorMatchingSnapshot();
  });
});

describe('.not.toChange', () => {
  test('passes when given a mutator that does not increment the value', () => {
    const value = 0;
    expect(() => value).not.toChange(() => value);
  });

  test('passes when not mutating a counter', () => {
    const counter = new Counter();
    expect(counter.count).not.toChange(counter.count);
  });

  test('fails when mutating a counter', () => {
    const counter = new Counter();
    expect(() => expect(counter.increment).not.toChange(counter.count)).toThrowErrorMatchingSnapshot();
  });

  test('fails when a value expected not to change defies all expectations and changes', () => {
    let value = 0;
    expect(() => expect(() => value++).not.toChange(() => value)).toThrowErrorMatchingSnapshot();
  });
});
