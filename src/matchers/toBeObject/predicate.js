import getType from 'jest-get-type';

export default expected => getType(expected) === 'object';
