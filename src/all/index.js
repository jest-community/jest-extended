import * as matchers from "../matchers";

const vitestExpect = global.expect;

if (vitestExpect !== undefined) {
  vitestExpect.extend(matchers);
} else {
  throw new Error(
    "Unable to find Vitest's global expect. " +
      "Please check you have added vitest-extended correctly to your vitest configuration. " +
      "See https://github.com/tbhesswebber/vitest-extended#setup for help.",
  );
}
