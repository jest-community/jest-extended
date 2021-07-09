import each from 'jest-each';
import predicate from './predicate';

describe('toBeNumber Predicate', () => {
  each`
    number
    ${10}
    ${NaN}
    ${Infinity}
    ${-Infinity}
  `.test('returns true when given: $number', ({ number }) => {
    expect(predicate(number)).toBe(true);
  });

  each([[false], [''], [[]], [{}], [() => {}], [undefined], [null], ['10']]).test(
    'returns false when given: %s',
    given => {
      expect(predicate(given)).toBe(false);
    },
  );
});
