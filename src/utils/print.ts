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
  const result: string[] = [];

  for (let i = 0; i < tokens.length; i++) {
    const { value, isWhitespace } = tokens[i];
    result.push(isWhitespace ? value : color(value));
  }

  return result.join('');
};

export const printExpected = (utils: any, diff: [number, string][]): string => {
  const result: string[] = [];

  for (let i = 0; i < diff.length; i++) {
    const diffObject = diff[i];
    const operation = diffObject[0];
    const value = diffObject[1];

    if (operation === DIFF_EQUAL) {
      result.push(colorTokens(value, utils.EXPECTED_COLOR));
    } else if (operation === DIFF_DELETE) {
      result.push(colorTokens(value, (str: string) => utils.INVERTED_COLOR(utils.EXPECTED_COLOR(str))));
    }
  }

  return result.join('');
};

export const printReceived = (utils: any, diff: [number, string][]): string => {
  const result: string[] = [];

  for (let i = 0; i < diff.length; i++) {
    const diffObject = diff[i];
    const operation = diffObject[0];
    const value = diffObject[1];

    if (operation === DIFF_EQUAL) {
      result.push(colorTokens(value, utils.RECEIVED_COLOR));
    } else if (operation === DIFF_INSERT) {
      result.push(colorTokens(value, (str: string) => utils.INVERTED_COLOR(utils.RECEIVED_COLOR(str))));
    }
  }

  return result.join('');
};
