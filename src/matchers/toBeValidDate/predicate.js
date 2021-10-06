import { getType } from 'jest-get-type';

const isValidDate = value => getType(value) === 'date' && !isNaN(value) && !isNaN(value.getTime());

export default isValidDate;
