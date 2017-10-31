import each from 'jest-each';

import matcher from './';

expect.extend(matcher);

describe('.toBeNaN', () => {
  it('passes when given a non-number', () => {
    expect({}).toBeNaN();
  });

  it('fails when given a number', () => {
    expect(() => expect(3).toBeNaN()).toThrowErrorMatchingSnapshot();
  });
});

describe('.not.toBeNaN', () => {
  each([[0], [1], [300], [10.5], [-50]]).it('passes when given a number: %s', given => {
    expect(given).not.toBeNaN();
  });

  it('fails when given a non-number', () => {
    expect(() => expect(undefined).not.toBeNaN()).toThrowErrorMatchingSnapshot();
  });
});
