import { contains } from '../../utils';

export default (object, values) => {
  const objectValues = Object.keys(object).map(k => object[k]);
  return objectValues.every(objectValue => contains(values, objectValue));
};
