import * as matcher from 'src/matchers/toChangeBy';
import { Counter } from '../fixtures/counter';

expect.extend(matcher);

describe('.toChangeBy', () => {
  test('passes when given a value that the mutator increments', () => {
    let value = 0;
    expect(() => value--).toChangeBy(() => value, -1);
  });

  test('passes when mutating a counter', () => {
    const counter = new Counter();
    expect(counter.increment).toChangeBy(counter.count);
  });

  test('passes when resetting a counter', () => {
    const counter = new Counter();
    counter.increment();
    expect(() => {
      counter.increment();
      counter.increment();
    }).toChangeBy(() => counter.count(), 2);
  });

  test('fails when a given value does not increment', () => {
    const value = 0;
    expect(() => expect(() => value).toChangeBy(() => value)).toThrowErrorMatchingSnapshot();
  });

  test('fails when not mutating a counter', () => {
    const counter = new Counter();
    expect(() => expect(counter.count).toChangeBy(counter.count)).toThrowErrorMatchingSnapshot();
  });

  test('passes when resetting a counter back', () => {
    const counter = new Counter();
    counter.increment();
    counter.increment();
    counter.increment();
    expect(() => counter.reset()).toChangeBy(() => counter.count(), -3);
  });
});

describe('.not.toChangeBy', () => {
  test('passes when given a mutator that does not increment the value', () => {
    const value = 0;
    expect(() => value).not.toChangeBy(() => value, 1);
  });

  test('passes when not mutating a counter', () => {
    const counter = new Counter();
    expect(counter.count).not.toChangeBy(counter.count, 1);
  });

  test('fails when resetting a counter', () => {
    const counter = new Counter();
    expect(() => {
      counter.increment();
      counter.increment();
      counter.increment();
      counter.reset();
    }).not.toChangeBy(() => counter.count(), -3);
  });

  test('fails when mutating a counter', () => {
    const counter = new Counter();
    expect(() => expect(counter.increment).not.toChangeBy(counter.count, 1)).toThrowErrorMatchingSnapshot();
  });

  test('fails when a value expected not to change defies all expectations and changes', () => {
    let value = 0;
    expect(() => expect(() => value++).not.toChangeBy(() => value, 1)).toThrowErrorMatchingSnapshot();
  });
});
