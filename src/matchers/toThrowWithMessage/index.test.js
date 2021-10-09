import * as matcher from './';
const { toThrowWithMessage } = matcher;

expect.extend(matcher);

describe('.toThrowWithMessage', () => {
  test('fails when callback function is not provided', () => {
    const { pass, message } = toThrowWithMessage();
    expect(pass).toBe(false);
    expect(message()).toMatchSnapshot();
  });

  test('fails when a callback function is not a function', () => {
    const { pass, message } = toThrowWithMessage(2);
    expect(pass).toBe(false);
    expect(message()).toMatchSnapshot();
  });

  test('fails when error message is not provided', () => {
    const callback = () => {};
    const { pass, message } = toThrowWithMessage(callback, Error);
    expect(pass).toBe(false);
    expect(message()).toMatchSnapshot();
  });

  test('fails when error type is not provided', () => {
    const callback = () => {};
    const { pass, message } = toThrowWithMessage(callback);
    expect(pass).toBe(false);
    expect(message()).toMatchSnapshot();
  });

  test('fails when error message provided is not a string or regex', () => {
    const callback = () => {};
    const { pass, message } = toThrowWithMessage(callback, Error, 2);
    expect(pass).toBe(false);
    expect(message()).toMatchSnapshot();
  });

  test('fails when a callback provided doesnt throw an error', () => {
    const callback = () => {};
    const { pass, message } = toThrowWithMessage(callback, Error, 'error');
    expect(pass).toBe(false);
    expect(message()).toMatchSnapshot();
  });

  test('fails when a wrong type of error is thrown', () => {
    const callback = () => {
      throw SyntaxError('Expected message');
    };
    const { pass, message } = toThrowWithMessage(callback, TypeError, 'Expected message');
    expect(pass).toBe(false);
    expect(message()).toMatchSnapshot();
  });

  test('passes when given an Error with a string error message', () => {
    const callback = () => {
      throw TypeError('Expected message');
    };
    const { pass, message } = toThrowWithMessage(callback, TypeError, 'Expected message');
    expect(pass).toBe(true);
    expect(message()).toMatchSnapshot();
  });

  test('passes when given an Error with a regex error message', () => {
    const callback = () => {
      throw TypeError('Expected message');
    };
    const { pass, message } = toThrowWithMessage(callback, TypeError, /Expected message/);
    expect(pass).toBe(true);
    expect(message()).toMatchSnapshot();
  });

  test('passes when given an Error with a string error message: end to end', () => {
    expect(() => {
      throw new TypeError('Expected message');
    }).toThrowWithMessage(TypeError, 'Expected message');
  });

  test('passes when given an Error with a regex error message: end to end', () => {
    expect(() => {
      throw new SyntaxError('Expected message');
    }).toThrowWithMessage(SyntaxError, /Expected message/);
  });
});
