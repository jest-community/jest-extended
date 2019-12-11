import { equals } from 'expect/build/jasmineUtils';

export const contains = (list, value) => {
  return list.findIndex(item => equals(item, value)) > -1;
};

export const determinePropertyMessage = (actual, property, message = 'Not Accessible') => {
  return actual && actual.hasOwnProperty(property) ? actual[property] : message;
};

export { equals };
