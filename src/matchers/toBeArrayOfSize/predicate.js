import toBeArray from '../toBeArray/predicate';

/**
 * @param actual
 * @param size
 * @returns {boolean}
 */
export default (actual, size) => toBeArray(actual) && actual.length === size;
