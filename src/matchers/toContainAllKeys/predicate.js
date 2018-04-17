import { contains } from '../../utils';

export default (object, keys) => {
  const objectKeys = Object.keys(object);

  return objectKeys.length === keys.length && keys.every(key => contains(objectKeys, key));
};
