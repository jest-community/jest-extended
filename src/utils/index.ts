export const contains = (equals: (a: unknown, b: unknown) => boolean, list: any, value: any) => {
  return list.findIndex((item: any) => equals(item, value)) > -1;
};

export const determinePropertyMessage = (actual: any, property: any, message = 'Not Accessible') => {
  return actual != null && Object.hasOwn(actual, property) ? actual[property] : message;
};

export const isJestMockOrSpy: any = (value: any) => {
  return !!(value && value._isMockFunction === true && typeof value.mock === 'object');
};

export const containsEntry = (
  equals: (a: unknown, b: unknown) => boolean,
  obj: any,
  [key, value]: readonly [any, any],
) => obj != null && Object.hasOwn(obj, key) && equals(obj[key], value);
