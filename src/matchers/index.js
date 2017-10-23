import toBeTrue from './toBeTrue';
import toContainValue from './toContainValue';
import toContainValues from './toContainValues';

export default [toBeTrue, toContainValue, toContainValues].reduce((acc, matcher) => ({ ...acc, ...matcher }), {});
