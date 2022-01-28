import { contains } from '../../utils';

/**
 * @params {Object} object
 * @params {Array} values
 */
export default (equals, object, values) => {
  const objectValues = Object.keys(object).map(k => object[k]);
  return values.some(value => contains(equals, objectValues, value));
};
