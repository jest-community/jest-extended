import * as matcher from 'src/matchers/toBeEmptyArray';

expect.extend(matcher);

describe('.toBeEmptyArray', () => {
  {
    test('passes when given an empty array', () => {
      expect([]).toBeEmptyArray();
    });
  }

  test.each([[false], [true], [0], [{}], [() => {}], [undefined], [null], [NaN]])(
    'fails when given type of %s which is not an array',
    given => {
      expect(() => expect(given).toBeEmptyArray()).toThrowErrorMatchingSnapshot();
    },
  );
});

describe('.not.toBeEmptyArray', () => {
  test.each([[false], [true], [0], [{}], [() => {}], [undefined], [null], [NaN]])(
    'passes when not given an empty array: %s',
    given => {
      expect(given).not.toBeEmptyArray();
    },
  );
  {
    test('fails when given an empty array', () => {
      expect(() => expect([]).not.toBeEmptyArray()).toThrowErrorMatchingSnapshot();
    });
  }
});
