import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';
import { TestFile } from '../components/CustomSandpack';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="/docs/">
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}

const code = `test('Playground', () => {
  expect(true).toBeBoolean();
  expect(1).toBeNumber();
  expect('').toBeString();
  expect([]).toBeArray();
  expect({}).toBeObject();
});`;

export default function Home(): React.JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={`${siteConfig.title}`} description="Additional Jest expect matchers">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <div className={clsx('container', styles.playground)}>
          <h2>Playground</h2>
          <p>
            All <code>jest-extended</code> matchers are available in this playground. See{' '}
            <Link to="/docs/matchers">API</Link> for all available matchers.
          </p>
          <TestFile name="playground">{code}</TestFile>
        </div>
      </main>
    </Layout>
  );
}
