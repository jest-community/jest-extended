import predicate from './predicate';

describe('toBeNumber Predicate', () => {
  test.each`
    number
    ${10}
    ${NaN}
    ${Infinity}
    ${-Infinity}
  `('returns true when given: $number', ({ number }) => {
    expect(predicate(number)).toBe(true);
  });

  test.each([[false], [''], [[]], [{}], [() => {}], [undefined], [null], ['10']])(
    'returns false when given: %s',
    given => {
      expect(predicate(given)).toBe(false);
    },
  );
});
