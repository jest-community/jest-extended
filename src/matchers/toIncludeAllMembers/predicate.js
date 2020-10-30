import { asArray, contains } from '../../utils';

export default (iterable, members) => {
  const first = asArray(iterable);
  const second = first && asArray(members);

  return first != null && second != null && second.every(val => contains(first, val));
};
