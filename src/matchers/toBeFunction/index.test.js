import each from 'jest-each';

import matcher from './';

expect.extend(matcher);

describe('.toBeFunction', () => {
  it('passes when given a function', () => {
    expect(() => {}).toBeFunction();
  });

  it('fails when not given a function', () => {
    expect(() => expect(false).toBeFunction()).toThrowErrorMatchingSnapshot();
  });
});

describe('.not.toBeFunction', () => {
  each([[false], [''], [0], [{}], [[]], [undefined], [null], [NaN]]).it('passes when not given true: %s', given => {
    expect(given).not.toBeFunction();
  });

  it('fails when given true', () => {
    expect(() => expect(() => {}).not.toBeFunction()).toThrowErrorMatchingSnapshot();
  });
});
