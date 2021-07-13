import predicate from './predicate';

const fn = () => console.info('console-info'); // eslint-disable-line

describe('Predicate > .toLogInfo', () => {
  test('returns an object with pass status and the actual output', () => {
    const expected = 'console-info';
    const { pass, actual } = predicate(fn, expected);
    expect(pass).toEqual(true);
    expect(actual).toEqual(['console-info']);
  });
  it('returns an object with fail status and the actual output', () => {
    const expected = 'something';
    const { pass, actual } = predicate(fn, expected);
    expect(pass).toEqual(false);
    expect(actual).toEqual(['console-info']);
  });
});
