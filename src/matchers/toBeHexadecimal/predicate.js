export default expected => {
  const longRegex = RegExp(/^#\b[a-f0-9]{6}\b/gi);
  const shortRegex = RegExp(/^#\b[a-f0-9]{3}\b/gi);
  return longRegex.test(expected) || shortRegex.test(expected);
};
