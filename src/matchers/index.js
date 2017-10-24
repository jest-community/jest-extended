import toBeTrue from './toBeTrue';
import toBeSealed from './toBeSealed';
import toContainValue from './toContainValue';
import toContainValues from './toContainValues';
import toEqualCaseInsensitive from './toEqualCaseInsensitive';

export default [toBeTrue, toBeSealed, toContainValue, toContainValues, toEqualCaseInsensitive].reduce(
  (acc, matcher) => ({ ...acc, ...matcher }),
  {}
);
