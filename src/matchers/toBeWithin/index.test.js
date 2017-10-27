import matcher from './';

expect.extend(matcher);

describe('.toBeWithin', () => {
  it('passes when given number is within the given bounds of start (inclusive) and end (exclusive)', () => {
    expect(1).toBeWithin(1, 3);
  });

  it('fails when given number is not within the given bounds of start (inclusive) and end (exclusive)', () => {
    expect(() => expect(3).toBeWithin(1, 3)).toThrowErrorMatchingSnapshot();
  });
});

describe('.not.toBeWithin', () => {
  it('passes when given number is not within the given bounds of start (inclusive) and end (exclusive)', () => {
    expect(3).not.toBeWithin(1, 3);
  });

  it('fails when given number is within the given bounds of start (inclusive) and end (exclusive)', () => {
    expect(() => expect(1).not.toBeWithin(1, 3)).toThrowErrorMatchingSnapshot();
  });
});
