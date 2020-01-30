const { RECEIVED_COLOR: REMOVE_COLOR, EXPECTED_COLOR: ADD_COLOR } = require('jest-matcher-utils');

module.exports = diff => {
  return diff.reduce((acc, { added, removed, value }) => {
    return (
      acc +
      (added
        ? ADD_COLOR(value) //green
        : removed
          ? REMOVE_COLOR(value) //red
          : value)
    );
  }, '');
};
