import { contains } from '../../utils';

export default (equals, object, values) => {
  const objectValues = Object.keys(object).map(k => object[k]);
  return values.every(value => contains(equals, objectValues, value));
};
