import matcher from './';

expect.extend(matcher);

const warn = () => console.warn('console-warning'); // eslint-disable-line
const noop = () => {};

describe('.toLogWarning', () => {
  test('passes when the callback function outputs the expected message to the console', () => {
    expect(warn).toLogWarning('console-warning');
  });
  test('fails when the callback function does not output any message', () => {
    expect(() => expect(noop).toLogWarning('something')).toThrowErrorMatchingSnapshot();
  });
  test('fails when the callback function does not output the expected message', () => {
    expect(() => expect(warn).toLogWarning('something')).toThrowErrorMatchingSnapshot();
  });
});

describe('.not.toLogWarning', () => {
  test('passes when the callback function does not output anything', () => {
    expect(noop).not.toLogWarning('something');
  });
  test('passes when the callback function does not output the expected message', () => {
    expect(warn).not.toLogWarning('something');
  });
  test('fails when the callback function outputs the expected message', () => {
    expect(() => expect(warn).not.toLogWarning('console-warning')).toThrowErrorMatchingSnapshot();
  });
});
