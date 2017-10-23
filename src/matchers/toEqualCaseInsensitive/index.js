import predicate from './predicate';

export default {
  toEqualCaseInsensitive: (received, expected) => {
    const pass = predicate(received, expected);

    return { pass, message: 'lol', actual: received };
  }
};
