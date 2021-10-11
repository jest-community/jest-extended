import predicate from './predicate';

const passMessage = message => {
  if (message) return () => message;
  else return () => 'passes by .pass() assertion';
};

export function pass(expected, message) {
  return { pass: predicate(), message: passMessage(message) };
}
