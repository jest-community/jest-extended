const readline = require('readline');
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const DOCS = path.resolve(ROOT, 'docs');

const TEMPLATE_PATH = `${DOCS}/README.template.md`;
const README_PATH = `${ROOT}/README.md`;

const IMPORT_PATTERN = new RegExp(/{{(\w|\/)+\.test.js}}/g);
const IMPORT_START = /{/g;
const IMPORT_END = /}/g;
const COMMENT_START = '/*';
const COMMENT_END = '*/';

const SANDBOX_URL = 'https://codesandbox.io/s/github/jest-community/jest-extended/tree/master/docs/sandbox';
const SANDBOX_DIR = 'sandbox';
const ESCAPED_SLASH = '%2F';

const rl = readline.createInterface({ input: fs.createReadStream(TEMPLATE_PATH) });

let readme = '';

rl
  .on('line', line => {
    if (IMPORT_PATTERN.test(line)) {
      const file = line.replace(IMPORT_START, '').replace(IMPORT_END, '');
      const slugs = file.split('/');
      const matcher = slugs[slugs.length - 1].replace('.test.js', '');
      const module = file.replace(SANDBOX_DIR, '').replace(/\//g, ESCAPED_SLASH);
      const contents = fs.readFileSync(`${DOCS}/${file}`, 'utf-8');
      const [comments, code] = contents.split(COMMENT_END);

      readme += comments.split(COMMENT_START)[1].trim() + '\n';
      readme += '\n```js\n' + `${code.trim()}\n` + '```\n';
      readme += `\n[Open ${matcher} in REPL](${SANDBOX_URL}?module=${module})\n`;
      return;
    }

    readme += `${line}\n`;
  })
  .on('close', () => {
    fs.writeFileSync(README_PATH, readme);
  });
