import toBeFalse from './toBeFalse';
import toBeTrue from './toBeTrue';

export default [toBeFalse, toBeTrue].reduce((acc, matcher) => ({ ...acc, ...matcher }), {});
