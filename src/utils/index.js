export const contains = (equals, list, value) => {
  return list.findIndex(item => equals(item, value)) > -1;
};

export const determinePropertyMessage = (actual, property, message = 'Not Accessible') => {
  return actual && Object.hasOwnProperty.call(actual, property) ? actual[property] : message;
};

export const isJestMockOrSpy = value => {
  return !!(value && value._isMockFunction === true && typeof value.mock === 'object');
};
