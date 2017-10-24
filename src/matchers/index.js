import toBeTrue from './toBeTrue';
import toContainValue from './toContainValue';
import toContainValues from './toContainValues';
import toEqualCaseInsensitive from './toEqualCaseInsensitive';
import toBeExtensible from './toBeExtensible';

export default [toBeTrue, toContainValue, toContainValues, toEqualCaseInsensitive, toBeExtensible].reduce(
  (acc, matcher) => ({ ...acc, ...matcher }),
  {}
);
