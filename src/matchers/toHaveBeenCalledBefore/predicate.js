const smallest = ns => ns.reduce((acc, n) => (acc < n ? acc : n));

export default (firstTimestamps, secondTimestamps) => {
  if (firstTimestamps.length === 0) return false;
  if (secondTimestamps.length === 0) return true;

  const firstSmallest = smallest(firstTimestamps);
  const secondSmallest = smallest(secondTimestamps);

  return firstSmallest < secondSmallest;
};
