import each from 'jest-each';

import matcher from './';

expect.extend(matcher);

describe('.toBeBoolean', () => {
  it('passes when given false', () => {
    expect(false).toBeBoolean();
  });

  it('passes when given true', () => {
    expect(true).toBeBoolean();
  });

  it('passes when given something that evaluates to a boolean', () => {
    expect(1 === 1).toBeBoolean();
  });

  it('passes when given an object of type Boolean', () => {
    expect(new Boolean()).toBeBoolean();
  });

  it('fails when not given a boolean', () => {
    expect(() => expect(1).toBeBoolean()).toThrowErrorMatchingSnapshot();
  });
});

describe('.not.toBeBoolean', () => {
  each([
    ['true'],
    [0],
    [{}],
    [[]],
    [() => {}],
    [undefined],
    [null],
    [NaN]
  ]).it('passes when item is not of type boolean: %s', given => {
    expect(given).not.toBeBoolean();
  });

  it('fails when given a boolean', () => {
    expect(() => expect(true).not.toBeBoolean()).toThrowErrorMatchingSnapshot();
  });

  it('fails when given an object of type boolean', () => {
    expect(() => expect(new Boolean()).not.toBeBoolean()).toThrowErrorMatchingSnapshot();
  });
});
