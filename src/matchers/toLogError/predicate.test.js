import predicate from './predicate';

const fn = () => console.error('console-error'); // eslint-disable-line

describe('Predicate > .toLogError', () => {
  test('returns an object with pass status and the actual output', () => {
    const expected = 'console-error';
    const { pass, actual } = predicate(fn, expected);
    expect(pass).toEqual(true);
    expect(actual).toEqual(['console-error']);
  });
  it('returns an object with fail status and the actual output', () => {
    const expected = 'something';
    const { pass, actual } = predicate(fn, expected);
    expect(pass).toEqual(false);
    expect(actual).toEqual(['console-error']);
  });
});
