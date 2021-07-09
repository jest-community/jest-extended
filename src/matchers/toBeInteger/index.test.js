import matcher from './';

expect.extend(matcher);

describe('.toBeInteger', () => {
  test('passes when given integer', () => {
    expect(1).toBeInteger();
  });

  test('fails when given fraction', () => {
    expect(() => expect(1.5).toBeInteger()).toThrowErrorMatchingSnapshot();
  });
});

describe('.not.toBeInteger', () => {
  test('passes when given fraction', () => {
    expect(1.5).not.toBeInteger();
  });

  test('fails when given integer', () => {
    expect(() => expect(1).not.toBeInteger()).toThrowErrorMatchingSnapshot();
  });
});
