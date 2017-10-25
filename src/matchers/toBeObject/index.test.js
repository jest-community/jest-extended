import each from 'jest-each';

import matcher from './';

expect.extend(matcher);

describe('.toBeObject', () => {
  it('passes when given an object', () => {
    expect({}).toBeObject();
  });
});

describe('.not.toBeObject', () => {
  each([[false], [''], [0], [() => {}], [undefined], [NaN]]).it('passes when not given an object: %s', given => {
    expect(given).not.toBeObject();
  });
});
