import { equals } from 'expect/build/jasmineUtils';

export const asArray = value => {
  if (Array.isArray(value)) return value;
  if (value != null && typeof value[Symbol.iterator] === 'function') return [...value];

  return undefined;
};

export const contains = (list, value) => {
  return list.findIndex(item => equals(item, value)) > -1;
};

export const determinePropertyMessage = (actual, property, message = 'Not Accessible') => {
  return actual && Object.hasOwnProperty.call(actual, property) ? actual[property] : message;
};

export { equals };
