export function fail(_, message) {
  return {
    pass: false,
    message: () => (message ? message : "fails by .fail() assertion"),
  };
}
