import predicate from './predicate';

const fn = () => console.warn('console-warn'); // eslint-disable-line

describe('Predicate > .toLogWarning', () => {
  test('returns an object with pass status and the actual output', () => {
    const expected = 'console-warn';
    const { pass, actual } = predicate(fn, expected);
    expect(pass).toEqual(true);
    expect(actual).toEqual(['console-warn']);
  });
  it('returns an object with fail status and the actual output', () => {
    const expected = 'something';
    const { pass, actual } = predicate(fn, expected);
    expect(pass).toEqual(false);
    expect(actual).toEqual(['console-warn']);
  });
});
