import predicate from './predicate';
import { callsPredicate, equalityPredicate } from './predicate';

describe('.toHaveBeenCalledOnceWith', () => {
  describe('callsPredicate', () => {
    test('should return false when passed an empty array', () => {
      expect(callsPredicate([])).toBe(false);
    });

    test('should return false when passed an array of length 2', () => {
      expect(callsPredicate([1, 2])).toBe(false);
    });

    test('should return true when passed an array of length 1', () => {
      expect(callsPredicate([1])).toBe(true);
    });
  });

  describe('equalityPredicate', () => {
    test('should return false when checking for different number', () => {
      expect(equalityPredicate([1], [2])).toBe(false);
    });

    test('should return false when checking for different strings', () => {
      expect(equalityPredicate(['someIndex'], ['someOtherIndex'])).toBe(false);
    });

    test('should return false when checking for different objects', () => {
      const object1 = {
        some: 'object'
      };

      const object2 = {
        some: 'differentObject'
      };
      expect(equalityPredicate([object1], [object2])).toBe(false);
    });

    test('should return false when checking for different arrays', () => {
      const array1 = ['some'];
      const array2 = ['someOther'];
      expect(equalityPredicate([array1], [array2])).toBe(false);
    });

    test('should return false when checking for multiple different arguments', () => {
      expect(equalityPredicate([2, 1], [1, 2])).toBe(false);
    });

    test('should return true when checking for number equality', () => {
      expect(equalityPredicate([1], [1])).toBe(true);
    });

    test('should return true when checking for string equality', () => {
      expect(equalityPredicate(['someIndex'], ['someIndex'])).toBe(true);
    });

    test('should return true when checking for object equality', () => {
      const object = {
        some: 'object'
      };
      expect(equalityPredicate([object], [object])).toBe(true);
    });

    test('should return true when checking for array equality', () => {
      const array = ['some', { calledWith: 'object' }, ['array']];
      expect(equalityPredicate([array], [array])).toBe(true);
    });

    test('should return true when checking for multiple argument equality', () => {
      expect(equalityPredicate([1, 2], [1, 2])).toBe(true);
    });

    test('should return false when called with different types', () => {
      const object = {
        some: 'object'
      };
      expect(equalityPredicate([object], [1])).toBe(false);
    });

    test('should return false when mock called with one argument but expecting multiple', () => {
      expect(equalityPredicate([1], [1, 2])).toBe(false);
    });

    test('should return false when mock called with multiple arguments but expecting one', () => {
      expect(equalityPredicate([1, 2], [1])).toBe(false);
    });
  });

  describe('predicate', () => {
    test('should return false when passed a mock that has not been called', () => {
      const mockFunc = {
        mock: {
          calls: []
        }
      };
      expect(predicate(mockFunc, [])).toBe(false);
    });

    test('should return false when passed an expected arrray that differs from recieved calls', () => {
      const mockFunc = {
        mock: {
          calls: [[1]]
        }
      };
      expect(predicate(mockFunc, [2])).toBe(false);
    });

    test('should return true when passed a mock that has been called', () => {
      const mockFunc = {
        mock: {
          calls: [[1]]
        }
      };
      expect(predicate(mockFunc, [1])).toBe(true);
    });
  });
});
