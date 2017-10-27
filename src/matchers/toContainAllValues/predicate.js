import { contains } from '../../utils';

export default (object, values) => {
  const objectValues = Object.keys(object).map(k => object[k]);
  return objectValues.length === values.length && objectValues.every(objectValue => contains(values, objectValue));
};
