import each from 'jest-each';

import matcher from './';

expect.extend(matcher);

describe('.toBeJSON', () => {
  each([['{"key":"value"}'], ['[1,2,3]']]).test('passes when given a valid JSON input: %s', given => {
    expect(given).toBeJSON();
  });

  test('fails when given a bad JSON', () => {
    expect(() => expect('{"key"}').toBeJSON()).toThrowErrorMatchingSnapshot();
  });
});

describe('.not.toBeJSON', () => {
  each([[{ key: 'value' }], ['{"bad_json":*}'], [''], ['hello'], [12], [null]]).test('passes when given non valid JSON: %s', given => {
    expect(given).not.toBeJSON();
  });

  test('fails when given a valid JSON', () => {
    expect(() => expect('{"key":"value"}').not.toBeJSON()).toThrowErrorMatchingSnapshot();
  });
});
