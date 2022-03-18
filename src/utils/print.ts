import { Diff, DIFF_DELETE, DIFF_EQUAL, DIFF_INSERT } from 'jest-diff';

type Token = {
  value: string;
  isWhitespace: boolean;
};

export const tokenize = (str: string): (Token | undefined)[] => {
  const isWhitespace = (char: string) => /\s/.test(char);
  const tokens = [];
  let idx = 0;
  let token;

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
  tokens.push(token);

  return tokens;
};

const colorTokens = (str: string, color: (s: string) => string) => {
  const tokens = tokenize(str);
  return tokens
    .filter((token): token is Token => Boolean(token))
    .reduce((acc, { isWhitespace, value }) => acc + (isWhitespace ? value : color(value)), '');
};

export const printExpected = (utils: jest.MatcherContext['utils'], diff: Diff[]) =>
  diff.reduce((acc, diffObject) => {
    const operation = diffObject[0];
    const value = diffObject[1];

    if (operation === DIFF_EQUAL) return acc + colorTokens(value, utils.EXPECTED_COLOR);
    if (operation === DIFF_DELETE)
      return acc + colorTokens(value, str => utils.INVERTED_COLOR(utils.EXPECTED_COLOR(str)));
    return acc;
  }, '');

export const printReceived = (utils: jest.MatcherContext['utils'], diff: Diff[]) =>
  diff.reduce((acc, diffObject) => {
    const operation = diffObject[0];
    const value = diffObject[1];

    if (operation === DIFF_EQUAL) return acc + colorTokens(value, utils.RECEIVED_COLOR);
    if (operation === DIFF_INSERT)
      return acc + colorTokens(value, str => utils.INVERTED_COLOR(utils.RECEIVED_COLOR(str)));
    return acc;
  }, '');
