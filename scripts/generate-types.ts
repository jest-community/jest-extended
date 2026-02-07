import * as fs from 'fs';
import * as path from 'path';
import * as ts from 'typescript';

interface MatcherInfo {
  name: string;
  docComment: string;
  parameters: {
    name: string;
    type: string;
    optional?: boolean;
    rest?: boolean;
  }[];
  returnType: string;
}

function extractMatcherInfo(sourceFile: ts.SourceFile): MatcherInfo[] {
  const matchers: MatcherInfo[] = [];
  ts.forEachChild(sourceFile, node => {
    if (ts.isFunctionDeclaration(node) && node.name) {
      const matcherName = node.name.text;
      // Extract the full JSDoc block (not just tags)
      let docComment = '';
      const jsDocs = (node as any).jsDoc;
      if (jsDocs && jsDocs.length > 0 && jsDocs[0].comment) {
        docComment = jsDocs[0].comment;
        // If there are tags, add them as well
        if (jsDocs[0].tags && jsDocs[0].tags.length > 0) {
          const tags = jsDocs[0].tags.map((tag: any) => {
            let tagLine = `@${tag.tagName.escapedText}`;
            if (tag.typeExpression && tag.typeExpression.type) {
              tagLine += ` {${tag.typeExpression.type.getText()}}`;
            }
            if (tag.name) tagLine += ` ${tag.name.escapedText}`;
            if (tag.comment) tagLine += ` ${tag.comment}`;
            return tagLine;
          });
          docComment += '\n' + tags.join('\n');
        }
      }
      // Skip the first parameter (actual) as it's implicit in Jest matchers
      const parameters = node.parameters.slice(1).map(param => {
        const paramName = param.name.getText(sourceFile);
        const paramType = param.type ? param.type.getText(sourceFile) : 'unknown';
        // Check if parameter is optional (has default value or is marked with ?)
        const isOptional = param.initializer !== undefined || param.questionToken !== undefined;
        // Check if parameter is a rest parameter
        const isRest = param.dotDotDotToken !== undefined;
        return {
          name: paramName,
          type: paramType,
          optional: isOptional,
          rest: isRest,
        };
      });
      const returnType = node.type ? node.type.getText(sourceFile) : 'unknown';
      matchers.push({ name: matcherName, docComment, parameters, returnType });
    }
  });
  return matchers;
}

function generateTypeDefinition(matcher: MatcherInfo): string {
  // Split docComment into lines, trim, and wrap in JSDoc
  let docBlock = '';
  if (matcher.docComment && matcher.docComment.trim().length > 0) {
    const lines = matcher.docComment.split('\n').map(line => `   * ${line.trim()}`);
    docBlock = ['  /**', ...lines, '   */'].join('\n');
  }
  const params = matcher.parameters
    .map(p => {
      const prefix = p.rest ? '...' : '';
      const suffix = p.optional ? '?' : '';
      return `${prefix}${p.name}${suffix}: ${p.type}`;
    })
    .join(', ');

  // Check if the function uses the E type parameter
  const needsGenericE = matcher.parameters.some(p => p.type.includes('E')) || matcher.returnType.includes('E');

  // Add generic type parameter if needed
  const genericParams = needsGenericE ? '<E>' : '';

  // Add two newlines after each method for clarity
  return `\n${docBlock}\n  ${matcher.name}${genericParams}(${params}): R;\n`;
}

function generateTypeFile(matchers: MatcherInfo[]): string {
  return `interface CustomMatchers<R> {${matchers.map(generateTypeDefinition).join('')}
}

declare namespace jest {
  interface Matchers<R, T = {}> extends CustomMatchers<R> {}

  interface Expect extends CustomMatchers<any> {}
  interface InverseAsymmetricMatchers extends Expect {}
}

declare module 'jest-extended' {
  // eslint-disable-next-line no-var
  var matchers: CustomMatchers<any>;
  export = matchers;
}`;
}

function main() {
  const matchersDir = path.join(__dirname, '../src/matchers');
  const typesDir = path.join(__dirname, '../types');
  const outputFile = path.join(typesDir, 'index.d.ts');

  // Read all matcher files
  const matcherFiles = fs.readdirSync(matchersDir).filter(file => file.endsWith('.ts') && file !== 'index.ts');

  const matchers: MatcherInfo[] = [];

  // Process each matcher file
  for (const file of matcherFiles) {
    const filePath = path.join(matchersDir, file);
    const sourceFile = ts.createSourceFile(
      filePath,
      fs.readFileSync(filePath, 'utf8').replace(/\r/g, ''),
      ts.ScriptTarget.Latest,
      true,
    );

    const matcherInfos = extractMatcherInfo(sourceFile);
    matchers.push(...matcherInfos);
  }

  // Generate and write type definitions
  const typeDefinitions = generateTypeFile(matchers);
  fs.mkdirSync(typesDir, { recursive: true });
  fs.writeFileSync(outputFile, typeDefinitions);
  console.log(`Generated type definitions in ${outputFile}`);
}

main();
