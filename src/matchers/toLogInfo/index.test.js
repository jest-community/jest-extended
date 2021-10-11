import matcher from './';

expect.extend(matcher);

const info = () => console.info('console-info'); // eslint-disable-line
const noop = () => {};

describe('.toLogInfo', () => {
  test('passes when the callback function outputs the expected message to the console', () => {
    expect(info).toLogInfo('console-info');
  });
  test('fails when the callback function does not output any message', () => {
    expect(() => expect(noop).toLogInfo('something')).toThrowErrorMatchingSnapshot();
  });
  test('fails when the callback function does not output the expected message', () => {
    expect(() => expect(info).toLogInfo('something')).toThrowErrorMatchingSnapshot();
  });
});

describe('.not.toLogInfo', () => {
  test('passes when the callback function does not output anything', () => {
    expect(noop).not.toLogInfo('something');
  });
  test('passes when the callback function does not output the expected message', () => {
    expect(info).not.toLogInfo('something');
  });
  test('fails when the callback function outputs the expected message', () => {
    expect(() => expect(info).not.toLogInfo('console-info')).toThrowErrorMatchingSnapshot();
  });
});
