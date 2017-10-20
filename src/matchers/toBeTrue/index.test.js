import each from 'jest-each';

import matcher from './';

describe('toBeTrue', () => {
  expect.extend(matcher);

  it('passes when given true', () => {
    expect(true).toBeTrue();
  });

  each([[false], [''], [0], [{}], [[]], [() => {}], [undefined], [null], [NaN]]).it(
    'passes when not given true: %s',
    given => {
      expect(given).not.toBeTrue();
    }
  );
});
