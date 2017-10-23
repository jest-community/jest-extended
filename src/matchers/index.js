import toBeTrue from './toBeTrue';
import toContainValue from './toContainValue';
import toContainValues from './toContainValues';
import toBeArray from './toBeArray';

export default [toBeTrue, toContainValue, toContainValues, toBeArray].reduce(
  (acc, matcher) => ({ ...acc, ...matcher }),
  {}
);
