import * as fs from 'fs';
import * as path from 'path';
import * as matchers from './index';

expect.extend(matchers);

// This does not test all matchers, just couple random ones to check
// if imports work correctly.

describe('positive matcher', () => {
  test('.toBeEven', () => {
    expect(2).toBeEven();
  });
});

describe('negative matcher', () => {
  test('.not.toBeWithin', () => {
    expect(1).not.toBeWithin(10, 20);
  });
});

describe('asymmetric matchers', () => {
  describe('positive matchers', () => {
    test('.toSatisfy', () => {
      expect(4).toEqual(expect.toSatisfy(num => num === 4));
    });

    test('.toEqual', () => {
      expect([]).toEqual(expect.toBeArray());
    });
  });

  describe('negative matchers', () => {
    test('not.toInclude', () => {
      const data = 'bob';
      expect(data).not.toEqual(expect.toInclude('alice'));
      expect(data).toEqual(expect.not.toInclude('alice'));
    });

    test('not.toContainKey', () => {
      const data = { hello: 'world' };
      expect(data).not.toEqual(expect.toContainKey('foo'));
      expect('bob').toEqual(expect.not.toInclude('foo'));
    });
  });
});

describe('all matchers', () => {
  test('must be exported', () => {
    const directories = fs.readdirSync(__dirname).filter(dir => fs.statSync(path.join(__dirname, dir)).isDirectory());

    expect(Object.keys(matchers)).toHaveLength(directories.length);
  });

  describe('must be functions', () => {
    test.each(Object.entries(matchers))('%s', (_, matcher) => {
      expect(typeof matcher).toBe('function');
    });
  });
});
