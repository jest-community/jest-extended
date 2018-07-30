import each from 'jest-each';

import matcher from './';

expect.extend(matcher);

describe('.toBeNumber', () => {
  each`
  number
  ${10}
  ${NaN}
  ${Infinity}
  ${-Infinity}
  `.test('passes when given: $number', ({ number }) => {
    expect(number).toBeNumber();
  });

  test('fails when not given a number', () => {
    expect(() => expect(false).toBeNumber()).toThrowErrorMatchingSnapshot();
  });
});

describe('.not.toBeNumber', () => {
  each([
    [false],
    [true],
    [[]],
    [{}],
    [() => {}],
    [undefined],
    [null],
    ['10']
  ]).test('passes when not given a number: %s', given => {
    expect(given).not.toBeNumber();
  });

  test('fails when given a number', () => {
    expect(() => expect(1).not.toBeNumber()).toThrowErrorMatchingSnapshot();
  });
});
