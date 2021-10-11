import predicate from './predicate';

describe('toThrowWithMessage Predicate for a string message and same type of error returns true', () => {
  test.each`
    error                          | type              | errorMessage
    ${new Error('the')}            | ${Error}          | ${'the'}
    ${new SyntaxError('quick')}    | ${SyntaxError}    | ${'quick'}
    ${new EvalError('brown')}      | ${EvalError}      | ${'brown'}
    ${new RangeError('fox')}       | ${RangeError}     | ${'fox'}
    ${new ReferenceError('jumps')} | ${ReferenceError} | ${'jumps'}
    ${new SyntaxError('over')}     | ${SyntaxError}    | ${'over'}
    ${new URIError('the lazy')}    | ${URIError}       | ${'the lazy'}
  `('returns false when not instance of $type with the correct error message', ({ error, type, errorMessage }) => {
    expect(predicate(error, type, errorMessage)).toBe(true);
  });
});

describe('toThrowWithMessage Predicate for a regex message and same type of error returns true', () => {
  test.each`
    error                          | type              | errorMessage
    ${new Error('the')}            | ${Error}          | ${/the/}
    ${new SyntaxError('quick')}    | ${SyntaxError}    | ${/quick/}
    ${new EvalError('brown')}      | ${EvalError}      | ${/brown/}
    ${new RangeError('fox')}       | ${RangeError}     | ${/fox/}
    ${new ReferenceError('jumps')} | ${ReferenceError} | ${/jumps/}
    ${new SyntaxError('over')}     | ${SyntaxError}    | ${/over/}
    ${new URIError('the lazy')}    | ${URIError}       | ${/the lazy/}
  `('returns false when not instance of $type with the correct error message', ({ error, type, errorMessage }) => {
    expect(predicate(error, type, errorMessage)).toBe(true);
  });
});

describe('toThrowWithMessage Predicate for a string message and same type of error returns false', () => {
  test.each`
    error                          | type              | errorMessage
    ${new Error('the')}            | ${Error}          | ${'thee'}
    ${new SyntaxError('quick')}    | ${SyntaxError}    | ${'quicks'}
    ${new EvalError('brown')}      | ${EvalError}      | ${'browns'}
    ${new RangeError('fox')}       | ${RangeError}     | ${'foxs'}
    ${new ReferenceError('jumps')} | ${ReferenceError} | ${'jumpss'}
    ${new SyntaxError('over')}     | ${SyntaxError}    | ${'overs'}
    ${new URIError('the lazy')}    | ${URIError}       | ${'the lazys'}
  `('returns false when not instance of $type with the correct error message', ({ error, type, errorMessage }) => {
    expect(predicate(error, type, errorMessage)).toBe(false);
  });

  describe('toThrowWithMessage Predicate for a regex message and same type of error returns false', () => {
    test.each`
      error                          | type              | errorMessage
      ${new Error('the')}            | ${Error}          | ${/thes/}
      ${new SyntaxError('quick')}    | ${SyntaxError}    | ${/quicks/}
      ${new EvalError('brown')}      | ${EvalError}      | ${/browns/}
      ${new RangeError('fox')}       | ${RangeError}     | ${/foxs/}
      ${new ReferenceError('jumps')} | ${ReferenceError} | ${/jumpss/}
      ${new SyntaxError('over')}     | ${SyntaxError}    | ${/overs/}
      ${new URIError('the lazy')}    | ${URIError}       | ${/the lazys/}
    `('returns false when not instance of $type with the correct error message', ({ error, type, errorMessage }) => {
      expect(predicate(error, type, errorMessage)).toBe(false);
    });
  });

  describe('toThrowWithMessage Predicate for a regex message and not same type of error returns false', () => {
    test.each`
      error                          | type              | errorMessage
      ${new EvalError('quick')}      | ${SyntaxError}    | ${/quick/}
      ${new RangeError('brown')}     | ${EvalError}      | ${/brown/}
      ${new ReferenceError('fox')}   | ${RangeError}     | ${/fox/}
      ${new SyntaxError('jumps')}    | ${ReferenceError} | ${/jumps/}
      ${new URIError('over')}        | ${SyntaxError}    | ${/over/}
      ${new SyntaxError('the lazy')} | ${URIError}       | ${/the lazy/}
    `('returns false when not instance of $type with the correct error message', ({ error, type, errorMessage }) => {
      expect(predicate(error, type, errorMessage)).toBe(false);
    });
  });

  describe('toThrowWithMessage Predicate for a string message and not same type of error returns false', () => {
    test.each`
      error                          | type              | errorMessage
      ${new EvalError('quick')}      | ${SyntaxError}    | ${'quick'}
      ${new RangeError('brown')}     | ${EvalError}      | ${'brown'}
      ${new ReferenceError('fox')}   | ${RangeError}     | ${'fox'}
      ${new SyntaxError('jumps')}    | ${ReferenceError} | ${'jumps'}
      ${new URIError('over')}        | ${SyntaxError}    | ${'over'}
      ${new SyntaxError('the lazy')} | ${URIError}       | ${'the lazy'}
    `('returns false when not instance of $type with the correct error message', ({ error, type, errorMessage }) => {
      expect(predicate(error, type, errorMessage)).toBe(false);
    });
  });
});
