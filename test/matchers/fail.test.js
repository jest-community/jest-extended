import * as matcher from 'src/matchers/fail';

expect.extend(matcher);
describe('.fail', () => {
  test('fails without message', () => {
    expect().fail(); // This should fail!
  });
  test('fails with message', () => {
    expect().fail('This should fail!');
  });
  test('fails when invoked in a try/catch', () => {
    try {
      expect().fail();
    } catch (error) {
      expect('this assertion').toBe('not checked');
    }
  });
});

describe('.not.fail', () => {
  test('does not fail without message', () => {
    expect().not.fail();
  });
  test('does not fail with message', () => {
    expect().not.fail('this should not fail!');
  });
});
