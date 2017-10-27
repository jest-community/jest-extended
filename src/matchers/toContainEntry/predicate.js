import { equals } from 'expect/build/jasmine_utils';

export default (obj, [key, value]) => obj.hasOwnProperty && obj.hasOwnProperty(key) && equals(obj[key], value);
