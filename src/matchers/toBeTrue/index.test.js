import each from 'jest-each';

import toBeTrue from './';

describe('toBeTrue', () => {
  expect.extend(toBeTrue);

  it('returns true when given true', () => {
    expect(true).toBeTrue();
  });

  each([[false], [''], [0], [{}], [[]], [() => {}], [undefined], [null], [NaN]]).it(
    'returns false when given: %s',
    given => {
      expect(given).not.toBeTrue();
    }
  );
});
