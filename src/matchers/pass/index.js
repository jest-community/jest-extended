import predicate from './predicate';

const passMessage = message => {
  if (message) return () => message;
  else return () => 'Passed!';
};

const failMessage = message => {
  if (message) return () => message;
  else return () => 'Passed!';
};

export default {
  pass: (expected, message) => {
    const pass = predicate(message);
    if (pass) {
      return { pass: true, message: passMessage(message) };
    }
    return { pass: false, message: failMessage(message) };
  }
};
