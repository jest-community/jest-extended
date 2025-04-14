import * as matcher from 'src/matchers/fail';

expect.extend(matcher);

describe('.fail', () => {
  test('fails without message', () => {
    // @ts-expect-error TODO: fix
    expect(() => expect().fail()).toThrowErrorMatchingSnapshot();
  });
  test('fails with message', () => {
    // @ts-expect-error TODO: fix
    expect(() => expect().fail("This shouldn't fail!")).toThrowErrorMatchingSnapshot();
  });
});

describe('.not.fail', () => {
  test('does not fail without message', () => {
    // @ts-expect-error TODO: fix
    expect().not.fail();
  });
  test('does not fail with message', () => {
    // @ts-expect-error TODO: fix
    expect().not.fail('this should fail!');
  });
});
