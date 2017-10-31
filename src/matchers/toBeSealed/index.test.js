import matcher from './';
expect.extend(matcher);
describe('.toBeSealed', () => {
  it('passes when given sealed object', () => {
    expect(Object.seal({})).toBeSealed();
  });

  it('fails when given a non-sealed object', () => {
    expect(() => expect({}).toBeSealed()).toThrowErrorMatchingSnapshot();
  });
});
