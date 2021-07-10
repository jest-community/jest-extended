import matcher from './';

expect.extend(matcher);

describe('.toThrowWithMessage', () => {
  test('fails when callback function is not provided', () => {
    expect(() => expect().toThrowWithMessage()).toThrowErrorMatchingSnapshot();
  });

  test('fails when a callback function is not a function', () => {
    expect(() => expect(2).toThrowWithMessage()).toThrowErrorMatchingSnapshot();
  });

  test('fails when error message is not provided', () => {
    const callback = () => {};
    expect(() => expect(callback).toThrowWithMessage(Error)).toThrowErrorMatchingSnapshot();
  });

  test('fails when error type is not provided', () => {
    const callback = () => {
      throw SyntaxError('Expected message');
    };
    expect(() => expect(callback).toThrowWithMessage(undefined, 'Expected message')).toThrowErrorMatchingSnapshot();
  });

  test('fails when error message provided is not a string or regex', () => {
    const callback = () => {
      throw SyntaxError('Expected message');
    };
    expect(() => expect(callback).toThrowWithMessage(Error, 2)).toThrowErrorMatchingSnapshot();
  });

  test('fails when a callback provided does not throw an error', () => {
    const callback = () => {};
    expect(() => expect(callback).toThrowWithMessage(Error, 'Expected message')).toThrowErrorMatchingSnapshot();
  });

  test('fails when a wrong type of error is thrown', () => {
    const callback = () => {
      throw SyntaxError('Expected message');
    };
    expect(() => expect(callback).toThrowWithMessage(TypeError, 'Expected message')).toThrowErrorMatchingSnapshot();
  });

  test('fails when an error with wrong message is thrown', () => {
    const callback = () => {
      throw SyntaxError('Different message');
    };
    expect(() => expect(callback).toThrowWithMessage(SyntaxError, 'Expected message')).toThrowErrorMatchingSnapshot();
  });

  test('.not passes when given an Error with a string error message', () => {
    const callback = () => {
      throw TypeError('Expected message');
    };
    expect(() => expect(callback).not.toThrowWithMessage(TypeError, 'Expected message')).toThrowErrorMatchingSnapshot();
  });

  test('.not passes when given an Error with a regex error message', () => {
    const callback = () => {
      throw TypeError('Expected message');
    };
    expect(() => expect(callback).not.toThrowWithMessage(TypeError, /Expected message/)).toThrowErrorMatchingSnapshot();
  });

  test('passes when given an Error with a string error message', () => {
    const callback = () => {
      throw TypeError('Expected message');
    };
    expect(callback).toThrowWithMessage(TypeError, 'Expected message');
  });

  test('passes when given an Error with a regex error message', () => {
    const callback = () => {
      throw TypeError('Expected message');
    };
    expect(callback).toThrowWithMessage(TypeError, /Expected message/);
  });
});
