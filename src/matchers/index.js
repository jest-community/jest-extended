import toBeTrue from './toBeTrue';
import toStartWith from './toStartWith';

export default [toBeTrue, toStartWith].reduce((acc, matcher) => ({ ...acc, ...matcher }), {});
