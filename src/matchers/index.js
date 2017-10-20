import toBeTrue from './toBeTrue';

export default [toBeTrue].reduce((acc, matcher) => ({ ...acc, ...matcher }), {});
