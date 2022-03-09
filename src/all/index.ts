import * as matchers from '../matchers';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const jestExpect = (global as any).expect;

if (jestExpect !== undefined) {
  jestExpect.extend(matchers);
} else {
  throw new Error(
    "Unable to find Jest's global expect. " +
      'Please check you have added jest-extended correctly to your jest configuration. ' +
      'See https://github.com/jest-community/jest-extended#setup for help.',
  );
}
