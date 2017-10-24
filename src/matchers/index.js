import toBeTrue from './toBeTrue';
import toContainValue from './toContainValue';
import toContainValues from './toContainValues';
import toEqualCaseInsensitive from './toEqualCaseInsensitive';
import toHaveSomeMembers from './toHaveSomeMembers';

export default [toBeTrue, toContainValue, toContainValues, toEqualCaseInsensitive, toHaveSomeMembers].reduce(
  (acc, matcher) => ({ ...acc, ...matcher }),
  {}
);
