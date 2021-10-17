import predicate from './predicate';

describe('toEqualIgnoringWhitespaces predicate', () => {
  it('should return true for pass when diff does not add anything than spaces', () => {
    const { pass, diff } = predicate('inputs A', 'inputs B');

    expect(pass).toEqual(false);
    expect(diff).toEqual([
      {
        0: 0,
        1: 'inputs ',
      },
      {
        0: -1,
        1: 'B',
      },
      {
        0: 1,
        1: 'A',
      },
    ]);
  });

  it('should return false for pass when diff add or remove tokens', () => {
    const { pass, diff } = predicate('    inputs A', 'input B    ');

    expect(pass).toEqual(false);
    expect(diff).toEqual([
      {
        0: 0,
        1: '    ',
      },
      {
        0: 0,
        1: 'input',
      },
      {
        0: 1,
        1: 's',
      },
      {
        0: 0,
        1: ' ',
      },
      {
        0: -1,
        1: 'B    ',
      },
      {
        0: 1,
        1: 'A',
      },
    ]);
  });
});
