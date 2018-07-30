import importAll from 'import-all.macro';

const imports = importAll.sync('./*/index.js');

export default Object.values(imports).reduce((acc, matcher) => ({ ...acc, ...matcher.default }), {});
