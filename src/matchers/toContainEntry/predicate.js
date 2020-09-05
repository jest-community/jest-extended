import { equals } from '../../utils';

export default (obj, [key, value]) =>
  Object.prototype.hasOwnProperty.call(obj, key) && equals(obj[key], value);
