export default expected => {
  const re1 = RegExp(/^#\b[a-f0-9]{6}\b/gi);
  const re2 = RegExp(/^#\b[a-f0-9]{3}\b/gi);
  return re1.test(expected) || re2.test(expected);
};
