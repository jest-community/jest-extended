import { DIFF_DELETE, DIFF_EQUAL, DIFF_INSERT } from 'jest-diff';

export const tokenize = (str: any) => {
  const isWhitespace = (char: any) => /\s/.test(char);
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

const colorTokens = (str: any, color: any) => {
  const tokens = tokenize(str);
  // @ts-expect-error TODO: fix
  return tokens.reduce((acc, { value, isWhitespace }) => acc + (isWhitespace ? value : color(value)), '');
};

export const printExpected = (utils: any, diff: any) =>
  diff.reduce((acc: any, diffObject: any) => {
    const operation = diffObject[0];
    const value = diffObject[1];

    if (operation === DIFF_EQUAL) return acc + colorTokens(value, utils.EXPECTED_COLOR);
    if (operation === DIFF_DELETE)
      return acc + colorTokens(value, (str: any) => utils.INVERTED_COLOR(utils.EXPECTED_COLOR(str)));
    return acc;
  }, '');

export const printReceived = (utils: any, diff: any) =>
  diff.reduce((acc: any, diffObject: any) => {
    const operation = diffObject[0];
    const value = diffObject[1];

    if (operation === DIFF_EQUAL) return acc + colorTokens(value, utils.RECEIVED_COLOR);
    if (operation === DIFF_INSERT)
      return acc + colorTokens(value, (str: any) => utils.INVERTED_COLOR(utils.RECEIVED_COLOR(str)));
    return acc;
  }, '');
