import { equals } from 'expect/build/jasmine_utils';

export default value => equals([], value) || equals('', value) || equals({}, value);
