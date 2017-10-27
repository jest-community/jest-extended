import matcher from './';

expect.extend(matcher);

describe('.toBeNegative', () => {
  it('passes when given negative number', () => {
    expect(-1).toBeNegative();
  });

  it('fails when given positive number', () => {
    expect(() => expect(1).toBeNegative()).toThrowErrorMatchingSnapshot();
  });

  it('fails when given Infinity', () => {
    expect(() => expect(Infinity).toBeNegative()).toThrowErrorMatchingSnapshot();
  });
});

describe('.not.toBeNegative', () => {
  it('passes when given positive number', () => {
    expect(1).not.toBeNegative();
  });

  it('passes when given Infinity', () => {
    expect(Infinity).not.toBeNegative();
  });

  it('passes when given NaN', () => {
    expect(NaN).not.toBeNegative();
  });

  it('fails when given negative number', () => {
    expect(() => expect(-1).not.toBeNegative()).toThrowErrorMatchingSnapshot();
  });
});
