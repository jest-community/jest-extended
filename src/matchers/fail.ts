/**
 * Note: Currently unimplemented
 * Failing assertion
 *
 * @param {String} message
 */
export function fail(_: unknown, message: string) {
  return {
    pass: false,
    message: () => (message ? message : 'fails by .fail() assertion'),
  };
}
