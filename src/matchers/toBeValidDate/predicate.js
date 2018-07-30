import { is } from '../../utils';

const hasDateType = is('Date');

const isValidDate = value => hasDateType(value) && !isNaN(value) && !isNaN(value.getTime());

export default isValidDate;
