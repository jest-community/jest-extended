export function pass(_, message) {
  return {
    pass: true,
    message: () => {
      if (message) return message;
      else return 'passes by .pass() assertion';
    },
  };
}
