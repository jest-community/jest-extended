export default expected => {
  return typeof expected === 'string' || expected instanceof String;
};
