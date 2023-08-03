const kEmpty = Symbol('kEmpty');

export function toIncludeSameMembers(actual, expected, keyOrFn) {
  const { printReceived, printExpected, matcherHint, printDiffOrStringify } = this.utils;

  if (keyOrFn !== undefined && typeof keyOrFn !== 'string' && typeof keyOrFn !== 'function') {
    throw new Error('toIncludeSameMembers: keyOrFn must be a undefined or string or a function');
  }

  const pass = predicate(this.equals, actual, expected);

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

      let { pass: newPass, newActual, useDiffOutput } = getBetterDiff(this.equals, actual, expected, keyOrFn);

      if (newPass !== pass) {
        useDiffOutput = false;
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
    return false;
  }

  const remaining = expected.reduce((remaining, secondValue) => {
    if (remaining === null) return remaining;

    const index = remaining.findIndex(firstValue => equals(secondValue, firstValue));

    if (index === -1) {
      return null;
    }

    return remaining.slice(0, index).concat(remaining.slice(index + 1));
  }, actual);

  return !!remaining && remaining.length === 0;
};

function getBetterDiff(equals, actual, expected, fnOrKey) {
  let { invalid, added, missing, partialNewActual: newActual } = getChanged(equals, actual, expected);

  const pass = !invalid && added.length === 0 && missing.length === 0;

  const containComplexDiffData = actual.concat(expected).some(item => typeof item === 'object' && item !== null);

  // If we have gaps the output would be confusing and element will be displayed as removed and added for the wrong place when having partial match
  if (invalid || (containComplexDiffData && !canFillTheGapsIfHave(newActual, added))) {
    return {
      pass,
      newActual: actual,
      useDiffOutput: false,
    };
  }

  const key = fnOrKey;
  fnOrKey = typeof fnOrKey === 'string' ? (itemA, itemB) => itemA?.[key] === itemB?.[key] : fnOrKey;

  // Fill the gaps with matching items
  if (added.length && fnOrKey) {
    fillWithMatchingItems({ added, missing, newActual, fn: fnOrKey });
  }

  let checkIfArrayHaveGaps = true;
  let firstEmptyIndex = added.length ? newActual.findIndex(item => item === kEmpty) : -1;

  // Fill with the rest that don't match or user didn't provide a matching function
  for (const item of added) {
    while (firstEmptyIndex < expected.length && newActual[firstEmptyIndex] !== kEmpty) {
      firstEmptyIndex++;
    }

    if (firstEmptyIndex >= expected.length) {
      newActual.push(item);
      checkIfArrayHaveGaps = false;
    } else {
      newActual[firstEmptyIndex] = item;
      firstEmptyIndex++;
    }
  }

  let useDiffOutput;

  // If Still have gaps fallback to the original array (the output would be confusing)
  if (checkIfArrayHaveGaps && containComplexDiffData && doesArrayHaveGaps(newActual)) {
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
}

function getChanged(equals, actual, expected) {
  if (!Array.isArray(actual) || !Array.isArray(expected)) {
    return { invalid: true };
  }

  const missing = [];
  const newActual = Array(expected.length).fill(kEmpty);

  const added = expected.reduce((actualItemsRemaining, expectedItem, expectedIndex) => {
    const index = actualItemsRemaining.findIndex(actualItem => equals(expectedItem, actualItem));

    if (index === -1) {
      missing.push({ index: expectedIndex, value: expectedItem });
      return actualItemsRemaining;
    }

    newActual[expectedIndex] = actualItemsRemaining[index];
    return actualItemsRemaining.slice(0, index).concat(actualItemsRemaining.slice(index + 1));
  }, actual);

  return {
    added,
    missing,
    partialNewActual: newActual,
  };
}

function fillWithMatchingItems({ added, missing, newActual, fn }) {
  let addedIndex = 0;
  while (added.length > addedIndex) {
    const item = added[addedIndex];
    let matched = false;

    for (let i = 0; i < missing.length; i++) {
      const { index, value: removedItem } = missing[i];
      if (fn(removedItem, item)) {
        newActual[index] = item;

        missing.splice(i, 1);
        matched = true;
        break;
      }
    }

    if (matched) {
      added.splice(addedIndex, 1);
    } else {
      addedIndex++;
    }
  }
}

function doesArrayHaveGaps(array) {
  const lastEmptyIndex = array.lastIndexOf(kEmpty);

  if (lastEmptyIndex === -1) {
    return false;
  }

  if (lastEmptyIndex !== array.length - 1) {
    return true;
  }

  const firstEmptyIndex = array.indexOf(kEmpty);

  for (let i = firstEmptyIndex; i <= lastEmptyIndex; i++) {
    if (array[i] !== kEmpty) {
      return true;
    }
  }

  return false;
}

function canFillTheGapsIfHave(arrayWithPossibleGaps, itemsToAdd) {
  const lastEmptyIndex = arrayWithPossibleGaps.lastIndexOf(kEmpty);

  if (lastEmptyIndex === -1) {
    return true;
  }

  if (lastEmptyIndex !== arrayWithPossibleGaps.length - 1) {
    // Have gaps
    return arrayWithPossibleGaps.filter(item => item === kEmpty).length <= itemsToAdd.length;
  }

  let startPaddingIndex;

  // The array ends with empty items, so we need to find the first non-empty item from the end
  // so we would only be left with gaps
  for (let i = lastEmptyIndex; i >= 0; i--) {
    if (arrayWithPossibleGaps[i] !== kEmpty) {
      startPaddingIndex = i;
    }
  }

  // Array full of empty items
  if (startPaddingIndex === undefined) {
    return arrayWithPossibleGaps.length <= itemsToAdd.length;
  }

  let accumulatedGapSize = 0;

  for (let i = startPaddingIndex; i >= 0; i--) {
    if (arrayWithPossibleGaps[i] === kEmpty) {
      accumulatedGapSize++;
    }
  }

  return accumulatedGapSize <= itemsToAdd.length;
}
