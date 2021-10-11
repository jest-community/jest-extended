import predicate from './predicate';

const passMessage = message => {
  if (message) return () => message;
  else return () => 'passes by .pass() assertion';
};

export default {
  pass: (expected, message) => ({ pass: predicate(), message: passMessage(message) }),
};
