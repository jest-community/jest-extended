import { equals } from 'expect/build/jasmine_utils';

export default (actual, value) => !!Object.values(actual).find(v => equals(v, value));
