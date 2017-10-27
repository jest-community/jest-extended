import matcher from './';

expect.extend(matcher);

describe('.toBeFinite', () => {
  it('passes when given a positive finite number', () => {
    expect(1).toBeFinite();
  });

  it('passes when given a negative finite number', () => {
    expect(-1).toBeFinite();
  });

  it('passes when given the largest finite number', () => {
    expect(Number.MAX_SAFE_INTEGER).toBeFinite();
  });

  it('passes when given the largetst negative finite number', () => {
    expect(Number.MIN_SAFE_INTEGER).toBeFinite();
  });

  it('passes when given 0', () => {
    expect(0).toBeFinite();
  });

  it('fails when not given NaN', () => {
    expect(() => expect(NaN).toBeFinite()).toThrowErrorMatchingSnapshot();
  });

  it('fails when not given Infinity', () => {
    expect(() => expect(Infinity).toBeFinite()).toThrowErrorMatchingSnapshot();
  });
});

describe('.not.toBeFinite', () => {
  it('fails when given a finite number', () => {
    expect(() => expect(1).not.toBeFinite()).toThrowErrorMatchingSnapshot();
  });

  it('passes when given NaN', () => {
    expect(NaN).not.toBeFinite();
  });

  it('passes when given Infinity', () => {
    expect(Infinity).not.toBeFinite();
  });
});
