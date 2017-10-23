import toBeTrue from './toBeTrue';
import toContainValue from './toContainValue';
import toBeObject from './toBeObject';

export default [toBeTrue, toContainValue, toBeObject].reduce((acc, matcher) => ({ ...acc, ...matcher }), {});
