import predicate from './predicate';

const data = 'hello world';

describe('.toInclude', () => {
  it('passes when string contains substring', () => {
    expect(predicate(data, 'ell')).toBe(true);
  });

  it('fails when string does not contain substring', () => {
    expect(predicate(data, 'bob')).toBe(false);
  });
});
