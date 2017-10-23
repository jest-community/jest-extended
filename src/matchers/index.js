import toBeTrue from './toBeTrue';
import toSatisfy from './toSatisfy';
import toContainValue from './toContainValue';
import toContainValues from './toContainValues';

export default [toBeTrue, toContainValue, toContainValues, toSatisfy].reduce((acc, matcher) => ({ ...acc, ...matcher }), {});
