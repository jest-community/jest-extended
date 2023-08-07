import * as matcher from 'src/matchers/toHaveSameJsonAs';

expect.extend(matcher);

const equalityScenarios = [
  {
    description: 'integer numbers',
    value: 90,
  },

  {
    description: 'floating-point numbers',
    value: 98.5,
  },

  {
    description: 'strings',
    value: 'book',
  },

  {
    description: 'shallow objects',
    value: { alpha: 90, beta: 'X' },
  },

  {
    description: 'nested objects',
    value: { alpha: 90, beta: { gamma: 'Y', delta: 4 } },
  },
];

const inequalityScenarios = [
  {
    description: 'integer numbers',
    actual: 90,
    expected: 21,
  },

  {
    description: 'floating-point numbers',
    actual: 98.5,
    expected: 29.4,
  },

  {
    description: 'strings',
    actual: 'book',
    expected: 'film',
  },

  {
    description: 'shallow objects',
    actual: { alpha: 90, beta: 'X' },
    expected: { a: 90, b: 'X' },
  },

  {
    description: 'nested objects',
    actual: { alpha: 90, beta: { gamma: 'Y', delta: 4 } },
    expected: { alpha: 90, beta: { g: 'Y', d: 4 } },
  },
];

describe('.toHaveSameJsonAs', () => {
  test.each(equalityScenarios)('passes when given equal $description', ({ value }) => {
    expect(value).toHaveSameJsonAs(value);
  });

  test.each(inequalityScenarios)('fails when given different $description', ({ actual, expected }) => {
    expect(() => expect(actual).toHaveSameJsonAs(expected)).toThrowErrorMatchingSnapshot();
  });
});

describe('.not.toHaveSameJsonAs', () => {
  test.each(equalityScenarios)('fails when given equal $description', ({ value }) => {
    expect(() => expect(value).not.toHaveSameJsonAs(value)).toThrowErrorMatchingSnapshot();
  });

  test.each(inequalityScenarios)('passes when given different $description', ({ actual, expected }) => {
    expect(actual).not.toHaveSameJsonAs(expected);
  });
});
