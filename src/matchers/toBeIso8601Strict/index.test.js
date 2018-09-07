import matcher from './index';

expect.extend(matcher);

const noneIsoStates = [[false], [''], ['someString'], [0], [{}], [[]], [undefined], [null], [NaN]];

describe('.toBeIso8601Strict', () => {
  test('passes when given a string in the correct format', () => {
    expect('2018-01-01T23:59:59.999Z').toBeIso8601Strict();
  });

  test.each(noneIsoStates)('fails when not given a none ISO8601 string', noneIsoState => {
    expect(() => expect(noneIsoState).toBeIso8601Strict()).toThrowErrorMatchingSnapshot();
  });
});

describe('.not.toBeIso8601Strict', () => {
  test.each(noneIsoStates)('passes when not given a none ISO8601 string', noneIsoState => {
    expect(noneIsoState).not.toBeIso8601Strict();
  });

  test('fails when given a string in the correct format', () => {
    expect(() => expect('2018-01-01T23:59:59.999Z').not.toBeIso8601Strict()).toThrowErrorMatchingSnapshot();
  });
});
