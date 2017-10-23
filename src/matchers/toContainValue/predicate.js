import { equals } from 'expect/build/jasmine_utils';

export default (actual, value) => {
  const result = Object.keys(actual)
    .map(k => actual[k])
    .find(v => equals(v, value));

  return result !== undefined || value === undefined;
};
