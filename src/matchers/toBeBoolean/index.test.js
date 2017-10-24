import matcher from './';

expect.extend(matcher);

describe('.toBeTrue', () => {
  it('passes when value is a boolen', () => {
    expect(false).toBeBoolean();
    expect(true).toBeBoolean();
    expect(1 === 1).toBeBoolean();
  });
});

describe('.not.toBeTrue', () => {
  it('pases when value is not a boolen', () => {
    expect(1).not.toBeBoolean();
  });
});
