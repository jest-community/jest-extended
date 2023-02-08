import { longitude } from 'check-geographic-coordinates';

export function toBeGeoLongitude(actual) {
  const { matcherHint, printReceived } = this.utils;

  const passMessage =
    matcherHint('.not.toBeGeoLongitude', 'received', '') +
    '\n\n' +
    'Expected value to not be of type longitude, received:\n' +
    `  ${printReceived(actual)}`;

  const failMessage =
    matcherHint('.toBeGeoLongitude', 'received', '') +
    '\n\n' +
    'Expected value to be of type longitude, received:\n' +
    `  ${printReceived(actual)}`;

  const pass = longitude(actual) ? true : false;

  return { pass, message: () => (pass ? passMessage : failMessage) };
}
