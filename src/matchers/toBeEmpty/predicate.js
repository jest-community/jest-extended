import { equals } from '../../utils';

const isEmptyIterable = value => {
  if (typeof value[Symbol.iterator] !== 'function') {
    return false;
  }
  const firstIteration = value[Symbol.iterator]().next();
  return firstIteration.done;
};

export default value => equals({}, value) || isEmptyIterable(value);
