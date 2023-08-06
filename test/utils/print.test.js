import { tokenize } from "src/utils/print";

describe("print-util module", () => {
  it("should tokenize given string", () => {
    const tokens = tokenize("This function \n creates tokens \t keeping white-space intact.");

    expect(tokens).toEqual([
      {
        isWhitespace: false,
        value: "This",
      },
      {
        isWhitespace: true,
        value: " ",
      },
      {
        isWhitespace: false,
        value: "function",
      },
      {
        isWhitespace: true,
        value: " \n ",
      },
      {
        isWhitespace: false,
        value: "creates",
      },
      {
        isWhitespace: true,
        value: " ",
      },
      {
        isWhitespace: false,
        value: "tokens",
      },
      {
        isWhitespace: true,
        value: " \t ",
      },
      {
        isWhitespace: false,
        value: "keeping",
      },
      {
        isWhitespace: true,
        value: " ",
      },
      {
        isWhitespace: false,
        value: "white-space",
      },
      {
        isWhitespace: true,
        value: " ",
      },
      {
        isWhitespace: false,
        value: "intact.",
      },
    ]);
  });
});
