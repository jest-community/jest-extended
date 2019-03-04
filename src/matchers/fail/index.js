import predicate from './predicate';

const passMessage = message => {
  if (message) return () => message;
  else return () => 'Failure!';
};

const failMessage = message => {
  if (message) return () => message;
  else return () => 'Failure!';
};

export default {
  fail: (expected, message) => {
    const pass = predicate(message);
    if (pass) {
      return { pass: true, message: passMessage(message) };
    }
    return { pass: false, message: failMessage(message) };
  }
};
