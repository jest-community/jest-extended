import { contains } from '../../utils';

export default (object, keys) => {
  const objectKeys = Object.keys(object);

  console.log(objectKeys.every(key => keys.indexOf(key) >= 0));

  return objectKeys.every(objKey => contains(keys, objKey));
};
