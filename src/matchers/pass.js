export function pass(_, message) {
  return {
    pass: true,
    message: () => (message ? message : "passes by .pass() assertion"),
  };
}
