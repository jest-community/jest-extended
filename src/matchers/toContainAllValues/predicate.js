import { contains } from '../../utils';

export default (equals, object, values) => {
  const objectValues = Object.keys(object).map(k => object[k]);
  return (
    objectValues.length === values.length && objectValues.every(objectValue => contains(equals, values, objectValue))
  );
};
