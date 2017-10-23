import toBeTrue from './toBeTrue';
import toStartWith from './toStartWith';

export default [toBeTrue].reduce((acc, matcher) => ({ ...acc, ...matcher }), {});
