import predicate from './predicate';

const failMessage = message => {
  if (message) return () => message;
  else return () => 'fails by .fail() assertion';
};

export function fail(expected, message) {
  return { pass: predicate(), message: failMessage(message) };
}
