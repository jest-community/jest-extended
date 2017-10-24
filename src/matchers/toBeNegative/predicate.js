const isNumber = value => !isNaN(parseInt(value));
const isNegative = value => value < 0;

export default value => isNumber(value) && isNegative(value);
