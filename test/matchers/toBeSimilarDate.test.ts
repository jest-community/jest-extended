import * as matcher from 'src/matchers/toBeSimilarDate';

expect.extend(matcher);

const EXPECTED = new Date('2018-06-01T22:00:00.000Z');
const WITHIN_RANGE_BEFORE = new Date('2018-06-01T21:59:59.951Z');
const WITHIN_RANGE_AFTER = new Date('2018-06-01T22:00:00.049Z');
const OUT_OF_RANGE_BEFORE = new Date('2018-06-01T21:59:59.949Z');
const OUT_OF_RANGE_AFTER = new Date('2018-06-01T22:00:00.051Z');

describe('.toBeSimilarDate', () => {
  test('fails when expected is not a date', () => {
    expect(() => {
      expect('not-a-date').toBeSimilarDate(EXPECTED);
    }).toThrowErrorMatchingSnapshot();
  });

  test('fails when actual is not a date', () => {
    expect(() => {
      expect(EXPECTED).toBeSimilarDate(new Date('not-a-date'));
    }).toThrowErrorMatchingSnapshot();
  });

  test('passes when given the exact same date', () => {
    expect(EXPECTED).toBeSimilarDate(EXPECTED);
  });

  test('passes when given time within range before', () => {
    expect(WITHIN_RANGE_BEFORE).toBeSimilarDate(EXPECTED);
  });

  test('passes when given time within range after', () => {
    expect(WITHIN_RANGE_AFTER).toBeSimilarDate(EXPECTED);
  });

  test('fails when given time out of range before', () => {
    expect(() => {
      expect(OUT_OF_RANGE_BEFORE).toBeSimilarDate(EXPECTED);
    }).toThrowErrorMatchingSnapshot();
  });

  test('fails when given time out of range after', () => {
    expect(() => {
      expect(OUT_OF_RANGE_AFTER).toBeSimilarDate(EXPECTED);
    }).toThrowErrorMatchingSnapshot();
  });
});

describe('.not.toBeSimilarDate', () => {
  test('passes when date out of range after date', () => {
    expect(OUT_OF_RANGE_AFTER).not.toBeSimilarDate(EXPECTED);
  });

  test('passes when date out of range before date', () => {
    expect(OUT_OF_RANGE_BEFORE).not.toBeSimilarDate(EXPECTED);
  });

  test('fails when given the same', () => {
    expect(() => {
      expect(EXPECTED).not.toBeSimilarDate(EXPECTED);
    }).toThrowErrorMatchingSnapshot();
  });

  test('fails when given a date within range before', () => {
    expect(() => {
      expect(WITHIN_RANGE_BEFORE).not.toBeSimilarDate(EXPECTED);
    }).toThrowErrorMatchingSnapshot();
  });

  test('fails when given a date within range after', () => {
    expect(() => {
      expect(WITHIN_RANGE_AFTER).not.toBeSimilarDate(EXPECTED);
    }).toThrowErrorMatchingSnapshot();
  });

  test('passes when actual is not a Date', () => {
    expect(() => {
      expect('not-a-date').not.toBeSimilarDate(EXPECTED);
    });
  });

  test('passes when expected is not a Date', () => {
    expect(() => {
      expect(EXPECTED).not.toBeSimilarDate(new Date('not-a-date'));
    });
  });
});
