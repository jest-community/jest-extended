import predicate from './predicate';

const passMessage = message => {
  if (message) return () => message;
  else return () => 'Passed!';
};

export default {
  pass: (expected, message) => ({ pass: predicate(), message: passMessage(message) })
};
