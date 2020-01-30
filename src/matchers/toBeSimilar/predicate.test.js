describe('toBeSimilarWith predicate', () => {
  afterEach(() => {
    jest.resetModules();
  });

  it('should return true for pass when diff does not add anything than spaces', () => {
    jest.setMock('diff', {
      diffWords: () => [
        {
          value: ' ',
          added: true
        },
        {
          value: 'select * from table'
        },
        {
          value: ' \n\n ',
          added: true
        },
        {
          value: 'where condition = true'
        }
      ]
    });
    const { default: predicate } = require('./predicate');
    const { pass, diff } = predicate('inputs A', 'input B');

    expect(pass).toEqual(true);
    expect(diff).toEqual([
      {
        value: ' '
      },
      {
        value: 'select * from table'
      },
      {
        value: ' \n\n '
      },
      {
        value: 'where condition = true'
      }
    ]);
  });

  it('should return false for pass when diff add or remove tokens', () => {
    jest.setMock('diff', {
      diffWords: () => [
        {
          value: ' ',
          added: true
        },
        {
          value: ' ',
          removed: true
        },
        {
          value: ' '
        },
        {
          value: 'token',
          removed: true
        },
        {
          value: 'newToken',
          added: true
        }
      ]
    });
    const { default: predicate } = require('./predicate');
    const { pass, diff } = predicate('inputs A', 'input B');

    expect(pass).toEqual(false);
    expect(diff).toEqual([
      {
        value: ' '
      },
      {
        value: ' '
      },
      {
        value: ' '
      },
      {
        value: 'token',
        removed: true
      },
      {
        value: 'newToken',
        added: true
      }
    ]);
  });
});
