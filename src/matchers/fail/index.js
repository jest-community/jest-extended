import predicate from './predicate';

const failMessage = message => {
  if (message) return () => message;
  else return () => 'fails by .fail() assertion';
};

export default {
  fail: (expected, message) => ({ pass: predicate(), message: failMessage(message) }),
};
