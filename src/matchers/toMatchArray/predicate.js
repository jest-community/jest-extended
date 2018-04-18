import { equals } from '../../utils';

export default (first, second) => {
  // check that the arguments are both arrays
  if (!Array.isArray(first) || !Array.isArray(second)) {
    return false;
  }

  // make sure the array lengths are equal
  if (first.length !== second.length) {
    return false;
  }

  // make copies of the inputs to retain their values after the test. for very
  // large arrays this could potentially become expensive, but it's required for
  // the currently implemented method below.
  first = Array.from(first);
  second = Array.from(second);

  // while there are more elements of `first`, get the first element and try to
  // find an equal element in `second`. if not found, fail, otherwise remove the
  // elements from both `first` and `second`.
  while (first.length) {
    const head = first[0];

    const idx = second.findIndex(e => equals(head, e));
    if (idx === -1) {
      return false;
    }

    first.splice(0, 1);
    second.splice(idx, 1);
  }

  return true;
};
