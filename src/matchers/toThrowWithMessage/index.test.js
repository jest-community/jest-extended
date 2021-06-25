import matcher from './';

expect.extend(matcher);

describe('.toThrowWithMessage', () => {
  describe('validation', () => {
    test('fails when callback function is not provided', () => {
      expect(() => expect().toThrowWithMessage(TypeError, 'Expected message')).toThrowErrorMatchingSnapshot();

      expect(() => expect().not.toThrowWithMessage(TypeError, 'Expected message')).toThrowErrorMatchingSnapshot();
    });

    test('fails when callback function is not a function', () => {
      expect(() => expect(2).toThrowWithMessage(TypeError, 'Expected message')).toThrowErrorMatchingSnapshot();

      expect(() => expect(2).not.toThrowWithMessage(TypeError, 'Expected message')).toThrowErrorMatchingSnapshot();
    });

    test('fails when error not thrown', () => {
      expect(() => expect(() => {}).toThrowWithMessage(TypeError, 'Expected message')).toThrowErrorMatchingSnapshot();

      expect(() =>
        expect(() => {}).not.toThrowWithMessage(TypeError, 'Expected message')
      ).toThrowErrorMatchingSnapshot();
    });

    test('fails when a type is not a function', () => {
      expect(() =>
        expect(() => {
          throw new Error();
        }).toThrowWithMessage()
      ).toThrowErrorMatchingSnapshot();

      expect(() =>
        expect(() => {
          throw new Error();
        }).not.toThrowWithMessage()
      ).toThrowErrorMatchingSnapshot();
    });

    test('fails when a message is not provided', () => {
      expect(() =>
        expect(() => {
          throw new Error();
        }).toThrowWithMessage(Error)
      ).toThrowErrorMatchingSnapshot();

      expect(() =>
        expect(() => {
          throw new Error();
        }).not.toThrowWithMessage(Error)
      ).toThrowErrorMatchingSnapshot();
    });

    test('fails when a message is not string or regexp', () => {
      expect(() =>
        expect(() => {
          throw new Error();
        }).toThrowWithMessage(Error, 2)
      ).toThrowErrorMatchingSnapshot();

      expect(() =>
        expect(() => {
          throw new Error();
        }).not.toThrowWithMessage(Error, 2)
      ).toThrowErrorMatchingSnapshot();
    });
  });

  test('passes when given an message string and test case passes', () => {
    expect(() =>
      expect(() => {
        throw TypeError('Expected message');
      }).toThrowWithMessage(TypeError, 'Expected message')
    ).not.toThrowError();
  });

  test('passes when given a message regex and test case passes', () => {
    expect(() =>
      expect(() => {
        throw TypeError('Expected message');
      }).toThrowWithMessage(TypeError, /Expected message/)
    ).not.toThrowError();
  });

  test('fails when given an message string and test case fails', () => {
    expect(() =>
      expect(() => {
        throw TypeError('Expected');
      }).toThrowWithMessage(TypeError, 'Expected message')
    ).toThrowErrorMatchingSnapshot();
  });

  test('fails when given an message regex and test case fails', () => {
    expect(() =>
      expect(() => {
        throw TypeError('Expected');
      }).toThrowWithMessage(TypeError, /Expected message/)
    ).toThrowErrorMatchingSnapshot();
  });

  test('fails when given an Error with a string error message', () => {
    expect(() =>
      expect(() => {
        throw TypeError('Expected message');
      }).not.toThrowWithMessage(TypeError, 'Expected message')
    ).toThrowErrorMatchingSnapshot();
  });

  test('fails when given an Error with a regex error message', () => {
    expect(() =>
      expect(() => {
        throw TypeError('Expected message');
      }).not.toThrowWithMessage(TypeError, /Expected message/)
    ).toThrowErrorMatchingSnapshot();
  });
});
