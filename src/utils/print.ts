import { DIFF_DELETE, DIFF_EQUAL, DIFF_INSERT } from 'jest-diff';

interface Token {
  value: string;
  isWhitespace: boolean;
}

export const tokenize = (str: string): Token[] => {
  const isWhitespace = (char: string): boolean => /\s/.test(char);
  const tokens: Token[] = [];
  let idx = 0;
  let token: Token | undefined;

  while (idx < str.length) {
    const char = str.charAt(idx);
    const isCurrentCharWhitespace = isWhitespace(char);

    if (token) {
      if (token.isWhitespace === isCurrentCharWhitespace) {
        token.value += char;
      } else {
        tokens.push(token);
        token = undefined;
        continue;
      }
    } else {
      token = {
        value: char,
        isWhitespace: isCurrentCharWhitespace,
      };
    }

    idx += 1;
  }

  /* push last token */
  if (token) {
    tokens.push(token);
  }

  return tokens;
};

const colorTokens = (str: string, color: (value: string) => string): string => {
  const tokens = tokenize(str);
  return tokens.reduce((acc, { value, isWhitespace }) => acc + (isWhitespace ? value : color(value)), '');
};

export const printExpected = (utils: any, diff: [number, string][]): string =>
  diff.reduce((acc: string, diffObject: [number, string]) => {
    const operation = diffObject[0];
    const value = diffObject[1];

    if (operation === DIFF_EQUAL) return acc + colorTokens(value, utils.EXPECTED_COLOR);
    if (operation === DIFF_DELETE)
      return acc + colorTokens(value, (str: string) => utils.INVERTED_COLOR(utils.EXPECTED_COLOR(str)));
    return acc;
  }, '');

export const printReceived = (utils: any, diff: [number, string][]): string =>
  diff.reduce((acc: string, diffObject: [number, string]) => {
    const operation = diffObject[0];
    const value = diffObject[1];

    if (operation === DIFF_EQUAL) return acc + colorTokens(value, utils.RECEIVED_COLOR);
    if (operation === DIFF_INSERT)
      return acc + colorTokens(value, (str: string) => utils.INVERTED_COLOR(utils.RECEIVED_COLOR(str)));
    return acc;
  }, '');
