import each from 'jest-each';

import matcher from './';

expect.extend(matcher);

describe('toBeTrue', () => {
  it('passes when given true', () => {
    expect(true).toBeTrue();
  });

  it('fails when not given true', () => {
    expect(() => expect(false).toBeTrue()).toThrowErrorMatchingSnapshot();
  });
});

describe('.not.toBeTrue', () => {
  each([[false], [''], [0], [{}], [[]], [() => {}], [undefined], [null], [NaN]]).it(
    'passes when not given true: %s',
    given => {
      expect(given).not.toBeTrue();
    }
  );

  it('fails when given true', () => {
    expect(() => expect(true).not.toBeTrue()).toThrowErrorMatchingSnapshot();
  });
});
