import predicate from './predicate';

describe('toContainValue Predicate', () => {
  const shallow = {
    hello: 'world',
    foo: 0,
    bar: false
  };
  const deep = {
    message: shallow,
    donald: 'duck'
  };
  const deepArray = {
    message: [shallow],
    donald: 'duck'
  };

  describe('returns true', () => {
    it('when given object contains all primitive values', () => {
      expect(predicate(shallow, ['world', false, 0])).toBe(true);
    });

    it('when given object contains all values including objects', () => {
      expect(predicate(deep, ['duck', { hello: 'world', foo: 0, bar: false }])).toBe(true);
    });

    it('when given object contains all values including arrays', () => {
      expect(predicate(deepArray, ['duck', [{ hello: 'world', foo: 0, bar: false }]])).toBe(true);
    });
  });

  describe('returns false', () => {
    it('when given object does not contain all primitive value', () => {
      expect(predicate(shallow, [false, undefined])).toBe(false);
    });

    it('when given object does not contain all values including objects', () => {
      expect(predicate(deep, ['made up value', 'duck', { hello: 'world', foo: 0, bar: false }])).toBe(false);
    });

    it('when given object does not contain all values including arrays', () => {
      expect(predicate(deepArray, ['duck', 'made up value', [{ hello: 'world', foo: 0, bar: false }]])).toBe(false);
    });
  });
});
