import { contains } from '../../utils';

/**
 * @params {Object} actual
 * @params {string[]|number[]} value
 */
export default (object, values) => {
  const objectValues = Object.keys(object).map(k => object[k]);
  return values.some(value => contains(objectValues, value));
};
