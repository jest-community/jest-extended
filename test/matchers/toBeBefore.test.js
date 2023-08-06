import * as matcher from "src/matchers/toBeBefore";

expect.extend(matcher);

const EARLIER = new Date("2018-06-01T22:00:00.000Z");
const LATER = new Date("2018-06-02T22:00:00.000Z");

describe(".toBeBefore", () => {
  test("passes when given an earlier date", () => {
    expect(EARLIER).toBeBefore(LATER);
  });

  test("fails when given a later date", () => {
    expect(() => {
      expect(LATER).toBeBefore(EARLIER);
    }).toThrowErrorMatchingSnapshot();
  });
});

describe(".not.toBeBefore", () => {
  test("passes when given an earlier date", () => {
    expect(LATER).not.toBeBefore(EARLIER);
  });

  test("fails when given an earlier date", () => {
    expect(() => {
      expect(EARLIER).not.toBeBefore(LATER);
    }).toThrowErrorMatchingSnapshot();
  });
});
