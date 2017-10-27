import { contains } from '../../utils';

export default (actual, value) => {
  const objectValues = Object.keys(actual).map(k => actual[k]);
  return contains(objectValues, value);
};
