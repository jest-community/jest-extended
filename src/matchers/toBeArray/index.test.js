import each from 'jest-each';

import matcher from './';

expect.extend(matcher);

describe('.toBeArray', () => {
  it('passes when given an array', () => {
    expect([]).toBeArray();
  });

  it('fails when not given an array', () => {
    expect(() => expect(false).toBeArray()).toThrowErrorMatchingSnapshot();
  });
});

describe('.not.toBeArray', () => {
  each([[false], [true], [0], [{}], [() => {}], [undefined], [null], [NaN]]).it(
    'passes when not given an array: %s',
    given => {
      expect(given).not.toBeArray();
    }
  );

  it('fails when given an array', () => {
    expect(() => expect([]).not.toBeArray()).toThrowErrorMatchingSnapshot();
  });
});
