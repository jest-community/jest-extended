import * as matcher from 'src/matchers/pass';

expect.extend(matcher);

describe('.pass', () => {
  test('passes without message', () => {
    // @ts-expect-error TODO: fix
    expect().pass();
  });
  test('passes with message', () => {
    // @ts-expect-error TODO: fix
    expect().pass('this should pass!');
  });
});

describe('.not.pass', () => {
  test('does not pass, has no message', () => {
    // @ts-expect-error TODO: fix
    expect(() => expect().not.pass()).toThrowErrorMatchingSnapshot();
  });
  test('does not.pass, has no message', () => {
    // @ts-expect-error TODO: fix
    expect(() => expect().not.pass('This should not pass!')).toThrowErrorMatchingSnapshot();
  });
});
