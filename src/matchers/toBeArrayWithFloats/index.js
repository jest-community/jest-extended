import predicate from './predicate';

export default {
  toBeArrayWithFloats: (received, expected, precision = 4) => {
    const pass = predicate(received, expected, precision);
    if (pass) {
      return {
        message: () => `expected [${received}] not to be equal to [${expected}] with ${precision}-digit precision`,
        pass: true
      };
    } else {
      return {
        message: () => `expected [${received}] to be equal to [${expected}] with ${precision}-digit precision`,
        pass: false
      };
    }
  }
};
