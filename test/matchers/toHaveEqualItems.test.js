import * as matcher from 'src/matchers/toHaveEqualItems';

expect.extend(matcher);

function* fromOneToIncluding(upToIncluding) {
  for (let i = 1; i <= upToIncluding; i++) {
    yield i;
  }
}

let letterSerialNumber = 0;

class Letter {
  static equals(left, right) {
    if (!(left instanceof Letter) || !(right instanceof Letter)) {
      return;
    }

    return left.name === right.name;
  }

  constructor(name) {
    this.name = name;
    this.serialNumber = letterSerialNumber++;
  }
}

expect.addEqualityTesters([Letter.equals]);

function* letterGenerator(name) {
  yield new Letter(name);
}

const arrayEqualityScenarios = [
  {
    description: 'empty arrays',
    valueFactory: () => [],
  },

  {
    description: 'arrays having the same one item',
    valueFactory: () => [1],
  },

  {
    description: 'arrays having equal items',
    valueFactory: () => [7, 90, 92],
  },

  {
    description: 'string arrays having equal items',
    valueFactory: () => ['alpha', 'beta', 'gamma'],
  },

  {
    description: 'object arrays having equal items',
    valueFactory: () => [
      { alpha: 90, beta: { gamma: 92 } },
      { ro: 3, sigma: 50 },
    ],
  },

  {
    description: 'arrays of class having custom equality',
    valueFactory: () => [new Letter('Alpha'), new Letter('Beta')],
  },
];

const arrayInequalityScenarios = [
  {
    description: 'empty actual array and non-empty expected array',
    actualFactory: () => [],
    expectedFactory: () => [2],
  },

  {
    description: 'non-empty actual array and empty expected array',
    actualFactory: () => [3],
    expectedFactory: () => [],
  },

  {
    description: 'actual array having more items',
    actualFactory: () => [3, 4],
    expectedFactory: () => [3],
  },

  {
    description: 'actual array having less items',
    actualFactory: () => [3],
    expectedFactory: () => [3, 4],
  },

  {
    description: 'arrays having equal items in different order',
    actualFactory: () => [3, 4, 5],
    expectedFactory: () => [4, 3, 5],
  },

  {
    description: 'arrays having the same length but different items',
    actualFactory: () => [3, 4, 5],
    expectedFactory: () => [90, 92, 98],
  },

  {
    description: 'different arrays of class having custom equality',
    actualFactory: () => [new Letter('Alpha')],
    expectedFactory: () => [new Letter('Beta')],
  },
];

const generatorEqualityScenarios = [
  {
    description: 'empty generators',
    actualFactory: () => fromOneToIncluding(0),
    expectedFactory: () => fromOneToIncluding(0),
  },

  {
    description: 'generators having equal items',
    actualFactory: () => fromOneToIncluding(3),
    expectedFactory: () => fromOneToIncluding(3),
  },

  {
    description: 'empty actual generator and empty expected array',
    actualFactory: () => fromOneToIncluding(0),
    expectedFactory: () => [],
  },

  {
    description: 'empty actual array and empty expected generator',
    actualFactory: () => [],
    expectedFactory: () => fromOneToIncluding(0),
  },

  {
    description: 'actual generator and expected array having equal items',
    actualFactory: () => fromOneToIncluding(4),
    expectedFactory: () => [1, 2, 3, 4],
  },

  {
    description: 'equal actual array and expected generator',
    actualFactory: () => [1, 2, 3, 4],
    expectedFactory: () => fromOneToIncluding(4),
  },

  {
    description: 'equal generators of class having custom equality',
    actualFactory: () => letterGenerator('Alpha'),
    expectedFactory: () => letterGenerator('Alpha'),
  },
];

const generatorInequalityScenarios = [
  {
    description: 'empty actual generator and non-empty expected generator',
    actualFactory: () => fromOneToIncluding(0),
    expectedFactory: () => fromOneToIncluding(3),
  },

  {
    description: 'non-empty actual generator and empty expected generator',
    actualFactory: () => fromOneToIncluding(5),
    expectedFactory: () => fromOneToIncluding(0),
  },

  {
    description: 'actual generator having less items than expected generator',
    actualFactory: () => fromOneToIncluding(3),
    expectedFactory: () => fromOneToIncluding(5),
  },

  {
    description: 'actual generator having more items than expected generator',
    actualFactory: () => fromOneToIncluding(5),
    expectedFactory: () => fromOneToIncluding(3),
  },

  {
    description: 'generator and array having different items',
    actualFactory: () => fromOneToIncluding(3),
    expectedFactory: () => [90, 92, 98],
  },

  {
    description: 'generator and array having items in different order',
    actualFactory: () => fromOneToIncluding(3),
    expectedFactory: () => [3, 1, 2],
  },

  {
    description: 'different generators of class having custom equality',
    actualFactory: () => letterGenerator('Alpha'),
    expectedFactory: () => letterGenerator('Beta'),
  },
];

describe('.toHaveEqualItems', () => {
  test.each(arrayEqualityScenarios)('passes when given $description', ({ valueFactory }) => {
    const actual = valueFactory();
    const expected = valueFactory();
    expect(actual).toHaveEqualItems(expected);
  });

  test.each(arrayInequalityScenarios)('fails when given $description', ({ actualFactory, expectedFactory }) => {
    const actual = actualFactory();
    const expected = expectedFactory();
    expect(() => expect(actual).toHaveEqualItems(expected)).toThrowErrorMatchingSnapshot();
  });

  test.each(generatorEqualityScenarios)('passes when given $description', ({ actualFactory, expectedFactory }) => {
    const actual = actualFactory();
    const expected = expectedFactory();
    expect(actual).toHaveEqualItems(expected);
  });

  test.each(generatorInequalityScenarios)('fails when given $description', ({ actualFactory, expectedFactory }) => {
    const actual = actualFactory();
    const expected = expectedFactory();
    expect(() => expect(actual).toHaveEqualItems(expected)).toThrowErrorMatchingSnapshot();
  });
});

describe('.not.toHaveEqualItems', () => {
  test.each(arrayEqualityScenarios)('fails when given $description', ({ valueFactory }) => {
    const actual = valueFactory();
    const expected = valueFactory();
    expect(() => expect(actual).not.toHaveEqualItems(expected)).toThrowErrorMatchingSnapshot();
  });

  test.each(arrayInequalityScenarios)('passes when given $description', ({ actualFactory, expectedFactory }) => {
    const actual = actualFactory();
    const expected = expectedFactory();
    expect(actual).not.toHaveEqualItems(expected);
  });

  test.each(generatorEqualityScenarios)('fails when given $description', ({ actualFactory, expectedFactory }) => {
    const actual = actualFactory();
    const expected = expectedFactory();
    expect(() => expect(actual).not.toHaveEqualItems(expected)).toThrowErrorMatchingSnapshot();
  });

  test.each(generatorInequalityScenarios)('passes when given $description', ({ actualFactory, expectedFactory }) => {
    const actual = actualFactory();
    const expected = expectedFactory();
    expect(actual).not.toHaveEqualItems(expected);
  });
});
