import * as matchers from 'src/matchers';

expect.extend(matchers);

// Regression tests for https://github.com/jest-community/jest-extended/issues/589
// Matchers that compare values with `this.equals` must also pass Jest's
// `iterableEquality` tester so that `Map`s, `Set`s and other iterables are
// compared by their entries instead of falling back to reference equality.
describe('matchers comparing iterables', () => {
  const map = new Map([
    ['key1', 'value1'],
    ['key2', 'value2'],
  ]);
  const equalMap = new Map([
    ['key1', 'value1'],
    ['key2', 'value2'],
  ]);
  const differentMap = new Map([
    ['key3', 'value3'],
    ['key4', 'value4'],
  ]);

  test.each([
    ['toBeOneOf', () => expect(map).toBeOneOf([equalMap]), () => expect(map).toBeOneOf([differentMap])],
    [
      'toContainEntry',
      () => expect({ key: map }).toContainEntry(['key', equalMap]),
      () => expect({ key: map }).toContainEntry(['key', differentMap]),
    ],
    [
      'toContainAllEntries',
      () => expect({ key: map }).toContainAllEntries([['key', equalMap]]),
      () => expect({ key: map }).toContainAllEntries([['key', differentMap]]),
    ],
    [
      'toContainAnyEntries',
      () => expect({ key: map }).toContainAnyEntries([['key', equalMap]]),
      () => expect({ key: map }).toContainAnyEntries([['key', differentMap]]),
    ],
    [
      'toContainEntries',
      () => expect({ key: map }).toContainEntries([['key', equalMap]]),
      () => expect({ key: map }).toContainEntries([['key', differentMap]]),
    ],
    [
      'toContainValue',
      () => expect({ key: map }).toContainValue(equalMap),
      () => expect({ key: map }).toContainValue(differentMap),
    ],
    [
      'toContainAllValues',
      () => expect({ key: map }).toContainAllValues([equalMap]),
      () => expect({ key: map }).toContainAllValues([differentMap]),
    ],
    [
      'toContainAnyValues',
      () => expect({ key: map }).toContainAnyValues([equalMap]),
      () => expect({ key: map }).toContainAnyValues([differentMap]),
    ],
    [
      'toContainValues',
      () => expect({ key: map }).toContainValues([equalMap]),
      () => expect({ key: map }).toContainValues([differentMap]),
    ],
    [
      'toIncludeSameMembers',
      () => expect([map]).toIncludeSameMembers([equalMap]),
      () => expect([map]).toIncludeSameMembers([differentMap]),
    ],
    [
      'toIncludeAllMembers',
      () => expect([map]).toIncludeAllMembers([equalMap]),
      () => expect([map]).toIncludeAllMembers([differentMap]),
    ],
    [
      'toIncludeAnyMembers',
      () => expect([map]).toIncludeAnyMembers([equalMap]),
      () => expect([map]).toIncludeAnyMembers([differentMap]),
    ],
    [
      'toPartiallyContain',
      () => expect([{ key: map }]).toPartiallyContain({ key: equalMap }),
      () => expect([{ key: map }]).toPartiallyContain({ key: differentMap }),
    ],
    [
      'toIncludeAllPartialMembers',
      () => expect([{ key: map }]).toIncludeAllPartialMembers([{ key: equalMap }]),
      () => expect([{ key: map }]).toIncludeAllPartialMembers([{ key: differentMap }]),
    ],
    [
      'toIncludeSamePartialMembers',
      () => expect([{ key: map }]).toIncludeSamePartialMembers([{ key: equalMap }]),
      () => expect([{ key: map }]).toIncludeSamePartialMembers([{ key: differentMap }]),
    ],
  ])('%s distinguishes Maps by their entries', (_name, passAssertion, failAssertion) => {
    passAssertion();
    expect(failAssertion).toThrow();
  });
});
