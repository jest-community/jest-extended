import predicate from './predicate';

const data = 'hello world';

describe('.toInclude', () => {
  test('passes when string contains substring', () => {
    expect(predicate(data, 'ell')).toBe(true);
  });

  test('fails when string does not contain substring', () => {
    expect(predicate(data, 'bob')).toBe(false);
  });
});
