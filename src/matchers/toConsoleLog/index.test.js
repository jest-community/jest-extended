import matcher from './';

expect.extend(matcher);

const log = () => console.log('console-log'); // eslint-disable-line
const error = () => console.error('console-error'); // eslint-disable-line
const info = () => console.info('console-info'); // eslint-disable-line
const noop = () => {};

describe('.toConsoleLog', () => {
  test('passes when the callback function outputs the expected message to the console', () => {
    expect(log).toConsoleLog('console-log');
    expect(() => console.log(1)).toConsoleLog(1); // eslint-disable-line
    expect(() => console.log([1, 2])).toConsoleLog([1, 2]); // eslint-disable-line
    expect(() => console.log({ a: 1, b: 2 })).toConsoleLog({ a: 1, b: 2 }); // eslint-disable-line
  });
  test('fails when the callback function does not output any message', () => {
    expect(() => expect(noop).toConsoleLog('something')).toThrowErrorMatchingSnapshot();
  });
  test('fails when the callback function does not output the expected message', () => {
    expect(() => expect(log).toConsoleLog('something')).toThrowErrorMatchingSnapshot();
    expect(() =>
      expect(() => {
        console.log('a', 'b', 'c'); // eslint-disable-line
        log();
      }).toConsoleLog('something')
    ).toThrowErrorMatchingSnapshot();
  });
  test('passes when the callback function outputs the expected message among others', () => {
    expect(() => {
      console.log('something'); // eslint-disable-line
      log();
    }).toConsoleLog('console-log');
  });
});

describe('.toConsoleInfo', () => {
  test('passes when the callback function outputs the expected message to the console', () => {
    expect(info).toConsoleInfo('console-info', 'info');
  });
  test('fails when the callback function does not output any message', () => {
    expect(() => expect(noop).toConsoleInfo('something', 'info')).toThrowErrorMatchingSnapshot();
  });
  test('fails when the callback function does not output the expected message', () => {
    expect(() => expect(info).toConsoleInfo('something', 'info')).toThrowErrorMatchingSnapshot();
  });
});

describe('.toConsoleError', () => {
  test('passes when the callback function outputs the expected message to the console', () => {
    expect(error).toConsoleError('console-error', 'error');
  });
  test('fails when the callback function does not output any message', () => {
    expect(() => expect(noop).toConsoleError('something', 'error')).toThrowErrorMatchingSnapshot();
  });
  test('fails when the callback function does not output the expected message', () => {
    expect(() => expect(error).toConsoleError('something', 'error')).toThrowErrorMatchingSnapshot();
  });
});

describe('.not.toConsoleLog', () => {
  test('passes when the callback function does not output anything', () => {
    expect(noop).not.toConsoleLog('something');
  });
  test('passes when the callback function does not output the expected message', () => {
    expect(log).not.toConsoleLog('something');
  });
  test('fails when the callback function outputs the expected message', () => {
    expect(() => expect(log).not.toConsoleLog('console-log')).toThrowErrorMatchingSnapshot();
  });
});

describe('.not.toConsoleInfo', () => {
  test('passes when the callback function does not output anything', () => {
    expect(noop).not.toConsoleInfo('something', 'info');
  });
  test('passes when the callback function does not output the expected message', () => {
    expect(info).not.toConsoleInfo('something', 'info');
  });
  test('fails when the callback function outputs the expected message', () => {
    expect(() => expect(info).not.toConsoleInfo('console-info', 'info')).toThrowErrorMatchingSnapshot();
  });
});

describe('.not.toConsoleError', () => {
  test('passes when the callback function does not output anything', () => {
    expect(noop).not.toConsoleError('something', 'error');
  });
  test('passes when the callback function does not output the expected message', () => {
    expect(error).not.toConsoleError('something', 'error');
  });
  test('fails when the callback function outputs the expected message', () => {
    expect(() => expect(error).not.toConsoleError('console-error', 'error')).toThrowErrorMatchingSnapshot();
  });
});
