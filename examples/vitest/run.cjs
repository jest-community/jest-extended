const assert = require('node:assert/strict');
const { execSync } = require('node:child_process');
const { copyFileSync, mkdtempSync, renameSync } = require('node:fs');
const { tmpdir } = require('node:os');
const path = require('node:path');

const root = path.resolve(__dirname, '../..');
const consumer = mkdtempSync(path.join(tmpdir(), 'jest-extended-vitest-'));
const [archive] = JSON.parse(execSync('npm pack --ignore-scripts --json', { cwd: root, encoding: 'utf8' }));
const archivePath = path.resolve(root, archive.filename);
assert.equal(path.dirname(archivePath), root);
renameSync(archivePath, path.join(consumer, 'jest-extended.tgz'));

for (const file of [
  'package.json',
  'interop.mjs',
  'tsconfig.json',
  'vitest.config.ts',
  'testSetup.ts',
  'matchers.test.ts',
  'type-errors.ts',
  'verify-types.mjs',
]) {
  copyFileSync(path.join(__dirname, file), path.join(consumer, file));
}

console.log(`Testing the packed package in ${consumer}`);
execSync('npm install --ignore-scripts --no-package-lock --no-audit --no-fund', { cwd: consumer, stdio: 'inherit' });
execSync('npm test', { cwd: consumer, stdio: 'inherit' });
