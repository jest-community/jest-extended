import * as matcher from 'src/matchers/pass';

expect.extend(matcher);

describe('.pass', () => {
  test('passes without message', () => {
    expect(undefined).pass();
  });
  test('passes with message', () => {
    expect(undefined).pass('this should pass!');
  });
});

describe('.not.pass', () => {
  test('does not pass, has no message', () => {
    expect(() => expect(undefined).not.pass()).toThrowErrorMatchingSnapshot();
  });
  test('does not.pass, has no message', () => {
    expect(() => expect(undefined).not.pass('This should not pass!')).toThrowErrorMatchingSnapshot();
  });
});
