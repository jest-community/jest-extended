import each from 'jest-each';

import matcher from './';

expect.extend(matcher);

describe('.toBeFalse', () => {
  test('passes when given false', () => {
    expect(false).toBeFalse();
  });

  test('fails when not given false', () => {
    expect(() => expect(true).toBeFalse()).toThrowErrorMatchingSnapshot();
  });
});

describe('.not.toBeFalse', () => {
  each([[true], [''], [0], [{}], [[]], [() => {}], [undefined], [null], [NaN]]).test(
    'passes when not given false: %s',
    given => {
      expect(given).not.toBeFalse();
    },
  );

  test('fails when given false', () => {
    expect(() => expect(false).not.toBeFalse()).toThrowErrorMatchingSnapshot();
  });
});
