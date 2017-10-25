import matcher from './';

expect.extend(matcher);

describe('.toBeFrozen', () => {
  it('passes when given frozen object', () => {
    expect(Object.freeze({})).toBeFrozen();
  });

  it('fails when given a non-frozen object', () => {
    expect(() => expect({}).toBeFrozen()).toThrowErrorMatchingSnapshot();
  });
});
