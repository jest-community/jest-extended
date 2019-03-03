import matcher from './';

expect.extend(matcher);

const log = () => console.log('console-log'); // eslint-disable-line
const warn = () => console.warn('console-warn'); // eslint-disable-line
const error = () => console.error('console-error'); // eslint-disable-line
const info = () => console.info('console-info'); // eslint-disable-line
const assert = () => console.assert('console-assert'); // eslint-disable-line
const noop = () => {};

describe('.toLog', () => {
  test('passes when the callback function outputs the expected message to the console', () => {
    expect(log).toLog('console-log');
    expect(warn).toLog('console-warn', 'warn');
    expect(error).toLog('console-error', 'error');
    expect(info).toLog('console-info', 'info');
    expect(assert).toLog('console-assert', 'assert');
    expect(() => console.log(1)).toLog(1); // eslint-disable-line
    expect(() => console.log([1, 2])).toLog([1, 2]); // eslint-disable-line
    expect(() => console.log({ a: 1, b: 2 })).toLog({ a: 1, b: 2 }); // eslint-disable-line
  });
  test('fails when the callback function does not output any message', () => {
    expect(() => expect(noop).toLog('something')).toThrowErrorMatchingSnapshot();
    expect(() => expect(noop).toLog('something', 'warn')).toThrowErrorMatchingSnapshot();
    expect(() => expect(noop).toLog('something', 'error')).toThrowErrorMatchingSnapshot();
    expect(() => expect(noop).toLog('something', 'info')).toThrowErrorMatchingSnapshot();
    expect(() => expect(noop).toLog('something', 'assert')).toThrowErrorMatchingSnapshot();
  });
  test('fails when the callback function does not output the expected message', () => {
    expect(() => expect(log).toLog('something')).toThrowErrorMatchingSnapshot();
    expect(() => expect(warn).toLog('something', 'warn')).toThrowErrorMatchingSnapshot();
    expect(() => expect(error).toLog('something', 'error')).toThrowErrorMatchingSnapshot();
    expect(() => expect(info).toLog('something', 'info')).toThrowErrorMatchingSnapshot();
    expect(() => expect(assert).toLog('something', 'assert')).toThrowErrorMatchingSnapshot();
    expect(() =>
      expect(() => {
        console.log('a', 'b', 'c'); // eslint-disable-line
        log();
      }).toLog('something')
    ).toThrowErrorMatchingSnapshot();
  });
  test('passes when the callback function outputs the expected message among others', () => {
    expect(() => {
      console.log('something'); // eslint-disable-line
      log();
    }).toLog('console-log');
  });
});

describe('.not.toLog', () => {
  test('passes when the callback function does not output anything', () => {
    expect(noop).not.toLog('something');
    expect(noop).not.toLog('something', 'warn');
    expect(noop).not.toLog('something', 'error');
    expect(noop).not.toLog('something', 'info');
    expect(noop).not.toLog('something', 'assert');
  });
  test('passes when the callback function does not output the expected message', () => {
    expect(log).not.toLog('something');
    expect(warn).not.toLog('something', 'warn');
    expect(error).not.toLog('something', 'error');
    expect(info).not.toLog('something', 'info');
    expect(assert).not.toLog('something', 'assert');
  });
  test('fails when the callback function outputs the expected message', () => {
    expect(() => expect(log).not.toLog('console-log')).toThrowErrorMatchingSnapshot();
    expect(() => expect(warn).not.toLog('console-warn', 'warn')).toThrowErrorMatchingSnapshot();
    expect(() => expect(error).not.toLog('console-error', 'error')).toThrowErrorMatchingSnapshot();
    expect(() => expect(info).not.toLog('console-info', 'info')).toThrowErrorMatchingSnapshot();
    expect(() => expect(assert).not.toLog('console-assert', 'assert')).toThrowErrorMatchingSnapshot();
  });
});
