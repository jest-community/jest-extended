import { equals } from '../../utils';

export default (obj, [key, value]) => obj.hasOwnProperty && obj.hasOwnProperty(key) && equals(obj[key], value);
