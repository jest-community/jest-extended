import {
  Sandpack as SandpackDefault,
  SandpackCodeEditor,
  SandpackLayout,
  SandpackLayout as SandpackLayoutDefault,
  SandpackProvider,
  SandpackTests,
} from '@codesandbox/sandpack-react';
import React from 'react';
import { useColorMode } from '@docusaurus/theme-common';
import { githubLight, dracula } from '@codesandbox/sandpack-themes';

const setup = `import * as matchers from 'jest-extended';

expect.extend(matchers);`;

export const Sandpack: React.FC<{ files: any }> = props => {
  return (
    <SandpackProvider
      customSetup={{ entry: 'entry.ts', dependencies: { 'jest-extended': '^6.0.0' } }}
      files={{
        '/entry.ts': {
          code: '',
          hidden: true,
        },
        '/extended.test.ts': {
          code: setup,
          hidden: true,
        },
        ...props.files,
      }}
    >
      <SandpackLayout>
        <SandpackCodeEditor showTabs />
        <SandpackTests verbose />
      </SandpackLayout>
    </SandpackProvider>
  );
};

export const TestFile: React.FC<{ name: string; children: string }> = props => {
  const { colorMode } = useColorMode();
  return (
    <SandpackProvider
      theme={colorMode === 'dark' ? dracula : githubLight}
      customSetup={{ entry: 'entry.js', dependencies: { 'jest-extended': '^6.0.0' } }}
      files={{
        '/entry.js': {
          code: '',
          hidden: true,
        },
        '/extended.test.js': {
          code: setup,
          hidden: true,
        },
        [`/${props.name}.test.js`]: props.children,
      }}
    >
      <SandpackLayout>
        <SandpackCodeEditor showTabs />
        <SandpackTests style={{ minHeight: 150 }} />
      </SandpackLayout>
    </SandpackProvider>
  );
};
