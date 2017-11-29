export default (string, substring, times) => {
  return string.split(substring).length - 1 === times;
};
