export default (array, set) => {
  return Array.isArray(array) && Array.isArray(set) && array.every(val => set.includes(val));
};
