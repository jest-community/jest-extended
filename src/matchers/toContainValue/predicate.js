import { equals } from 'expect/build/jasmine_utils';

export default (actual, value) =>
  !!Object.keys(actual)
    .map(k => actual[k])
    .find(v => equals(v, value));
