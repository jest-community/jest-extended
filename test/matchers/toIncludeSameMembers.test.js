import * as matcher from 'src/matchers/toIncludeSameMembers';

expect.extend(matcher);

describe('.toIncludeSameMembers', () => {
  test('passes when arrays are empty', () => {
    expect([]).toIncludeSameMembers([]);
  });

  test('passes when arrays match', () => {
    expect([1, 2, 3]).toIncludeSameMembers([1, 2, 3]);
    expect([{ foo: 'bar' }, { baz: 'qux' }]).toIncludeSameMembers([{ foo: 'bar' }, { baz: 'qux' }]);
  });

  test('passes when arrays match in a different order', () => {
    expect([1, 2, 3]).toIncludeSameMembers([3, 1, 2]);
    expect([{ foo: 'bar' }, { baz: 'qux' }]).toIncludeSameMembers([{ baz: 'qux' }, { foo: 'bar' }]);
  });

  test('fails when the arrays are not equal in length', () => {
    expect(() => expect([1, 2]).toIncludeSameMembers([1])).toThrowErrorMatchingSnapshot();
  });

  describe('fails when actual has more items than expected (when the ones exists match)', () => {
    test('simple items', () => {
      expect(() => expect([2, 4, 3, 1]).toIncludeSameMembers([1, 2, 3])).toThrowErrorMatchingSnapshot();
    });

    test('objects', () => {
      expect(() =>
        expect([{ id: 2 }, { id: 4 }, { id: 3 }, { id: 1 }]).toIncludeSameMembers([{ id: 1 }, { id: 2 }, { id: 3 }]),
      ).toThrowErrorMatchingSnapshot();
    });
  });

  describe('fails when actual has less items than expected (when the ones exists match)', () => {
    test('simple items', () => {
      expect(() => expect([2, 3, 1]).toIncludeSameMembers([1, 2, 3, 4])).toThrowErrorMatchingSnapshot();
    });

    test('objects', () => {
      expect(() =>
        expect([{ id: 2 }, { id: 3 }, { id: 1 }]).toIncludeSameMembers([{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }]),
      ).toThrowErrorMatchingSnapshot();
    });
  });

  describe('fails when actual has more items than expected (when the ones exists not all match)', () => {
    test('simple items', () => {
      expect(() => expect([3, 1, 8, 5, 6]).toIncludeSameMembers([1, 2, 3])).toThrowErrorMatchingSnapshot();
    });

    test('objects', () => {
      expect(() =>
        expect([{ id: 3 }, { id: 1 }, { id: 8 }, { id: 5 }, { id: 6 }]).toIncludeSameMembers([
          { id: 1 },
          { id: 2 },
          { id: 3 },
        ]),
      ).toThrowErrorMatchingSnapshot();
    });
  });

  describe('have gaps', () => {
    test('simple items', () => {
      expect(() => expect([5, 6, 1]).toIncludeSameMembers([1, 2, 3, 4, 5])).toThrowErrorMatchingSnapshot();
    });

    test('objects', () => {
      expect(() =>
        expect([
          { e: 5, value: 'thanks, you' },
          { f: 6, value: '?' },
          { a: 1, value: 'no' },
        ]).toIncludeSameMembers([
          { a: 1, value: 'hello' },
          { b: 2, value: 'world' },
          { c: 3, value: 'how are you' },
          { d: 4, value: 'im good' },
          { e: 5, value: 'thanks, you' },
        ]),
      ).toThrowErrorMatchingSnapshot();
    });
  });

  describe('keyOrFn', () => {
    test('passed property of the items as key', () => {
      expect(() =>
        expect([
          { id: 2, name: 'Steve' },
          { id: 4, name: 'Bucky' },
          { id: 3, name: 'Tony' },
          { id: 1, name: 'Bruce' },
        ]).toIncludeSameMembers(
          [
            { id: 1, name: 'Tony' },
            { id: 2, name: 'Bruce' },
            { id: 3, name: 'Steve' },
          ],
          'id',
        ),
      ).toThrowErrorMatchingSnapshot();
    });

    test('passed function', () => {
      expect(() =>
        expect([
          { id: 2, name: 'Steve' },
          { id: 4, name: 'Bucky' },
          { id: 3, name: 'Tony' },
          { id: 1, name: 'Bruce' },
        ]).toIncludeSameMembers(
          [
            { id: 1, name: 'Tony' },
            { id: 2, name: 'Bruce' },
            { id: 3, name: 'Steve' },
          ],
          (itemA, itemB) => itemA.id === itemB.id,
        ),
      ).toThrowErrorMatchingSnapshot();
    });
  });
});

describe('.not.toIncludeSameMembers', () => {
  test('fails when array contents match', () => {
    expect(() => expect([1]).not.toIncludeSameMembers([1])).toThrowErrorMatchingSnapshot();
  });

  test('passes when the arrays are different in length', () => {
    expect([1, 2, 3]).not.toIncludeSameMembers([1, 2]);
    expect([{ foo: 'bar' }, { baz: 'qux' }]).not.toIncludeSameMembers([{ hello: 'world' }]);
  });

  test('passes when given object is not an array', () => {
    expect(4).not.toIncludeSameMembers([4, 5, 6]);
  });

  test('passes when arrays do not match', () => {
    expect([]).not.toIncludeSameMembers([1]);
    expect([1]).not.toIncludeSameMembers([1, 1]);
    expect([1, 2]).not.toIncludeSameMembers([1, 2, 2]);
    expect([1, 2, 3]).not.toIncludeSameMembers([2, 3, 4]);
  });

  test('passes when no elements match', () => {
    expect([1, 2]).not.toIncludeSameMembers([3, 4]);
  });

  test('passes when only one element matches', () => {
    expect([1, 2, 3]).not.toIncludeSameMembers([3, 4, 5]);
  });
});
