import importAll from 'import-all.macro';

const imports = importAll.sync('./*/index.js');

export default Object.keys(imports)
  .map(key => imports[key])
  .reduce((acc, matcher) => ({ ...acc, ...matcher.default }), {});
