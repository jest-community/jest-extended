import { matcherHint, printReceived } from 'jest-matcher-utils';
import isString from '../toBeString/predicate';

export default {
  toBeJSON(received) {
    let error;

    try {
      if (!isString(received)) {
        throw new Error(`Expected input to be a string, instead got ${received}`);
      }

      JSON.parse(received);
    } catch (e) {
      error = e;
    }

    const pass = !error;
    const message = () =>
      [
        matcherHint(pass ? '.not.toBeJSON' : '.toBeJSON', 'received', ''),
        '',
        pass ? 'Expected value not to be valid JSON:' : 'Expected value to be valid JSON:',
        `  ${printReceived(received)}`,
        pass ? '' : `  Error: ${error.message}`
      ].join('\n');

    return {
      message,
      pass
    };
  }
};
