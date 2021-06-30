import each from 'jest-each';

import matcher from './';

expect.extend(matcher);

describe('.toBeDate', () => {
  test('passes when given a date', () => {
    expect(new Date()).toBeDate();
  });

  test('fails when not given a date', () => {
    expect(() => expect(false).toBeDate()).toThrowErrorMatchingSnapshot();
  });
});

describe('.not.toBeDate', () => {
  each([[false], [true], [0], [''], [{}], [() => {}], [undefined], [null], [NaN]]).test(
    'passes when not given a date: %s',
    given => {
      expect(given).not.toBeDate();
    }
  );

  test('fails when given a date', () => {
    expect(() => expect(new Date('2018-01-01T13:00:00.000Z')).not.toBeDate()).toThrowErrorMatchingSnapshot();
  });
});
