import * as matcher from "src/matchers/toBeAfter";

expect.extend(matcher);

const EARLIER = new Date("2018-06-01T22:00:00.000Z");
const LATER = new Date("2018-06-02T22:00:00.000Z");

describe(".toBeAfter", () => {
  test("passes when given a later date", () => {
    expect(LATER).toBeAfter(EARLIER);
  });

  test("fails when given an earlier date", () => {
    expect(() => {
      expect(EARLIER).toBeAfter(LATER);
    }).toThrowErrorMatchingSnapshot();
  });
});

describe(".not.toBeAfter", () => {
  test("passes when not given an earlier date", () => {
    expect(EARLIER).not.toBeAfter(LATER);
  });

  test("fails when given a later date", () => {
    expect(() => {
      expect(LATER).not.toBeAfter(EARLIER);
    }).toThrowErrorMatchingSnapshot();
  });
});
