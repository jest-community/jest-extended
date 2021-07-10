const filterMatches = (equals, first, second) =>
  second.reduce((remaining, secondValue) => {
    if (remaining === null) return remaining;

    const index = remaining.findIndex(firstValue => equals(secondValue, firstValue));

    if (index === -1) {
      return null;
    }

    return remaining.slice(0, index).concat(remaining.slice(index + 1));
  }, first);

export default (equals, first, second) => {
  if (!Array.isArray(first) || !Array.isArray(second) || first.length !== second.length) {
    return false;
  }

  const remaining = filterMatches(equals, first, second);

  return !!remaining && remaining.length === 0;
};
