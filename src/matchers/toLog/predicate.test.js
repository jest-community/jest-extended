import predicate from './predicate';

const fn = () => console.log('console-log'); // eslint-disable-line

describe('Predicate > .toLog', () => {
  test('returns an object with pass status and the actual output', () => {
    const expected = 'console-log';
    const consoleMethod = 'log';
    const { pass, actual } = predicate(fn, expected, consoleMethod);
    expect(pass).toEqual(true);
    expect(actual).toEqual([['console-log']]);
  });
  it('returns an object with fail status and the actual output', () => {
    const expected = 'something';
    const consoleMethod = 'log';
    const { pass, actual } = predicate(fn, expected, consoleMethod);
    expect(pass).toEqual(false);
    expect(actual).toEqual([['console-log']]);
  });
});
