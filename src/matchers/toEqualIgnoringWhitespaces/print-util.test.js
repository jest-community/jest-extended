import { tokenize, printExpected } from './print-util';

describe('testing print-util module', () => {
  it('should tokenize given string', () => {
    const tokens = tokenize('This function \n creates tokens \t keeping whitespaces intact.');

    expect(tokens).toEqual([
      {
        isSpace: false,
        value: 'This',
      },
      {
        isSpace: true,
        value: ' ',
      },
      {
        isSpace: false,
        value: 'function',
      },
      {
        isSpace: true,
        value: ' \n ',
      },
      {
        isSpace: false,
        value: 'creates',
      },
      {
        isSpace: true,
        value: ' ',
      },
      {
        isSpace: false,
        value: 'tokens',
      },
      {
        isSpace: true,
        value: ' \t ',
      },
      {
        isSpace: false,
        value: 'keeping',
      },
      {
        isSpace: true,
        value: ' ',
      },
      {
        isSpace: false,
        value: 'whitespaces',
      },
      {
        isSpace: true,
        value: ' ',
      },
      {
        isSpace: false,
        value: 'intact.',
      },
    ]);
  });
});
