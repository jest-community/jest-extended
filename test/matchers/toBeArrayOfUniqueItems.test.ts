import * as matcher from 'src/matchers/toBeArrayOfUniqueItems';

expect.extend(matcher);

describe('.toBeArrayOfUniqueItems', () => {
  test('passes when given an empty array', () => {
    expect([]).toBeArrayOfUniqueItems();
  });

  test('passes when given an array with unique items', () => {
    expect([1, 2, 3]).toBeArrayOfUniqueItems();
  });

  test('passes when given an array with unique strings', () => {
    expect(['a', 'b', 'c']).toBeArrayOfUniqueItems();
  });

  test('fails when given an array with duplicate items', () => {
    expect(() => expect([1, 1, 2]).toBeArrayOfUniqueItems()).toThrowErrorMatchingSnapshot();
  });

  test('fails when not given an array', () => {
    expect(() => expect('not an array').toBeArrayOfUniqueItems()).toThrowErrorMatchingSnapshot();
  });
});

describe('.not.toBeArrayOfUniqueItems', () => {
  test('passes when given an array with duplicate items', () => {
    expect([1, 1, 2]).not.toBeArrayOfUniqueItems();
  });

  test('passes when given an array with duplicate strings', () => {
    expect(['a', 'a', 'b']).not.toBeArrayOfUniqueItems();
  });

  test.each([[false], [true], [0], [{}], [() => {}], [undefined], [null], [NaN]])(
    'passes when not given an array: %s',
    given => {
      expect(given).not.toBeArrayOfUniqueItems();
    },
  );

  test('fails when given an array with unique items', () => {
    expect(() => expect([1, 2, 3]).not.toBeArrayOfUniqueItems()).toThrowErrorMatchingSnapshot();
  });
});
