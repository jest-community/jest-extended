import each from 'jest-each';

import matcher from './';

expect.extend(matcher);

describe('.toBeSymbol', () => {
  test('passes when given a symbol', () => {
    expect(Symbol()).toBeSymbol();
  });

  test('fails when not given a symbol', () => {
    expect(() => expect(false).toBeSymbol()).toThrowErrorMatchingSnapshot();
  });
});

describe('.not.toBeSymbol', () => {
  each([
    [false],
    [''],
    [0],
    [{}],
    [[]],
    [undefined],
    [null],
    [NaN],
    [() => {}]
  ]).test('passes when not given a symbol: %s', given => {
    expect(given).not.toBeSymbol();
  });

  test('fails when given a symbol', () => {
    expect(() => expect(Symbol()).not.toBeSymbol()).toThrowErrorMatchingSnapshot();
  });
});
