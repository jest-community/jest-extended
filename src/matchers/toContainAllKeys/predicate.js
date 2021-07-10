import { contains } from '../../utils';

export default (equals, object, keys) => {
  const objectKeys = Object.keys(object);

  return objectKeys.length === keys.length && keys.every(key => contains(equals, objectKeys, key));
};
