import predicate from './predicate';

describe('toContainAnyKeys Predicate', () => {
  describe('returns true', () => {
    test('when one or more key is found in the object', () => {
      var test = predicate(
        {
          name: 'Steve the Pirate'
        },
        ['name']
      );

      expect(test).toBe(true);
    });
  });

  describe('returns false', () => {
    test('when no keys are found in the object', () => {
      var test = predicate(
        {
          name: 'Steve the Pirate'
        },
        ['age']
      );

      expect(test).toBe(false);
    });
  });
});
