import matcher from './';

expect.extend(matcher);

const log = () => console.log('console-log'); // eslint-disable-line
const noop = () => {};

describe('.toLog', () => {
  test('passes when the callback function outputs the expected message to the console', () => {
    expect(log).toLog('console-log');
    expect(() => console.log(1)).toLog(1); // eslint-disable-line
    expect(() => console.log([1, 2])).toLog([1, 2]); // eslint-disable-line
    expect(() => console.log({ a: 1, b: 2 })).toLog({ a: 1, b: 2 }); // eslint-disable-line
  });
  test('fails when the callback function does not output any message', () => {
    expect(() => expect(noop).toLog('something')).toThrowErrorMatchingSnapshot();
  });
  test('fails when the callback function does not output the expected message', () => {
    expect(() => expect(log).toLog('something')).toThrowErrorMatchingSnapshot();
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
  });
  test('passes when the callback function does not output the expected message', () => {
    expect(log).not.toLog('something');
  });
  test('fails when the callback function outputs the expected message', () => {
    expect(() => expect(log).not.toLog('console-log')).toThrowErrorMatchingSnapshot();
  });
});
