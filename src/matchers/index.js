import toBeTrue from './toBeTrue';
import toContainValue from './toContainValue';
import toBeFrozen from './toBeFrozen';

export default [toBeTrue, toContainValue, toBeFrozen].reduce((acc, matcher) => ({ ...acc, ...matcher }), {});
