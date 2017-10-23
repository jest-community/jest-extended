import predicate from './predicate';

describe('toContainValue Predicate', () => {
  const shallow = { hello: 'world' };
  const deep = { message: shallow };
  const deepArray = { message: [shallow] };

  describe('returns true', () => {
    it('when given object contains primitive value', () => {
      expect(predicate(shallow, 'world')).toBe(true);
    });

    it('when given object contains object value', () => {
      expect(predicate(deep, { hello: 'world' })).toBe(true);
    });

    it('when given object contains array value', () => {
      expect(predicate(deepArray, [{ hello: 'world' }])).toBe(true);
    });
  });

  describe('returns false', () => {
    it('when given object does not contain primitive value', () => {
      expect(predicate(shallow, 100)).toBe(false);
    });

    it('when given object does not contain object value', () => {
      expect(predicate(deep, { foo: 'bar' })).toBe(false);
    });

    it('when given object does not contain array value', () => {
      expect(predicate(deepArray, [{ bar: 'foo' }])).toBe(false);
    });
  });
});
