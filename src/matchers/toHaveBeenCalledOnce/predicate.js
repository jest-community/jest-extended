export default calls => {
  if (calls.length === 0) return false;
  if (calls.length > 1) return false;

  return calls.length === 1;
};
