import * as matchers from '../matchers';

const jestExpect = (globalThis as { expect?: { extend: (matchers: Record<string, any>) => void } }).expect;

if (jestExpect !== undefined) {
  jestExpect.extend(matchers);
} else {
  throw new Error(
    "Unable to find Jest's global expect. " +
      'Please check you have added jest-extended correctly to your jest configuration. ' +
      'See https://github.com/jest-community/jest-extended#setup for help.',
  );
}
