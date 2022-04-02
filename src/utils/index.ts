type Equals = <A, B>(a: A, b: B) => boolean;

export const contains = <A, B>(equals: Equals, list: A[], value: B): boolean => {
  return list.findIndex(item => equals(item, value)) > -1;
};

export const determinePropertyMessage = <A>(actual: A, property: PropertyKey, message = 'Not Accessible') => {
  return actual && Object.hasOwnProperty.call(actual, property) ? actual[property as keyof typeof actual] : message;
};

export const isJestMockOrSpy = (value: jest.Mock) => {
  return !!(
    value &&
    (value as unknown as { _isMockFunction: boolean })._isMockFunction === true &&
    typeof value.mock === 'object'
  );
};

export const containsEntry = <A extends Record<string, unknown>>(
  equals: Equals,
  obj: A,
  [key, value]: [keyof A, A[keyof A]],
): boolean => obj.hasOwnProperty && Object.prototype.hasOwnProperty.call(obj, key) && equals(obj[key], value);
