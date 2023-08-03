const kEmpty = Symbol('kEmpty');

export function toIncludeSameMembers(actual, expected) {
  const { printReceived, printExpected, matcherHint, printDiffOrStringify } = this.utils;

  const { pass, newActual, useDiffOutput } = predicate(this.equals, actual, expected);

  return {
    pass,
    message: () => {
      if (pass) {
        return (
          matcherHint('.not.toIncludeSameMembers') +
          '\n\n' +
          'Expected list to not exactly match the members of:\n' +
          `  ${printExpected(expected)}\n` +
          'Received:\n' +
          `  ${printReceived(actual)}`
        );
      }

      if (useDiffOutput) {
        return (
          matcherHint('.toIncludeSameMembers') +
          '\n\n' +
          printDiffOrStringify(expected, newActual, 'Expected', 'Received', this.expand !== false)
        );
      }

      // Fallback to the original hard-to-read for large data output
      return (
        matcherHint('.toIncludeSameMembers') +
        '\n\n' +
        'Expected list to have the following members and no more:\n' +
        `  ${printExpected(expected)}\n` +
        'Received:\n' +
        `  ${printReceived(actual)}`
      );
    },
  };
}

const predicate = (equals, actual, expected) => {
  if (!Array.isArray(actual) || !Array.isArray(expected) || actual.length !== expected.length) {
    return {
      pass: false,
      newActual: actual,
      useDiffOutput: false,
    };
  }

  let pass = true;

  let newActual = Array(expected.length).fill(kEmpty);

  const added = expected.reduce((actualItemsRemaining, expectedItem, expectedIndex) => {
    const index = actualItemsRemaining.findIndex(actualItem => equals(expectedItem, actualItem));

    if (index === -1) {
      pass = false;
      return actualItemsRemaining;
    }

    newActual[expectedIndex] = actualItemsRemaining[index];
    return actualItemsRemaining.slice(0, index).concat(actualItemsRemaining.slice(index + 1));
  }, actual);

  pass = pass && added.length === 0;
  let firstEmptyIndex = added.length ? newActual.findIndex(item => item === kEmpty) : -1;
  let checkIfArrayHaveGaps = true;

  for (const item of added) {
    while (firstEmptyIndex < expected.length && newActual[firstEmptyIndex] !== kEmpty) {
      firstEmptyIndex++;
    }

    if (firstEmptyIndex >= expected.length) {
      checkIfArrayHaveGaps = false;
      newActual.push(item);
    } else {
      newActual[firstEmptyIndex] = item;
      firstEmptyIndex++;
    }
  }

  let useDiffOutput;

  // If the have gaps the output would be confusing and element will be displayed as removed
  if (checkIfArrayHaveGaps && doesArrayHaveGaps(newActual)) {
    // Fallback to the original array
    newActual = actual;
    useDiffOutput = false;
  } else {
    // Compact the array
    newActual = newActual.filter(item => item !== kEmpty);
    useDiffOutput = true;
  }

  return {
    pass,
    newActual,
    useDiffOutput,
  };
};

function doesArrayHaveGaps(array) {
  const lastEmptyIndex = array.lastIndexOf(kEmpty);

  if (lastEmptyIndex === -1) {
    return false;
  }

  const firstEmptyIndex = array.indexOf(kEmpty);

  for (let i = firstEmptyIndex; i <= lastEmptyIndex; i++) {
    if (array[i] !== kEmpty) {
      return true;
    }
  }

  return false;
}
