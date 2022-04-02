/* eslint-disable @typescript-eslint/ban-ts-comment */
import * as utils from 'jest-matcher-utils';
import * as matcher from 'src/matchers/toThrowWithMessage';
const { toThrowWithMessage } = matcher;

expect.extend(matcher);

describe('.toThrowWithMessage', () => {
  test('fails when callback function is not provided', () => {
    // @ts-expect-error
    const { pass, message } = toThrowWithMessage.call({
      utils,
    });
    expect(pass).toBe(false);
    expect(message()).toMatchSnapshot();
  });

  test('fails when a callback function is not a function', () => {
    // @ts-expect-error
    const { pass, message } = toThrowWithMessage.call({ utils }, 2);
    expect(pass).toBe(false);
    expect(message()).toMatchSnapshot();
  });

  test('fails when error message is not provided', () => {
    const callback = () => {};

    // @ts-expect-error
    const { pass, message } = toThrowWithMessage.call({ utils }, callback, Error);
    expect(pass).toBe(false);
    expect(message()).toMatchSnapshot();
  });

  test('fails when error type is not provided', () => {
    const callback = () => {};

    // @ts-expect-error
    const { pass, message } = toThrowWithMessage.call({ utils }, callback);
    expect(pass).toBe(false);
    expect(message()).toMatchSnapshot();
  });

  test('fails when error message provided is not a string or regex', () => {
    const callback = () => {};

    // @ts-expect-error
    const { pass, message } = toThrowWithMessage.call({ utils }, callback, Error, 2);
    expect(pass).toBe(false);
    expect(message()).toMatchSnapshot();
  });

  test('fails when a callback provided doesnt throw an error', () => {
    const callback = () => {};

    // @ts-expect-error
    const { pass, message } = toThrowWithMessage.call({ utils }, callback, Error, 'error');
    expect(pass).toBe(false);
    expect(message()).toMatchSnapshot();
  });

  test('fails when a wrong type of error is thrown', () => {
    const callback = () => {
      throw SyntaxError('Expected message');
    };

    // @ts-expect-error
    const { pass, message } = toThrowWithMessage.call({ utils }, callback, TypeError, 'Expected message');
    expect(pass).toBe(false);
    expect(message()).toMatchSnapshot();
  });

  test('fails when error message does not match expected message', () => {
    const callback = () => {
      throw SyntaxError('Actual message');
    };
    const { pass, message } = toThrowWithMessage.call(
      // @ts-expect-error
      { utils },
      callback,
      SyntaxError,
      'Expected message',
    );
    expect(pass).toBe(false);
    expect(message()).toMatchSnapshot();
  });

  test('fails when error message does not match expected message regex', () => {
    const callback = () => {
      throw SyntaxError('Actual message');
    };

    // @ts-expect-error
    const { pass, message } = toThrowWithMessage.call({ utils }, callback, SyntaxError, /Expected message/);
    expect(pass).toBe(false);
    expect(message()).toMatchSnapshot();
  });

  test('passes when given an Error with a string error message', () => {
    const callback = () => {
      throw TypeError('Expected message');
    };
    const { pass, message } = toThrowWithMessage.call(
      // @ts-expect-error
      { utils },
      callback,
      TypeError,
      'Expected message',
    );
    expect(pass).toBe(true);
    expect(message()).toMatchSnapshot();
  });

  test('passes when given an Error with a regex error message', () => {
    const callback = () => {
      throw TypeError('Expected message');
    };
    const { pass, message } = toThrowWithMessage.call(
      // @ts-expect-error
      { utils },
      callback,
      TypeError,
      /Expected message/,
    );
    expect(pass).toBe(true);
    expect(message()).toMatchSnapshot();
  });

  test('passes when given an Error with a string error message: end to end', () => {
    expect(() => {
      throw new TypeError('Expected message');
    }).toThrowWithMessage.call({ utils }, TypeError, 'Expected message');
  });

  test('passes when given an Error with a regex error message: end to end', () => {
    expect(() => {
      throw new SyntaxError('Expected message');
    }).toThrowWithMessage.call({ utils }, SyntaxError, /Expected message/);
  });

  describe('Async', () => {
    test('fails on rejects when return value is not provided', () => {
      // @ts-expect-error
      const { pass, message } = toThrowWithMessage.call({
        utils,
        promise: 'rejects',
      });
      expect(pass).toBe(false);
      expect(message()).toMatchSnapshot();
    });

    test('fails on rejects when error message is not provided', () => {
      const rejectValue = true;
      // @ts-expect-error
      const { pass, message } = toThrowWithMessage.call(
        {
          utils,
          promise: 'rejects',
        },
        rejectValue,
        Error,
      );
      expect(pass).toBe(false);
      expect(message()).toMatchSnapshot();
    });

    test('fails on rejects when error type is not provided', () => {
      const rejectValue = true;
      // @ts-expect-error
      const { pass, message } = toThrowWithMessage.call(
        {
          utils,
          promise: 'rejects',
        },
        rejectValue,
      );
      expect(pass).toBe(false);
      expect(message()).toMatchSnapshot();
    });

    test('fails on rejects when error message provided is not a string or regex', () => {
      const rejectValue = true;

      const { pass, message } = toThrowWithMessage.call(
        {
          // @ts-expect-error
          utils,
          promise: 'rejects',
        },
        rejectValue,
        Error,
        2,
      );
      expect(pass).toBe(false);
      expect(message()).toMatchSnapshot();
    });

    test('fails on rejects when a wrong type of error is thrown', () => {
      const rejectValue = SyntaxError('Expected message');
      const { pass, message } = toThrowWithMessage.call(
        {
          // @ts-expect-error
          utils,
          promise: 'rejects',
        },
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
        {
          // @ts-expect-error
          utils,
          promise: 'rejects',
        },
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
        {
          // @ts-expect-error
          utils,
          promise: 'rejects',
        },
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
