import toBeTrue from './toBeTrue';
import toContainValue from './toContainValue';
import toContainValues from './toContainValues';
import toEqualCaseInsensitive from './toEqualCaseInsensitive';
import toBeNaN from './toBeNaN';

export default [toBeTrue, toContainValue, toContainValues, toEqualCaseInsensitive, toBeNaN].reduce(
  (acc, matcher) => ({ ...acc, ...matcher }),
  {}
);
