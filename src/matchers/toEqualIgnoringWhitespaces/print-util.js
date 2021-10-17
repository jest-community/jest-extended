import { DIFF_EQUAL, DIFF_INSERT } from 'jest-diff';
import { EXPECTED_COLOR, INVERTED_COLOR, RECEIVED_COLOR } from 'jest-matcher-utils';

const tokenize = (str, color) => {
  const isSpace = char => /\s/.test(char);
  const tokens = [];
  let idx = 0;
  let len = str.length;
  let token;

  while (idx < len) {
    const char = str.charAt(idx);
    if (token) {
      if (token.isSpace) {
        if (isSpace(char)) token.value += char;
        else {
          tokens.push(token);
          token = null;
          continue;
        }
      } else {
        if (isSpace(char)) {
          tokens.push(token);
          token = null;
          continue;
        } else {
          token.value += char;
        }
      }
    } else {
      token = {
        value: char,
        isSpace: isSpace(char),
      };
    }

    idx += 1;
  }

  if (token) {
    tokens.push(token);
  }

  return tokens.reduce((acc, { value, isSpace }) => {
    if (isSpace) return acc + value;
    return acc + color(value);
  }, '');
};

export const printExpected = diff => {
  return diff.reduce((acc, diffObject) => {
    const status = diffObject[0];
    const value = diffObject[1];

    if (status === DIFF_EQUAL) return acc + tokenize(value, EXPECTED_COLOR);
    if (status === DIFF_INSERT) return acc;
    else return acc + tokenize(value, val => INVERTED_COLOR(EXPECTED_COLOR(val)));
  }, '');
};

export const printReceived = diff => {
  return diff.reduce((acc, diffObject) => {
    const status = diffObject[0];
    const value = diffObject[1];

    if (status === DIFF_EQUAL) return acc + tokenize(value, RECEIVED_COLOR);
    if (status === DIFF_INSERT) return acc + tokenize(value, val => INVERTED_COLOR(RECEIVED_COLOR(val)));
    else return acc;
  }, '');
};
