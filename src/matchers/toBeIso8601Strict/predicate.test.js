import predicate from './predicate';

const expectedTrue = [
  ['2018-12-31T23:59:59.999Z', 'pass on a random date/time'],
  ['0001-12-31T23:59:59.999Z', 'pass on a low year']
];

const expectedFail = [
  ['2018-01-01 24:00:00.000Z', 'fail on missing T'],
  ['2018-01-01T24:00:00.000 ', 'fail on missing Z'],
  ['2018-01-01 24:00:00.000 ', 'fail on missing T and Z'],
  ['2018-01-01T24:00:00.000Z', 'fail on invalid time 24:00:00.000Z'],
  ['2018-01-01T00:60:00.000Z', 'fail on invalid time 00:60:00.000Z'],
  ['2018-01-01T00:00:60.000Z', 'fail on invalid time 00:00:60.000Z'],
  ['2018-00-01T00:00:00.000Z', 'fail on invalid month 00'],
  ['2018-13-01T00:00:00.000Z', 'fail on invalid month 13'],
  ['2018-01-00T00:00:00.000Z', 'fail on invalid day 00'],
  ['2018-01-32T00:00:00.000Z', 'fail on invalid day 32'],
  ['1-00-01T00:00:00.000Z', 'fail on invalid, short, year 1'],
  ['2018-12-01', 'fail on just a date'],
  ['14:00:00.000', 'fail on just a time'],
  [[], 'fail when passed an array'],
  [{}, 'fail when passed an object'],
  [12, 'fail when passed an number'],
  [undefined, 'fail when passed undefined'],
  [null, 'fail when passed null'],
  [new Date('2018-12-31T23:59:59.999Z'), 'fail when passed a Date object']
];

test.each(expectedTrue)('should return true for %s, it should %s', (expected, message) => {
  //eslint-disable-line no-unused-vars
  expect(predicate(expected)).toBe(true);
});

test.each(expectedFail)('should return false for %s, it should %s', (expected, message) => {
  //eslint-disable-line no-unused-vars
  expect(predicate(expected)).toBe(false);
});
