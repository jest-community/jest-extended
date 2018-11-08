export default (received, value, offset) => Math.abs(received - value) <= offset;
