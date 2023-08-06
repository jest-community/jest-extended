import * as matcher from "src/matchers/toBeBeforeOrEqualTo";

expect.extend(matcher);

const EARLIER = new Date("2019-09-01T22:00:00.000Z");
const LATER = new Date("2019-09-10T22:00:00.000Z");

describe(".toBeBeforeOrEqualTo", () => {
  test("passes when given an earlier date", () => {
    expect(EARLIER).toBeBeforeOrEqualTo(LATER);
  });

  test("passes when given an equal date", () => {
    expect(EARLIER).toBeBeforeOrEqualTo(EARLIER);
  });

  test("fails when given a later date", () => {
    expect(() => {
      expect(LATER).toBeBeforeOrEqualTo(EARLIER);
    }).toThrowErrorMatchingSnapshot();
  });
});

describe(".not.toBeBeforeOrEqualTo", () => {
  test("passes when given an earlier date", () => {
    expect(LATER).not.toBeBeforeOrEqualTo(EARLIER);
  });

  test("fails when given an earlier date", () => {
    expect(() => {
      expect(EARLIER).not.toBeBeforeOrEqualTo(LATER);
    }).toThrowErrorMatchingSnapshot();
  });

  test("fails when given an equal date", () => {
    expect(() => {
      expect(EARLIER).not.toBeBeforeOrEqualTo(EARLIER);
    }).toThrowErrorMatchingSnapshot();
  });
});
