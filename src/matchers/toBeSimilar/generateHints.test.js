const { RECEIVED_COLOR: REMOVE_COLOR, EXPECTED_COLOR: ADD_COLOR } = require('jest-matcher-utils');
const { diffWords } = require('diff');
const generateHints = require('./generateHints');

describe('testing generateHints', () => {
  it.each([
    ['SELECT * FROM TABLE', 'SELECT * RFOM TABLE', 'SELECT * ' + REMOVE_COLOR('RFOM') + ADD_COLOR('FROM') + ' TABLE'],
    [
      'import React from "react"',

      'import {Component} from "react";',

      'import ' + REMOVE_COLOR('{Component}') + ADD_COLOR('React') + ' from "react"' + REMOVE_COLOR(';')
    ],
    ['const a = 5;', 'const    \n' + 'a =     5', 'const a = 5' + ADD_COLOR(';')]
  ])('generated hints must be equal to given hints', (received, expected, expectedHint) => {
    const diff = diffWords(expected, received);
    expect(generateHints(diff)).toEqual(expectedHint);
  });
});
