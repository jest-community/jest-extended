import assert from 'node:assert/strict';
import ts from 'typescript';
import matchers from 'jest-extended/vitest.js';

const config = ts.readConfigFile('tsconfig.json', ts.sys.readFile);
const parsed = ts.parseJsonConfigFileContent(config.config, ts.sys, process.cwd());
assert.equal(parsed.options.skipLibCheck, false);

const program = ts.createProgram([...parsed.fileNames, 'type-errors.ts'], parsed.options);
const diagnostics = ts.getPreEmitDiagnostics(program);
const messages = diagnostics.map(diagnostic => ts.flattenDiagnosticMessageText(diagnostic.messageText, '\n'));
assert.equal(diagnostics.length, 5, messages.join('\n'));
for (const text of ["type 'number'", "type 'string'", 'nonexistentMatcher', "Type 'Promise<void>'"]) {
  assert.ok(
    messages.some(message => message.includes(text)),
    `Expected diagnostic containing ${text}`,
  );
}
assert.ok(diagnostics.every(diagnostic => diagnostic.file.fileName.endsWith('type-errors.ts')));
assert.ok(!program.getSourceFiles().some(file => /[\\/]@types[\\/]jest[\\/]/.test(file.fileName)));
assert.ok(!program.getSourceFiles().some(file => /[\\/]jest-extended[\\/]types[\\/]index.d.ts$/.test(file.fileName)));
const setup = program.getSourceFiles().find(file => file.fileName.endsWith('testSetup.ts'));
const matcherImport = setup.statements.find(
  statement => ts.isImportDeclaration(statement) && statement.moduleSpecifier.text === 'jest-extended/vitest.js',
);
const checker = program.getTypeChecker();
const matcherType = checker.getTypeAtLocation(matcherImport.importClause.name);
assert.deepEqual(
  checker
    .getPropertiesOfType(matcherType)
    .map(property => property.name)
    .sort(),
  Object.keys(matchers).sort(),
);
console.log('Invalid matcher usage is rejected without loading Jest ambient types.');
