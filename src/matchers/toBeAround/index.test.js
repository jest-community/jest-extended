import matcher from './';

expect.extend(matcher);

describe('.toBeAround', () => {
  'returns true when given number is equal to the rounded expected number';
  test('passes when when given number is equal to the rounded expected number', () => {
    expect(0.25001).toBeAround(0.25, 2);
  });

  test('fails when given number is not equal to the rounded expected number', () => {
    expect(() => expect(0.26).toBeAround(0.25, 2)).toThrowErrorMatchingSnapshot();
  });
});

describe('.not.toBeAround', () => {
  test('when given number is not equal to the rounded expected number', () => {
    expect(0.26).not.toBeAround(0.25, 2);
  });

  test('fails when given number is equal to the rounded expected number', () => {
    expect(() => expect(0.25).not.toBeAround(0.25, 2)).toThrowErrorMatchingSnapshot();
  });
});
