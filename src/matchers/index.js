import toBeTrue from './toBeTrue';
import toContainValue from './toContainValue';
import toContainValues from './toContainValues';
import toBeNumber from './toBeNumber';

export default [toBeTrue, toContainValue, toContainValues, toBeNumber].reduce(
  (acc, matcher) => ({ ...acc, ...matcher }),
  {}
);
