import each from 'jest-each';

import matcher from './';

expect.extend(matcher);

describe('.toBeNumber', () => {
  test('passes when given a number', () => {
    expect(1).toBeNumber();
  });

  test('fails when not given a number', () => {
    expect(() => expect(false).toBeNumber()).toThrowErrorMatchingSnapshot();
  });
});

describe('.not.toBeNumber', () => {
  each([[false], [true], [[]], [{}], [() => {}], [undefined], [null], [NaN]]).test(
    'passes when not given a number: %s',
    given => {
      expect(given).not.toBeNumber();
    }
  );

  test('fails when given a number', () => {
    expect(() => expect(1).not.toBeNumber()).toThrowErrorMatchingSnapshot();
  });
});
