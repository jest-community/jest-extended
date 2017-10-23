import toBeTrue from './toBeTrue';
import toContainValue from './toContainValue';
import toBeFunction from './toBeFunction';

export default [toBeTrue, toContainValue, toBeFunction].reduce((acc, matcher) => ({ ...acc, ...matcher }), {});
