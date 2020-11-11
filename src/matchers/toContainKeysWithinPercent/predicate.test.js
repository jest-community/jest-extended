import predicate from './predicate';

const data1 = { a: 55, b: 5, c: 1 };
const data2 = { a: 56, b: 5, c: 1 };

const keys = [
  {
    key: 'a',
    target: 50,
    percent: 10
  },
  {
    key: 'b',
    target: 5,
    percent: 0
  },
  {
    key: 'c',
    target: 1,
    percent: 100
  }
];

describe('.toContainKeysWithinPercent', () => {
  test('passes when object contains all keys and they are within x percent of target', () => {
    expect(predicate(data1, keys)).toBe(true);
  });

  test('fails when object does not contain all keys or they are not within x percent of target', () => {
    expect(predicate(data2, keys)).toBe(false);
  });
});
