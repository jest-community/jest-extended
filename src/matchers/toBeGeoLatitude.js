import { latitude } from 'check-geographic-coordinates';

export function toBeGeoLatitude(actual) {
  const { matcherHint, printReceived } = this.utils;

  const passMessage =
    matcherHint('.not.toBeGeoLatitude', 'received', '') +
    '\n\n' +
    'Expected value to not be of type latitude, received:\n' +
    `  ${printReceived(actual)}`;

  const failMessage =
    matcherHint('.toBeGeoLatitude', 'received', '') +
    '\n\n' +
    'Expected value to be of type latitude, received:\n' +
    `  ${printReceived(actual)}`;

  const pass = latitude(actual) ? true : false;

  return { pass, message: () => (pass ? passMessage : failMessage) };
}
