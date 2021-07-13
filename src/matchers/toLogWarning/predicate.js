import { equals } from 'expect/build/jasmine_utils';

export default (fn, expected) => {
  const warn = console.warn; // eslint-disable-line no-console
  const actual = [];
  console.warn = (...args) => actual.push(...args); // eslint-disable-line no-console
  try {
    fn();
  } finally {
    console.warn = warn; // eslint-disable-line no-console
  }
  if (actual.length < 1) {
    return { pass: false };
  }
  const pass = actual.some(message => equals(message, expected));
  return { actual, pass };
};
