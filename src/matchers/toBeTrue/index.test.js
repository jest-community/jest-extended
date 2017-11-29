import each from 'jest-each';

import matcher from './';

expect.extend(matcher);

describe('.toBeTrue', () => {
  test('passes when given true', () => {
    expect(true).toBeTrue();
  });

  test('fails when not given true', () => {
    expect(() => expect(false).toBeTrue()).toThrowErrorMatchingSnapshot();
  });
});

describe('.not.toBeTrue', () => {
  each([[false], [''], [0], [{}], [[]], [() => {}], [undefined], [null], [NaN]]).test(
    'passes when not given true: %s',
    given => {
      expect(given).not.toBeTrue();
    }
  );

  test('fails when given true', () => {
    expect(() => expect(true).not.toBeTrue()).toThrowErrorMatchingSnapshot();
  });
});
