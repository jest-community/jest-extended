import { contains } from '../../utils';

export default (equals, actual, value) => {
  const objectValues = Object.keys(actual).map(k => actual[k]);
  return contains(equals, objectValues, value);
};
