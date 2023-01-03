import * as matcher from 'src/matchers/toChangeTo';
import { Counter } from '../fixtures/counter';

expect.extend(matcher);

describe('.toChangeTo', () => {
  test('passes when given a value that the mutator increments', () => {
    let value = 0;
    expect(() => value++).toChangeTo(() => value, 1);
  });

  test('passes when mutating a counter', () => {
    const counter = new Counter();
    expect(counter.increment).toChangeTo(counter.count, 1);
  });

  test('passes when resetting a counter', () => {
    const counter = new Counter();
    expect(() => {
      counter.increment();
      counter.increment();
      counter.increment();
    }).toChangeTo(() => counter.count(), 3);
  });

  test('fails when a given value does not increment', () => {
    const value = 0;
    expect(() => expect(() => value).toChangeTo(() => value, 1)).toThrowErrorMatchingSnapshot();
  });

  test('fails when not mutating a counter', () => {
    const counter = new Counter();
    expect(() => expect(counter.count).toChangeTo(counter.count, 1)).toThrowErrorMatchingSnapshot();
  });

  test('fails when resetting a counter back because a change cannot be the same as the initial value', () => {
    const counter = new Counter();
    expect(() =>
      expect(() => {
        counter.increment();
        counter.increment();
        counter.increment();
        counter.reset();
      }).toChangeTo(() => counter.count(), 0),
    ).toThrowErrorMatchingSnapshot();
  });

  test('passes when given a non-numeric value', () => {
    let special = 'spicy chicken sandwich';
    expect(() => {
      special = 'meatloaf';
    }).toChangeTo(() => special, 'meatloaf');
  });
});

describe('.not.toChange', () => {
  test('passes when given a mutator that does not increment the value', () => {
    const value = 0;
    expect(() => value).not.toChangeTo(() => value, 1);
  });

  test('passes when not mutating a counter', () => {
    const counter = new Counter();
    expect(counter.count).not.toChangeTo(counter.count, 1);
  });

  test('passes when resetting a counter', () => {
    const counter = new Counter();
    expect(() => {
      counter.increment();
      counter.increment();
      counter.increment();
    }).not.toChangeTo(() => counter.count(), 0);
  });

  test('fails when mutating a counter', () => {
    const counter = new Counter();
    expect(() => expect(counter.increment).not.toChangeTo(counter.count, 1)).toThrowErrorMatchingSnapshot();
  });

  test('fails when a value expected not to change defies all expectations and changes', () => {
    let value = 0;
    expect(() => expect(() => value++).not.toChangeTo(() => value, 1)).toThrowErrorMatchingSnapshot();
  });
});
