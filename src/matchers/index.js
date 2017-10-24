import toBeTrue from './toBeTrue';
import toContainValue from './toContainValue';
import toContainValues from './toContainValues';
import toEqualCaseInsensitive from './toEqualCaseInsensitive';
import toStartWith from './toStartWith';
import toBeNegative from './toBeNegative';

export default [toBeTrue, toContainValue, toContainValues, toEqualCaseInsensitive, toStartWith, toBeNegative].reduce(
  (acc, matcher) => ({ ...acc, ...matcher }),
  {}
);
