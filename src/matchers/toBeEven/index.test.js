import each from 'jest-each';

import matcher from './';

expect.extend(matcher);

describe('.toBeEven', () => {
  it('passes when given even number', () => {
    expect(2).toBeEven();
  });

  each([
    [false],
    [true],
    [''],
    [1],
    [{}],
    [() => {}],
    [undefined],
    [null],
    [NaN]
  ]).it('fails when not given an even number', given => {
    expect(() => expect(given).toBeEven()).toThrowErrorMatchingSnapshot();
  });
});

describe('.not.toBeEven', () => {
  it('fails when given an even number', () => {
    expect(() => expect(2).not.toBeEven()).toThrowErrorMatchingSnapshot();
  });

  each([
    [false],
    [true],
    [''],
    [1],
    [[]],
    [{}],
    [() => {}],
    [undefined],
    [null],
    [NaN]
  ]).it('passes when not given an even number: %s', given => {
    expect(given).not.toBeEven();
  });
});
