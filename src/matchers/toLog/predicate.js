import { equals } from 'expect/build/jasmine_utils';

export default (fn, expected) => {
  const log = console.log; // eslint-disable-line no-console
  const actual = [];
  console.log = (...args) => actual.push(...args); // eslint-disable-line no-console
  try {
    fn();
  } finally {
    console.log = log; // eslint-disable-line no-console
  }
  if (actual.length < 1) {
    return { pass: false };
  }
  const pass = actual.some(message => equals(message, expected));
  return { actual, pass };
};
