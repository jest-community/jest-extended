import { equals } from '../../utils';

export default value => equals([], value) || equals('', value) || equals({}, value);
