import * as matcher from "src/matchers/toBeArrayOfSize";

expect.extend(matcher);

describe(".toBeArrayOfSize", () => {
  {
    const size = 1;
    test(`passes when given an array of size 1, where size === ${size}`, () => {
      expect([size]).toBeArrayOfSize(size);
    });
  }
  {
    const size = 134;
    test(`passes when given an array of size 134, where size === ${size}`, () => {
      expect(Array(size)).toBeArrayOfSize(size);
    });
  }

  test("fails when given type which is not an array", () => {
    expect(() => expect(false).toBeArrayOfSize(1)).toThrowErrorMatchingSnapshot();
  });

  test.each([[false], [true], [0], [{}], [() => {}], [undefined], [null], [NaN]])(
    "fails when given type of %s which is not an array",
    given => {
      expect(() => expect(given).toBeArrayOfSize(1)).toThrowErrorMatchingSnapshot();
    },
  );

  test("fails when not given an array", () => {
    expect(() => expect().toBeArrayOfSize(5)).toThrowErrorMatchingSnapshot();
  });

  test("fails when not given a parameter", () => {
    expect(() => expect([1]).toBeArrayOfSize()).toThrowErrorMatchingSnapshot();
  });

  test("fails when given neither a parameter nor an array", () => {
    expect(() => expect([]).toBeArrayOfSize()).toThrowErrorMatchingSnapshot();
  });
});

describe(".not.toBeArrayOfSize", () => {
  test.each([false, true, 0, {}, () => {}, undefined, null, NaN])("passes when not given an array: %s", given => {
    expect(given).not.toBeArrayOfSize(2);
  });
  {
    const size = 0;
    test(`fails when given an array of size ${size}`, () => {
      expect(() => expect([]).not.toBeArrayOfSize(size)).toThrowErrorMatchingSnapshot();
    });
  }
});
