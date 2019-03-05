import predicate from './predicate';

const failMessage = message => {
  if (message) return () => message;
  else return () => 'Failure!';
};

export default {
  fail: (expected, message) => ({ pass: predicate(), message: failMessage(message) })
};
