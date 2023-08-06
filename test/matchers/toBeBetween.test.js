import * as matcher from "src/matchers/toBeBetween";

expect.extend(matcher);

const TESTDATE1 = new Date("2019-09-01T22:00:00.000Z");
const TESTDATE2 = new Date("2019-09-10T22:00:00.000Z");
const TESTDATE3 = new Date("2019-09-03T22:00:00.000Z");

describe(".toBeBetween", () => {
  test("passes when date is in given range", () => {
    expect(TESTDATE3).toBeBetween(TESTDATE1, TESTDATE2);
  });

  test("fails when date is not in given range", () => {
    expect(() => {
      expect(TESTDATE1).toBeBetween(TESTDATE3, TESTDATE2);
    }).toThrowErrorMatchingSnapshot();
  });
});

describe(".not.toBeBefore", () => {
  test("passes when date is not in given range", () => {
    expect(TESTDATE1).not.toBeBetween(TESTDATE3, TESTDATE2);
  });

  test("fails when date is in given range", () => {
    expect(() => {
      expect(TESTDATE3).not.toBeBetween(TESTDATE1, TESTDATE2);
    }).toThrowErrorMatchingSnapshot();
  });
});
