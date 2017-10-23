import toBeTrue from './toBeTrue';
import toEqualCaseInsensitive from './toEqualCaseInsensitive';

export default [toBeTrue, toEqualCaseInsensitive].reduce((acc, matcher) => ({ ...acc, ...matcher }), {});
