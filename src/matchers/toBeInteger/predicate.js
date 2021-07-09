const isNumber = value => !isNaN(parseInt(value));
const isInteger = value => Number.isInteger(+value);

export default value => isNumber(value) && isInteger(value);
