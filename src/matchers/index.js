import toBeTrue from './toBeTrue';
import toContainValue from './toContainValue';
import toContainValues from './toContainValues';
import toEqualCaseInsensitive from './toEqualCaseInsensitive';
import toBePositive from './toBePositive';

export default [toBeTrue, toContainValue, toContainValues, toEqualCaseInsensitive, toBePositive].reduce(
  (acc, matcher) => ({ ...acc, ...matcher }),
  {}
);
