import { equals } from '../../utils';

export default (obj, entries) => entries.every(([key, value]) => obj.hasOwnProperty(key) && equals(obj[key], value));
