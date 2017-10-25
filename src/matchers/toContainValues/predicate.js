import { contains } from '../../utils';

export default (object, values) => {
  const objectValues = Object.keys(object).map(k => object[k]);
  return values.every(value => contains(objectValues, value));
};
