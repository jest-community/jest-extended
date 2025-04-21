export function fail(_, message) {
  this.dontThrow();
  return {
    pass: false,
    message: () => (message ? message : 'fails by .fail() assertion'),
  };
}
