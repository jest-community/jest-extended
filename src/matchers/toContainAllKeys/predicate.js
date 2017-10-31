import { contains } from '../../utils';

export default (object, keys) => {
  const objectKeys = Object.keys(object);
  return objectKeys.every(objKey => contains(keys, objKey));
};
