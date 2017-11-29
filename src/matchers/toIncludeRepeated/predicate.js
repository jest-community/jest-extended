export default (string, substring, occurrences) =>
  (string.match(new RegExp(substring, 'g')) || []).length === occurrences;
