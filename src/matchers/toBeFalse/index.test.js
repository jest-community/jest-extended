import each from 'jest-each';

import matcher from './';

expect.extend(matcher);

describe('.toBeFalse', () => {
  it('passes when given false', () => {
    expect(false).toBeFalse();
  });

  it('fails when not given false', () => {
    expect(() => expect(true).toBeFalse()).toThrowErrorMatchingSnapshot();
  });
});

describe('.not.toBeFalse', () => {
  each([[true], [''], [0], [{}], [[]], [() => {}], [undefined], [null], [NaN]]).it(
    'passes when not given false: %s',
    given => {
      expect(given).not.toBeFalse();
    }
  );

  it('fails when given false', () => {
    expect(() => expect(false).not.toBeFalse()).toThrowErrorMatchingSnapshot();
  });
});
