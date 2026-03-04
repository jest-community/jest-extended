export const contains = (equals: any, list: any, value: any) => {
  return list.findIndex((item: any) => equals(item, value)) > -1;
};

export const determinePropertyMessage = (actual: any, property: any, message = 'Not Accessible') => {
  return actual != null && Object.prototype.hasOwnProperty.call(actual, property) ? actual[property] : message;
};

export const isJestMockOrSpy: any = (value: any) => {
  return !!(value && value._isMockFunction === true && typeof value.mock === 'object');
};

export const containsEntry = (equals: any, obj: any, [key, value]: [any, any]) =>
  obj != null && Object.prototype.hasOwnProperty.call(obj, key) && equals(obj[key], value);
