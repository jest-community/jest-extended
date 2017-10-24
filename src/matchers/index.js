import toBeTrue from './toBeTrue';
import toContainValue from './toContainValue';
import toContainValues from './toContainValues';
import toEqualCaseInsensitive from './toEqualCaseInsensitive';
import toStartWith from './toStartWith';

export default [toBeTrue, toContainValue, toContainValues, toEqualCaseInsensitive, toStartWith].reduce(
  (acc, matcher) => ({ ...acc, ...matcher }),
  {}
);
