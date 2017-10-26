const isNumber = expected => !isNaN(parseInt(expected));
const isEven = expected => expected % 2 === 0;
export default expected => isNumber(expected) && isEven(expected);
