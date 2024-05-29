export const contains = (equals, list, value) => {
  return list.findIndex(item => equals(item, value)) > -1;
};

export const determinePropertyMessage = (actual, property, message = 'Not Accessible') => {
  return actual && Object.hasOwnProperty.call(actual, property) ? actual[property] : message;
};

export const isJestMockOrSpy = value => {
  return !!(value && value._isMockFunction === true && typeof value.mock === 'object');
};

export const containsEntry = (equals, obj, [key, value]) =>
  obj.hasOwnProperty && Object.prototype.hasOwnProperty.call(obj, key) && equals(obj[key], value);

export const partiallyContains = (equals, actual, expected) =>
  Array.isArray(actual) &&
  Array.isArray(expected) &&
  expected.every(partial =>
    actual.some(value => {
      if (typeof partial !== 'object' || partial === null) {
        return equals(value, partial);
      }
      if (Array.isArray(partial)) {
        return partiallyContains(equals, value, partial);
      }
      return Object.entries(partial).every(entry => containsEntry(equals, value, entry));
    }),
  );

export const matchesObject = (equals, actual, expected) => {
  if (equals(actual, expected)) {
    return true;
  }
  if (Array.isArray(actual) || Array.isArray(expected)) {
    return partiallyContains(equals, actual, expected);
  }
  if (typeof actual === 'object' && typeof expected === 'object' && expected !== null) {
    return Object.getOwnPropertyNames(expected).every(name => {
      if (equals(actual[name], expected[name])) {
        return true;
      }
      if (Array.isArray(actual[name]) || Array.isArray(expected[name])) {
        return partiallyContains(equals, actual[name], expected[name]);
      }
      if (typeof actual[name] === 'object' && typeof expected[name] === 'object' && expected[name] !== null) {
        return matchesObject(equals, actual[name], expected[name]);
      }
      return false;
    });
  }
  return false;
};

export const tryParseJSON = input => {
  try {
    return JSON.parse(input);
  } catch {
    return undefined;
  }
};
