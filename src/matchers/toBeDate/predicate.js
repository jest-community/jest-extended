import { is } from '../../utils';

let hasDateType = is('Date');

const isDate = value => hasDateType(value) && !isNaN(value);

export default isDate;
