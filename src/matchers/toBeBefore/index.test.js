import matcher from './';

expect.extend(matcher);

const EARLIER = new Date('06/02/2018');
const LATER = new Date('07/02/2018');

describe('.toBeBefore', () => {
  test('passes when given an earlier date', () => {
    expect(EARLIER).toBeBefore(LATER);
  });

  test('fails when given a later date', () => {
    expect(() => {
      expect(LATER).toBeBefore(EARLIER);
    }).toThrowErrorMatchingSnapshot();
  });
});

describe('.not.toBeBefore', () => {
  test('passes when given an earlier date', () => {
    expect(LATER).not.toBeBefore(EARLIER);
  });

  test('fails when given an earlier date', () => {
    expect(() => {
      expect(EARLIER).not.toBeBefore(LATER);
    }).toThrowErrorMatchingSnapshot();
  });
});
