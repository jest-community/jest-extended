export default received => {
  return typeof received === 'boolean' || received instanceof Boolean;
};
