import matcher from './';

expect.extend(matcher);

const EARLIER = new Date('06/02/2018');
const LATER = new Date('07/02/2018');

describe('.toBeAfter', () => {
  test('passes when given a later date', () => {
    expect(LATER).toBeAfter(EARLIER);
  });

  test('fails when given an earlier date', () => {
    expect(() => {
      expect(EARLIER).toBeAfter(LATER);
    }).toThrowErrorMatchingSnapshot();
  });
});

describe('.not.toBeAfter', () => {
  test('passes when not given an earlier date', () => {
    expect(EARLIER).not.toBeAfter(LATER);
  });

  test('fails when given a later date', () => {
    expect(() => {
      expect(LATER).not.toBeAfter(EARLIER);
    }).toThrowErrorMatchingSnapshot();
  });
});
