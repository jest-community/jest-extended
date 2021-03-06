import each from 'jest-each';

import matcher from './';

expect.extend(matcher);

describe('.toBeExtensible', () => {
  each([[{}], [[]], [() => {}]]).test('passes when given an extensible object: %s', given => {
    expect(given).toBeExtensible();
  });

  each([[false], [''], [0], [undefined], [null], [NaN], [Object.seal({})], [Object.freeze({})]]).test(
    'fails when not given an extensible object: %s',
    given => {
      expect(() => expect(given).toBeExtensible()).toThrowErrorMatchingSnapshot();
    },
  );
});

describe('.not.toBeExtensible', () => {
  each([[false], [''], [0], [undefined], [null], [NaN], [Object.seal({})], [Object.freeze({})]]).test(
    'passes when not given extensible object: %s',
    given => {
      expect(given).not.toBeExtensible();
    },
  );

  each([[{}], [[]], [() => {}]]).test('fails when given an extensible object: %s', given => {
    expect(() => expect(given).not.toBeExtensible()).toThrowErrorMatchingSnapshot();
  });
});
