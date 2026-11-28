import changelog from '@changesets/cli/changelog';

export function getReleaseLine(changeset, type, options) {
  const originalCommit = /^<!-- original-commit: ([a-f0-9]{40}) -->\r?\n\r?\n/.exec(changeset.summary);
  if (!originalCommit) return changelog.getReleaseLine(changeset, type, options);

  return changelog.getReleaseLine(
    { ...changeset, commit: originalCommit[1], summary: changeset.summary.slice(originalCommit[0].length) },
    type,
    options,
  );
}

export const getDependencyReleaseLine = changelog.getDependencyReleaseLine;
