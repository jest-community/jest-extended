export function pass(_: unknown, message: string) {
  return {
    pass: true,
    message: () => (message ? message : 'passes by .pass() assertion'),
  };
}
