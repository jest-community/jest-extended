export const contains = (equals, list, value) => {
  return list.findIndex(item => equals(item, value)) > -1;
};

export const determinePropertyMessage = (actual, property, message = "Not Accessible") => {
  return actual && Object.hasOwnProperty.call(actual, property) ? actual[property] : message;
};

export const isVitestMockOrSpy = value => {
  return !!(value && value._isMockFunction === true && typeof value.mock === "object");
};

export const containsEntry = (equals, obj, [key, value]) =>
  obj.hasOwnProperty && Object.prototype.hasOwnProperty.call(obj, key) && equals(obj[key], value);
