import each from 'jest-each';

import matcher from './';

expect.extend(matcher);

describe('.toBeObject', () => {
  test('passes when given an object', () => {
    expect({}).toBeObject();
  });

  each([[false], [''], [0], [() => {}], [undefined], [NaN], [[1, 2, 3]]]).test(
    'fails when not given an object: %s',
    given => {
      expect(() => expect(given).toBeObject()).toThrowErrorMatchingSnapshot();
    }
  );
});

describe('.not.toBeObject', () => {
  each([[false], [''], [0], [() => {}], [undefined], [NaN], [[1, 2, 3]]]).test(
    'passes when not given an object: %s',
    given => {
      expect(given).not.toBeObject();
    }
  );

  test('fails when given an object', () => {
    expect(() => expect({}).not.toBeObject()).toThrowErrorMatchingSnapshot();
  });
});
