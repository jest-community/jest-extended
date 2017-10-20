import { red } from 'chalk';

import matchers from './matchers';

const jestExpect = global.expect;

if (jestExpect !== undefined) {
  jestExpect.extend(matchers);
} else {
  /* eslint-disable no-console */
  console.error(
    red(
      "Unable to find Jest's global expect." +
        '\nPlease check you have added jest-extended correctly to your jest configuration.' +
        '\nSee https://github.com/mattphillips/jest-extended#setup for help.'
    )
  );
  /* eslint-enable no-console */
}
