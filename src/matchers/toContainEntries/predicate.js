import { equals } from '../../utils';

export default (obj, entries) => entries.some(([key, value]) => obj.hasOwnProperty(key) && equals(obj[key], value));
