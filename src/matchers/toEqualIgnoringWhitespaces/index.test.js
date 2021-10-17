import * as matcher from '.';

expect.extend(matcher);

describe('.toEqualIgnoringWhitespaces   ', () => {
  test('should pass if strings are equal irrespective of whitespaces', () => {
    expect('SELECT * from TABLE WHERE CONDITION = "5"').toEqualIgnoringWhitespaces(`
            SELECT * from TABLE
            WHERE CONDITION = "5"
        `);

    expect('SELECT * from TABLE WHERE CONDITION = "5"').toEqualIgnoringWhitespaces(`
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
        `).toEqualIgnoringWhitespaces(`
            diff.forEach((diffObject) => {
                if(diffObject.value.trim()) return;
                diffObject.added = diffObject.removed = undefined;
            });
        `);

    expect(() =>
      expect('.class { cssRule: value; }').toEqualIgnoringWhitespaces('#id { cssRule: value; }'),
    ).toThrowErrorMatchingSnapshot();
  });

  test('should not pass if strings are not equal, not considering whitespaces', () => {
    expect('SELECT * from TABLE WHERE CONDITION = "5"').not.toEqualIgnoringWhitespaces(`
            WHERE CONDITION = "5" 
            SELECT * from TABLE
        `);

    expect('SELECT * from TABLE WHERE CONDITION = "5"').not.toEqualIgnoringWhitespaces(`
            SELECT * from TABLE
            WHERE CONDITION = "555"
        `);

    expect('SELECT * from TABLE WHERE CONDITION = "5"').not.toEqualIgnoringWhitespaces(`
            WHERE CONDITION = "5"
        `);

    expect('SELECT * from TABLE WHERE CONDITION = "5"').not.toEqualIgnoringWhitespaces(`
            select * from table 
            where condition="5"
    `);

    expect(`
            import React from 'react';
        `).not.toEqualIgnoringWhitespaces(`
            import {Component} from 'react';
        `);

    expect(() =>
      expect('.class { cssRule: value; }').not.toEqualIgnoringWhitespaces(`
            .class { 
                cssRule: value; 
            }
        `),
    ).toThrowErrorMatchingSnapshot();
  });
});
