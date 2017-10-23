import toBeTrue from './toBeTrue';
import toContainValue from './toContainValue';

export default [toBeTrue, toContainValue].reduce((acc, matcher) => ({ ...acc, ...matcher }), {});
