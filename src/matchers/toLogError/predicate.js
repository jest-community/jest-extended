import { equals } from 'expect/build/jasmine_utils';

export default (fn, expected) => {
  const error = console.error; // eslint-disable-line no-console
  const actual = [];
  console.error = (...args) => actual.push(...args); // eslint-disable-line no-console
  try {
    fn();
  } finally {
    console.error = error; // eslint-disable-line no-console
  }
  if (actual.length < 1) {
    return { pass: false };
  }
  const pass = actual.some(message => equals(message, expected));
  return { actual, pass };
};
