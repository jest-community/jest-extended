import * as matcher from 'src/matchers/fail';

expect.extend(matcher);

describe('.fail', () => {
  test('fails without message', () => {
    expect(() => expect(undefined).fail()).toThrowErrorMatchingSnapshot();
  });
  test('fails with message', () => {
    expect(() => expect(undefined).fail("This shouldn't fail!")).toThrowErrorMatchingSnapshot();
  });
});

describe('.not.fail', () => {
  test('does not fail without message', () => {
    expect(undefined).not.fail();
  });
  test('does not fail with message', () => {
    expect(undefined).not.fail('this should fail!');
  });
});
