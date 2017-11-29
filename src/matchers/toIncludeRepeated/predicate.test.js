import predicate from './predicate';

const string = 'hello world';
const multi = `
  hello world
  hello world
`;

describe('Predicate > .toIncludeRepeated', () => {
  test('passes when string contains substring', () => {
    expect(predicate(string, 'l', 3)).toBe(true);
  });

  test('passes when given a multiline string includes given substring hello 2 times', () => {
    expect(predicate(multi, 'hello', 2)).toBe(true);
  });

  test('fails when string does not contain substring', () => {
    expect(predicate(string, 'bob', 1)).toBe(false);
  });

  test('fails when string does not contain substring for the given occurrences', () => {
    expect(predicate(string, 'l', 10)).toBe(false);
  });
});
