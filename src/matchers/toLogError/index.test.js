import matcher from './';

expect.extend(matcher);

const error = () => console.error('console-error'); // eslint-disable-line
const noop = () => {};

describe('.toLogError', () => {
  test('passes when the callback function outputs the expected message to the console', () => {
    expect(error).toLogError('console-error');
  });
  test('fails when the callback function does not output any message', () => {
    expect(() => expect(noop).toLogError('something')).toThrowErrorMatchingSnapshot();
  });
  test('fails when the callback function does not output the expected message', () => {
    expect(() => expect(error).toLogError('something')).toThrowErrorMatchingSnapshot();
  });
});

describe('.not.toLogError', () => {
  test('passes when the callback function does not output anything', () => {
    expect(noop).not.toLogError('something');
  });
  test('passes when the callback function does not output the expected message', () => {
    expect(error).not.toLogError('something');
  });
  test('fails when the callback function outputs the expected message', () => {
    expect(() => expect(error).not.toLogError('console-error')).toThrowErrorMatchingSnapshot();
  });
});
