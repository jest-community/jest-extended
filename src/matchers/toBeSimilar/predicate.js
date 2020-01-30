import { diffWords } from 'diff';

export default (received, expected) => {
  const diff = diffWords(expected, received);
  diff.forEach(diffObject => {
    if (diffObject.value.trim()) return;
    diffObject.added = diffObject.removed = undefined;
  });

  const pass = diff.every(({ added, removed }) => !added && !removed);

  return {
    diff,
    pass
  };
};
