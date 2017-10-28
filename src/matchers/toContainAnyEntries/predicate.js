export default (object, entries) => {
  return entries.some(entry => {
    if (entry[0] in object) {
      return object[entry[0]] == entry[1];
    } else {
      return false;
    }
  });
};
