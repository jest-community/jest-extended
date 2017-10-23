import toBeTrue from './toBeTrue';
import toContainValue from './toContainValue';
import toContainValues from './toContainValues';
import toBeString from './toBeString';

export default [toBeTrue, toContainValue, toContainValues, toBeString].reduce(
  (acc, matcher) => ({ ...acc, ...matcher }),
  {}
);
