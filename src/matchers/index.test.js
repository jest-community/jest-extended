import matchers from './index';

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
