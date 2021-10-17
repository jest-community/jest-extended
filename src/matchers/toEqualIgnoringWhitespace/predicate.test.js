import predicate from './predicate';

describe('toEqualIgnoringWhitespace predicate', () => {
  it('should generate correct pass and diff for inputs without white-space', () => {
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

  it('should generate correct pass and diff for inputs with white-space', () => {
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
