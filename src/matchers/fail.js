export function fail(_, message) {
  return {
    pass: false,
    message: () => {
      if (message) return message;
      else return 'fails by .fail() assertion';
    },
  };
}
