import matcher from './';

expect.extend(matcher);

const value = 2;
const offset = 1;

describe('.toBeNear', () => {
  test('passes when the given number is between `value - offset` and `value + offset` inclusive', () => {
    expect(1).toBeNear(value, offset);
  });

  test('fails when the given number is not between `value - offset` and `value + offset` inclusive', () => {
    expect(() => expect(0).toBeNear(value, offset)).toThrowErrorMatchingSnapshot();
  });
});

describe('not.toBeNear', () => {
  test('passes when the given number is not between `value - offset` and `value + offset` inclusive', () => {
    expect(4).not.toBeNear(value, offset);
  });

  test('fails when the given number is between `value - offset` and `value + offset` inclusive', () => {
    expect(() => expect(3).not.toBeNear(value, offset)).toThrowErrorMatchingSnapshot();
  });
});
