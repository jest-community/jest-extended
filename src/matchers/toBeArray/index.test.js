import each from 'jest-each';

import matcher from './';

expect.extend(matcher);

describe('.toBeArray', () => {
  test('passes when given an array', () => {
    expect([]).toBeArray();
  });

  test('fails when not given an array', () => {
    expect(() => expect(false).toBeArray()).toThrowErrorMatchingSnapshot();
  });
});

describe('.not.toBeArray', () => {
  each([[false], [true], [0], [{}], [() => {}], [undefined], [null], [NaN]]).test(
    'passes when not given an array: %s',
    given => {
      expect(given).not.toBeArray();
    }
  );

  test('fails when given an array', () => {
    expect(() => expect([]).not.toBeArray()).toThrowErrorMatchingSnapshot();
  });
});
