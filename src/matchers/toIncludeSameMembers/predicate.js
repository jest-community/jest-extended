import { asArray, equals } from '../../utils';

const filterMatches = (first, second) =>
  second.reduce((remaining, secondValue) => {
    if (remaining === null) return remaining;

    const index = remaining.findIndex(firstValue => equals(secondValue, firstValue));

    if (index === -1) {
      return null;
    }

    return remaining.slice(0, index).concat(remaining.slice(index + 1));
  }, first);

export default (iterable, members) => {
  const first = asArray(iterable);
  const second = first && asArray(members);

  if (first == null || second == null || first.length !== second.length) return false;

  const remaining = filterMatches(first, second);

  return !!remaining && remaining.length === 0;
};
