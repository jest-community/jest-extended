import each from 'jest-each';

import matcher from './';

expect.extend(matcher);

describe('.toBePositive', () => {
  it('passes when given a positive number', () => {
    expect(1).toBePositive();
  });

  it('fails when not given a positive number', () => {
    expect(() => expect(-1).toBePositive()).toThrowErrorMatchingSnapshot();
  });
});

describe('.not.toBePositive', () => {
  each([
    [false],
    [''],
    [-1],
    [0],
    [{}],
    [[]],
    [() => {}],
    [undefined],
    [null],
    [NaN],
    [Infinity]
  ]).it('passes when not given a positive number: %s', given => {
    expect(given).not.toBePositive();
  });

  it('fails when given a positive number', () => {
    expect(() => expect(5).not.toBePositive()).toThrowErrorMatchingSnapshot();
  });
});
