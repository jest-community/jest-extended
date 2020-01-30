import matcher from './.';

expect.extend(matcher);

describe('.toBeSimilar   ', () => {
  test('should pass if strings are equal irrespective of whitespaces', () => {
    expect('SELECT * from TABLE WHERE CONDITION = "5"').toBeSimilar(`
            SELECT * from TABLE
            WHERE CONDITION = "5"
        `);

    expect('SELECT * from TABLE WHERE CONDITION = "5"').toBeSimilar(`
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
        `).toBeSimilar(`
            diff.forEach((diffObject) => {
                if(diffObject.value.trim()) return;
                diffObject.added = diffObject.removed = undefined;
            });
        `);

    expect(() =>
      expect('.class { cssRule: value; }').toBeSimilar('#id { cssRule: value; }')
    ).toThrowErrorMatchingSnapshot();
  });

  test('should not pass if strings are not equal, not considering whitespaces', () => {
    expect('SELECT * from TABLE WHERE CONDITION = "5"').not.toBeSimilar(`
            WHERE CONDITION = "5" 
            SELECT * from TABLE
        `);

    expect('SELECT * from TABLE WHERE CONDITION = "5"').not.toBeSimilar(`
            SELECT * from TABLE
            WHERE CONDITION = "555"
        `);

    expect('SELECT * from TABLE WHERE CONDITION = "5"').not.toBeSimilar(`
            WHERE CONDITION = "5"
        `);

    expect('SELECT * from TABLE WHERE CONDITION = "5"').not.toBeSimilar(`
            select * from table 
               where 5condition="5"
        `);

    expect(`
            import React from 'react';
        `).not.toBeSimilar(`
            import {Component} from 'react';
        `);

    expect(() =>
      expect('.class { cssRule: value; }').not.toBeSimilar(`
            .class { 
                cssRule: value; 
            }
        `)
    ).toThrowErrorMatchingSnapshot();
  });
});
