import * as matcher from 'src/matchers/toPartiallyContain';

expect.extend(matcher);

describe('.toPartiallyContain', () => {
  const item = { foo: 'bar', baz: 'qux' };

  test('passes when an array contains all of the properties of a given object', () => {
    expect([{ foo: 'bar', baz: 'qux', bax: 'zax' }]).toPartiallyContain(item);
  });

  test('fails when an array does not contain any of the properties of a given object', () => {
    expect(() => expect([{ a: 1, b: 2 }]).toPartiallyContain(item)).toThrowErrorMatchingSnapshot();
  });

  describe('.not.toPartiallyContain', () => {
    test('passes when an array does not contain any of the properties of a given object', () => {
      expect([{ a: 1, b: 2 }]).not.toPartiallyContain(item);
    });

    test('fails when an array contains all of the properties of a given object', () => {
      expect(() =>
        expect([{ foo: 'bar', baz: 'qux', bax: 'zax' }]).not.toPartiallyContain(item),
      ).toThrowErrorMatchingSnapshot();
    });
  });

  // Note - custom equality tester must be at the end of the file because once we add it, it cannot be removed
  (expect.addEqualityTesters ? describe : describe.skip)('with custom equality tester', () => {
    let mockEqualityTester: jest.Mock;
    beforeAll(() => {
      mockEqualityTester = jest.fn();
      expect.addEqualityTesters([mockEqualityTester]);
    });
    afterEach(() => {
      mockEqualityTester.mockReset();
    });
    test('passes when custom equality matches one of the values', () => {
      mockEqualityTester.mockImplementation((a, b) => (a === 'bla' && b === 'bar' ? true : undefined));
      expect([{ foo: 'bla', baz: 'qux' }]).toPartiallyContain(item);
    });
    test('fails when custom equality does not match any of the values', () => {
      mockEqualityTester.mockReturnValue(false);
      expect(() => expect([{ foo: 'bar', baz: 'qux' }]).toPartiallyContain(item)).toThrowErrorMatchingSnapshot();
    });
  });
});
