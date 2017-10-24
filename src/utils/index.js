import { equals } from 'expect/build/jasmine_utils';

export const contains = (list, value) => {
  return list.findIndex(item => equals(item, value)) > -1;
};
