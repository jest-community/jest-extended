import toBeTrue from './toBeTrue';
import toContainValue from './toContainValue';
import toContainValues from './toContainValues';
import toEqualCaseInsensitive from './toEqualCaseInsensitive';

export default [toBeTrue, toContainValue, toContainValues, toEqualCaseInsensitive].reduce(
  (acc, matcher) => ({ ...acc, ...matcher }),
  {}
);
