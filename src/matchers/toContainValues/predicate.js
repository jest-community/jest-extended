import { equals } from 'expect/build/jasmine_utils';

export default (object, values) => {
  const objectValues = Object.keys(object).map(k => object[k]);

  return values.every(value => {
    const result = objectValues.find(v => equals(v, value));
    return result !== undefined || value === undefined;
  });
};
