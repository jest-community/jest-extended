import { matcherHint, printExpected, printReceived } from 'jest-matcher-utils';
import * as matcher from 'src/matchers/toThrowWithMessage';
const { toThrowWithMessage } = matcher;

expect.extend(matcher);

class UnconstructableError extends Error {
  constructor(message: number) {
    super(message.toString());
    this.name = 'UnconstructableError';
  }
}

describe('.toThrowWithMessage', () => {
  test('fails when callback function is not provided', () => {
    // @ts-expect-error this is intentional for the test
    const { pass, message } = toThrowWithMessage.call({
      utils: { matcherHint: matcherHint, printExpected: printExpected, printReceived: printReceived },
    });
    expect(pass).toBe(false);
    expect(message()).toMatchSnapshot();
  });

  test('fails when a callback function is not a function', () => {
    // @ts-expect-error this is intentional for the test
    const { pass, message } = toThrowWithMessage.call(
      { utils: { matcherHint: matcherHint, printExpected: printExpected, printReceived: printReceived } },
      2,
    );
    expect(pass).toBe(false);
    expect(message()).toMatchSnapshot();
  });

  test('fails when error message is not provided', () => {
    const callback = () => {};
    // @ts-expect-error this is intentional for the test
    const { pass, message } = toThrowWithMessage.call(
      { utils: { matcherHint: matcherHint, printExpected: printExpected, printReceived: printReceived } },
      callback,
      Error,
    );
    expect(pass).toBe(false);
    expect(message()).toMatchSnapshot();
  });

  test('fails when error type is not provided', () => {
    const callback = () => {};
    // @ts-expect-error this is intentional for the test
    const { pass, message } = toThrowWithMessage.call(
      { utils: { matcherHint: matcherHint, printExpected: printExpected, printReceived: printReceived } },
      callback,
    );
    expect(pass).toBe(false);
    expect(message()).toMatchSnapshot();
  });

  test('fails when error message provided is not a string or regex', () => {
    const callback = () => {};
    const { pass, message } = toThrowWithMessage.call(
      { utils: { matcherHint: matcherHint, printExpected: printExpected, printReceived: printReceived } },
      callback,
      Error,
      // @ts-expect-error this is intentional for the test
      2,
    );
    expect(pass).toBe(false);
    expect(message()).toMatchSnapshot();
  });

  test('fails when a callback provided doesnt throw an error', () => {
    const callback = () => {};
    const { pass, message } = toThrowWithMessage.call(
      { utils: { matcherHint: matcherHint, printExpected: printExpected, printReceived: printReceived } },
      callback,
      Error,
      'error',
    );
    expect(pass).toBe(false);
    expect(message()).toMatchSnapshot();
  });

  test('fails when a wrong type of error is thrown', () => {
    const callback = () => {
      throw SyntaxError('Expected message');
    };
    const { pass, message } = toThrowWithMessage.call(
      { utils: { matcherHint: matcherHint, printExpected: printExpected, printReceived: printReceived } },
      callback,
      TypeError,
      'Expected message',
    );
    expect(pass).toBe(false);
    expect(message()).toMatchSnapshot();
  });

  test('fails when error message does not match expected message', () => {
    const callback = () => {
      throw SyntaxError('Actual message');
    };
    const { pass, message } = toThrowWithMessage.call(
      { utils: { matcherHint: matcherHint, printExpected: printExpected, printReceived: printReceived } },
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
    const { pass, message } = toThrowWithMessage.call(
      { utils: { matcherHint: matcherHint, printExpected: printExpected, printReceived: printReceived } },
      callback,
      SyntaxError,
      /Expected message/,
    );
    expect(pass).toBe(false);
    expect(message()).toMatchSnapshot();
  });

  test('passes when given an Error with a string error message', () => {
    const callback = () => {
      throw TypeError('Expected message');
    };
    const { pass, message } = toThrowWithMessage.call(
      { utils: { matcherHint: matcherHint, printExpected: printExpected, printReceived: printReceived } },
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
      { utils: { matcherHint: matcherHint, printExpected: printExpected, printReceived: printReceived } },
      callback,
      TypeError,
      /Expected message/,
    );
    expect(pass).toBe(true);
    expect(message()).toMatchSnapshot();
  });

  test('passes with an unconstructable error given a string message', () => {
    const callback = () => {
      throw new UnconstructableError(42);
    };
    const { pass, message } = toThrowWithMessage.call(
      { utils: { matcherHint: matcherHint, printExpected: printExpected, printReceived: printReceived } },
      callback,
      UnconstructableError,
      '42',
    );
    expect(pass).toBe(true);
    expect(message()).toMatchSnapshot();
  });

  test('passes with an unconstructable error given a regex message', () => {
    const callback = () => {
      throw new UnconstructableError(42);
    };
    const { pass, message } = toThrowWithMessage.call(
      { utils: { matcherHint: matcherHint, printExpected: printExpected, printReceived: printReceived } },
      callback,
      UnconstructableError,
      /42/,
    );
    expect(pass).toBe(true);
    expect(message()).toMatchSnapshot();
  });

  test('passes when given an Error with a string error message: end to end', () => {
    expect(() => {
      throw new TypeError('Expected message');
    }).toThrowWithMessage.call(
      { utils: { matcherHint: matcherHint, printExpected: printExpected, printReceived: printReceived } },
      TypeError,
      'Expected message',
    );
  });

  test('passes when given an Error with a regex error message: end to end', () => {
    expect(() => {
      throw new SyntaxError('Expected message');
    }).toThrowWithMessage.call(
      { utils: { matcherHint: matcherHint, printExpected: printExpected, printReceived: printReceived } },
      SyntaxError,
      /Expected message/,
    );
  });

  test('fails when unable to create an error', () => {
    class ExplodingError extends Error {
      constructor() {
        super();
        throw new Error('Cannot instantiate');
      }
    }

    const callback = () => {
      throw new ExplodingError();
    };

    const { pass, message } = toThrowWithMessage.call(
      { utils: { matcherHint, printExpected, printReceived } },
      callback,
      ExplodingError,
      'Expected message',
    );

    expect(pass).toBe(false);
    expect(message()).toMatchSnapshot();
  });

  describe('Async', () => {
    test('fails on rejects when return value is not provided', () => {
      // @ts-expect-error this is intentional for the test
      const { pass, message } = toThrowWithMessage.call({
        utils: { matcherHint: matcherHint, printExpected: printExpected, printReceived: printReceived },
        promise: 'rejects',
      });
      expect(pass).toBe(false);
      expect(message()).toMatchSnapshot();
    });

    test('fails on rejects when error message is not provided', () => {
      const rejectValue = true;
      // @ts-expect-error this is intentional for the test
      const { pass, message } = toThrowWithMessage.call(
        {
          utils: { matcherHint: matcherHint, printExpected: printExpected, printReceived: printReceived },
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
      // @ts-expect-error this is intentional for the test
      const { pass, message } = toThrowWithMessage.call(
        {
          utils: { matcherHint: matcherHint, printExpected: printExpected, printReceived: printReceived },
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
          utils: { matcherHint: matcherHint, printExpected: printExpected, printReceived: printReceived },
          promise: 'rejects',
        },
        // @ts-expect-error this is intentional for the test
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
          utils: { matcherHint: matcherHint, printExpected: printExpected, printReceived: printReceived },
          promise: 'rejects',
        },
        // @ts-expect-error this is intentional for the test
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
          utils: { matcherHint: matcherHint, printExpected: printExpected, printReceived: printReceived },
          promise: 'rejects',
        },
        // @ts-expect-error this is intentional for the test
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
          utils: { matcherHint: matcherHint, printExpected: printExpected, printReceived: printReceived },
          promise: 'rejects',
        },
        // @ts-expect-error this is intentional for the test
        rejectValue,
        TypeError,
        /Expected message/,
      );
      expect(pass).toBe(true);
      expect(message()).toMatchSnapshot();
    });

    test('passes with an unconstructable error given a string message', () => {
      const rejectValue = new UnconstructableError(42);
      const { pass, message } = toThrowWithMessage.call(
        {
          utils: { matcherHint: matcherHint, printExpected: printExpected, printReceived: printReceived },
          promise: 'rejects',
        },
        // @ts-expect-error this is intentional for the test
        rejectValue,
        UnconstructableError,
        '42',
      );
      expect(pass).toBe(true);
      expect(message()).toMatchSnapshot();
    });

    test('passes with an unconstructable error given a regex message', () => {
      const rejectValue = new UnconstructableError(42);
      const { pass, message } = toThrowWithMessage.call(
        {
          utils: { matcherHint: matcherHint, printExpected: printExpected, printReceived: printReceived },
          promise: 'rejects',
        },
        // @ts-expect-error this is intentional for the test
        rejectValue,
        UnconstructableError,
        /42/,
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

describe('.not.toThrowWithMessage', () => {
  test('passes when callback function is not provided', () => {
    // @ts-expect-error this is intentional for the test
    const { pass, message } = toThrowWithMessage.call({
      utils: { matcherHint, printExpected, printReceived },
      isNot: true,
    });
    expect(pass).toBe(false);
    expect(message()).toMatchSnapshot();
  });

  test('passes when a different type of error is thrown', () => {
    const callback = () => {
      throw TypeError('Expected message');
    };
    expect(callback).not.toThrowWithMessage(SyntaxError, 'Expected message');
  });

  test('passes when error message does not match', () => {
    const callback = () => {
      throw TypeError('Different message');
    };
    expect(callback).not.toThrowWithMessage(TypeError, 'Expected message');
  });

  test('passes when error message does not match regex', () => {
    const callback = () => {
      throw TypeError('Different message');
    };
    expect(callback).not.toThrowWithMessage(TypeError, /Expected message/);
  });

  test('fails when error type and message both match', () => {
    const callback = () => {
      throw TypeError('Expected message');
    };
    expect(() => {
      expect(callback).not.toThrowWithMessage(TypeError, 'Expected message');
    }).toThrowErrorMatchingSnapshot();
  });

  test('fails when error type and regex message both match', () => {
    const callback = () => {
      throw TypeError('Expected message');
    };
    expect(() => {
      expect(callback).not.toThrowWithMessage(TypeError, /Expected message/);
    }).toThrowErrorMatchingSnapshot();
  });

  test('passes with unconstructable error when message does not match', () => {
    const callback = () => {
      throw new UnconstructableError(42);
    };
    expect(callback).not.toThrowWithMessage(UnconstructableError, '43');
  });

  describe('Async', () => {
    test('passes on rejects when different error type is thrown', async () => {
      await expect(Promise.reject(new TypeError('Expected message'))).rejects.not.toThrowWithMessage(
        SyntaxError,
        'Expected message',
      );
    });

    test('passes on rejects when error message does not match', async () => {
      await expect(Promise.reject(new TypeError('Different message'))).rejects.not.toThrowWithMessage(
        TypeError,
        'Expected message',
      );
    });

    test('fails on rejects when error type and message both match', async () => {
      await expect(
        expect(Promise.reject(new TypeError('Expected message'))).rejects.not.toThrowWithMessage(
          TypeError,
          'Expected message',
        ),
      ).rejects.toThrowErrorMatchingSnapshot();
    });

    test('passes on resolved promise', async () => {
      await expect(Promise.resolve()).resolves.not.toThrowWithMessage(TypeError, 'Expected message');
    });
  });
});
