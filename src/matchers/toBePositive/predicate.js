export default expected => expected !== true && expected !== Infinity && !Number.isNaN(expected) && expected > 0;
