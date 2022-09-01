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
      customSetup={{ entry: 'entry.ts', dependencies: { 'jest-extended': '^3.0.2' } }}
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
  const { isDarkTheme } = useColorMode();
  return (
    <SandpackProvider
      theme={isDarkTheme ? dracula : githubLight}
      customSetup={{ entry: 'entry.js', dependencies: { 'jest-extended': '^3.0.2' } }}
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
        <SandpackTests />
      </SandpackLayout>
    </SandpackProvider>
  );
};
