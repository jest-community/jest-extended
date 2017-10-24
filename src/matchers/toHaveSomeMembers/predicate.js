import { equals } from 'expect/build/jasmine_utils';

export default (actual, ary) => {
  const result =
    Array.isArray(actual) && Array.isArray(ary) && actual.some(elem => ary.some(aryElem => equals(elem, aryElem)));
  return result;
};
