import toBeTrue from './toBeTrue';
import toContainValue from './toContainValue';
import toContainValues from './toContainValues';
import toEqualCaseInsensitive from './toEqualCaseInsensitive';
import toBeFinite from './toBeFinite';

export default [toBeTrue, toContainValue, toContainValues, toEqualCaseInsensitive, toBeFinite].reduce(
  (acc, matcher) => ({ ...acc, ...matcher }),
  {}
);
