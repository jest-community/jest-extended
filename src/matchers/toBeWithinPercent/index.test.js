import matcher from './';

expect.extend(matcher);

describe('.toBeWithinPercent', () => {
  test('passes when given number is within x percent of the target number', () => {
    expect(55).toBeWithinPercent(50, 10);
  });

  test('fails when given number is not within x percent of the target number', () => {
    expect(() => expect(56).toBeWithinPercent(50, 10)).toThrowErrorMatchingSnapshot();
  });
});

describe('.not.toBeWithinPercent', () => {
  test('passes when given number is not within x percent of the target number', () => {
    expect(100).not.toBeWithinPercent(20, 5);
  });

  test('fails when given number is within x percent of the target number', () => {
    expect(() => expect(25).not.toBeWithinPercent(20, 100)).toThrowErrorMatchingSnapshot();
  });
});
