import each from 'jest-each';

import matcher from './';

expect.extend(matcher);

describe('.toBePositive', () => {
  it('passes when given positive number', () => {
    expect(1).toBePositive();
    expect(100.1).toBePositive();
  });

  it('passes when given positive number in brackets', () => {
    expect([1]).toBePositive();
    expect([100.1]).toBePositive();
  });

  it('fails when not given positive number', () => {
    expect(() => expect(-1).toBePositive()).toThrowErrorMatchingSnapshot();
  });
});

describe('.not.toBePositive', () => {
  each([[-1], [false], [[]], [{}], [-Infinity], [Infinity], [true]]).it('passes when not given true: %s', given => {
    expect(given).not.toBePositive();
  });

  it('fails when given positive number', () => {
    expect(() => expect(1).not.toBePositive()).toThrowErrorMatchingSnapshot();
  });
});
