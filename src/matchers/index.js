import toBeTrue from './toBeTrue';
import toSatisfy from './toSatisfy';

export default [toBeTrue, toSatisfy].reduce((acc, matcher) => ({ ...acc, ...matcher }), {});
