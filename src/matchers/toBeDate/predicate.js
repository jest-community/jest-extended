import { getType } from 'jest-get-type';

const isDate = value => getType(value) === 'date' && !isNaN(value);

export default isDate;
