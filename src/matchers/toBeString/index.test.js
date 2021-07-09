import each from 'jest-each';

import matcher from './';

expect.extend(matcher);

describe('.toBeString', () => {
  test('passes when given a string literal', () => {
    expect('string type').toBeString();
  });

  test('passes when given an object of type string', () => {
    expect(new String('string type')).toBeString();
  });

  test('fails when not given a string', () => {
    expect(() => expect(5).toBeString()).toThrowErrorMatchingSnapshot();
  });
});

describe('.not.toBeString', () => {
  each([[false], [0], [{}], [[]], [() => {}], [undefined], [null], [NaN]]).test(
    'passes when not item is not of type string: %s',
    given => {
      expect(given).not.toBeString();
    },
  );

  test('fails when given a string literal', () => {
    expect(() => expect('').not.toBeString()).toThrowErrorMatchingSnapshot();
  });

  test('fails when given an object of type string', () => {
    expect(() => expect(new String('string type')).not.toBeString()).toThrowErrorMatchingSnapshot();
  });
});
