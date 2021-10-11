import matcher from './';
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

  describe('Async', () => {
    test('fails on rejects when return value is not provided', () => {
      const { pass, message } = toThrowWithMessage.call({ promise: 'rejects' });
      expect(pass).toBe(false);
      expect(message()).toMatchSnapshot();
    });

    test('fails on rejects when error message is not provided', () => {
      const rejectValue = true;
      const { pass, message } = toThrowWithMessage.call({ promise: 'rejects' }, rejectValue, Error);
      expect(pass).toBe(false);
      expect(message()).toMatchSnapshot();
    });

    test('fails on rejects when error type is not provided', () => {
      const rejectValue = true;
      const { pass, message } = toThrowWithMessage.call({ promise: 'rejects' }, rejectValue);
      expect(pass).toBe(false);
      expect(message()).toMatchSnapshot();
    });

    test('fails on rejects when error message provided is not a string or regex', () => {
      const rejectValue = true;
      const { pass, message } = toThrowWithMessage.call({ promise: 'rejects' }, rejectValue, Error, 2);
      expect(pass).toBe(false);
      expect(message()).toMatchSnapshot();
    });

    test('fails on rejects when a wrong type of error is thrown', () => {
      const rejectValue = SyntaxError('Expected message');
      const { pass, message } = toThrowWithMessage.call(
        { promise: 'rejects' },
        rejectValue,
        TypeError,
        'Expected message',
      );
      expect(pass).toBe(false);
      expect(message()).toMatchSnapshot();
    });

    test('passes on rejects when given an Error with a string error message', () => {
      const rejectValue = TypeError('Expected message');
      const { pass, message } = toThrowWithMessage.call(
        { promise: 'rejects' },
        rejectValue,
        TypeError,
        'Expected message',
      );
      expect(pass).toBe(true);
      expect(message()).toMatchSnapshot();
    });

    test('passes on rejects when given an Error with a regex error message', () => {
      const rejectValue = new TypeError('Expected message');
      const { pass, message } = toThrowWithMessage.call(
        { promise: 'rejects' },
        rejectValue,
        TypeError,
        /Expected message/,
      );
      expect(pass).toBe(true);
      expect(message()).toMatchSnapshot();
    });
    test('passes on rejects with rejected promise when given an Error with a string error message: end to end', async () => {
      await expect(Promise.reject(new SyntaxError('Expected message'))).rejects.toThrowWithMessage(
        SyntaxError,
        'Expected message',
      );
    });

    test('passes on rejects with rejected promise when given an Error with a regex error message: end to end', async () => {
      await expect(Promise.reject(new SyntaxError('Expected message'))).rejects.toThrowWithMessage(
        SyntaxError,
        /Expected message/,
      );
    });
    test('fails on rejects with resolved promise: end to end', async () => {
      expect.assertions(1);
      await expect(
        expect(Promise.resolve(new SyntaxError('Expected message'))).rejects.toThrowWithMessage(
          SyntaxError,
          /Expected message/,
        ),
      ).rejects.toThrowWithMessage(Error, /Received promise resolved instead of rejected/);
    });
  });
});
