import each from 'jest-each';

import matcher from './';

expect.extend(matcher);

describe('.toBeNumber', () => {
  it('passes when given a number', () => {
    expect(1).toBeNumber();
  });

  it('fails when not given a number', () => {
    expect(() => expect(false).toBeNumber()).toThrowErrorMatchingSnapshot();
  });
});

describe('.not.toBeNumber', () => {
  each([[false], [true], [[]], [{}], [() => {}], [undefined], [null], [NaN]]).it(
    'passes when not given a number: %s',
    given => {
      expect(given).not.toBeNumber();
    }
  );

  it('fails when given a number', () => {
    expect(() => expect(1).not.toBeNumber()).toThrowErrorMatchingSnapshot();
  });
});
