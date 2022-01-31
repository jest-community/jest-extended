/**
 * @param actual
 * @param size
 * @returns {boolean}
 */
export default (actual, size) => Array.isArray(actual) && actual.length === size;
