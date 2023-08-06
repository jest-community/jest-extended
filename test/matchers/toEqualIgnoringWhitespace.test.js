import * as matcher from "src/matchers/toEqualIgnoringWhitespace";

expect.extend(matcher);

describe(".toEqualIgnoringWhitespace", () => {
  it("should pass if strings are equal ignoring white-space", () => {
    expect('SELECT * from TABLE WHERE CONDITION = "5"').toEqualIgnoringWhitespace(`
            SELECT * from TABLE
            WHERE CONDITION = "5"
        `);

    expect('SELECT * from TABLE WHERE CONDITION = "5"').toEqualIgnoringWhitespace(`
            SELECT 
            * 
            from 
            TABLE 
            WHERE 
            CONDITION="5"
        `);

    expect(`
            diff.forEach((diffObject) => {
                if(diffObject.value.trim())
                    return;
                diffObject.added = diffObject.removed = undefined;
            });
        `).toEqualIgnoringWhitespace(`
            diff.forEach((diffObject) => {
                if(diffObject.value.trim()) return;
                diffObject.added = diffObject.removed = undefined;
            });
        `);

    expect(() =>
      expect(".class { cssRule: value; }").toEqualIgnoringWhitespace("#id { cssRule: value; }"),
    ).toThrowErrorMatchingSnapshot();
  });

  it("should not pass if strings are not equal, ignoring white-space", () => {
    expect('SELECT * from TABLE WHERE CONDITION = "5"').not.toEqualIgnoringWhitespace(`
            WHERE CONDITION = "5" 
            SELECT * from TABLE
        `);

    expect('SELECT * from TABLE WHERE CONDITION = "5"').not.toEqualIgnoringWhitespace(`
            SELECT * from TABLE
            WHERE CONDITION = "555"
        `);

    expect('SELECT * from TABLE WHERE CONDITION = "5"').not.toEqualIgnoringWhitespace(`
            WHERE CONDITION = "5"
        `);

    expect('SELECT * from TABLE WHERE CONDITION = "5"').not.toEqualIgnoringWhitespace(`
            select * from table 
            where condition="5"
    `);

    expect(`
            import React from 'react';
        `).not.toEqualIgnoringWhitespace(`
            import {Component} from 'react';
        `);

    expect(() =>
      expect(".class { cssRule: value; }").not.toEqualIgnoringWhitespace(`
            .class { 
                cssRule: value; 
            }
        `),
    ).toThrowErrorMatchingSnapshot();
  });

  it("should fail if strings are not equal, ignoring white-space", () => {
    expect(() =>
      expect('SELECT * from TABLE WHERE CONDITION = "5"').toEqualIgnoringWhitespace(`
        WHERE CONDITION = "5" 
        SELECT * from TABLE
      `),
    ).toThrowErrorMatchingSnapshot();
  });
});
