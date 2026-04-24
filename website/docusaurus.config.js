// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

import {themes} from 'prism-react-renderer';
const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'jest-extended',
  tagline: 'Additional Jest matchers 🃏💪',
  url: 'https://jest-extended.jestcommunity.dev',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/jest-community/jest-extended/tree/main/website',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/logo.png',
      metadata: [
        {
          name: 'twitter:card',
          content: 'summary',
        },
      ],
      navbar: {
        title: 'Jest Extended',
        logo: {
          alt: 'Jest Extended Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            to: '/docs',
            position: 'left',
            label: 'Docs',
            activeBaseRegex: '/docs(/+)$',
          },
          {
            to: '/docs/matchers',
            position: 'left',
            label: 'API',
          },
          {
            href: 'https://github.com/jest-community/jest-extended',
            label: 'GitHub',
            position: 'right',
          },
          {
            href: 'https://www.npmjs.com/package/jest-extended',
            label: 'npm',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Getting started',
                to: '/docs/getting-started/install',
              },
              {
                label: 'Matchers',
                to: '/docs/matchers',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Jest Twitter',
                href: 'https://twitter.com/fbjest',
              },
              {
                label: 'Matt Phillips Twitter',
                href: 'https://twitter.com/mattphillipsio',
              },
              {
                label: 'Jest-community Github Org',
                href: 'https://github.com/jest-community',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/jest-community/jest-extended',
              },
              {
                label: 'npm',
                href: 'https://www.npmjs.com/package/jest-extended',
              },
              {
                label: 'Jest',
                href: 'https://jestjs.io',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} jest-extended. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      algolia: {
        appId: '6QMK05JVSZ',
        apiKey: 'c62a0c0e9e4d67e3f7bfd69210b06dd5',
        indexName: 'jest-extended',
        contextualSearch: true,
      },
    }),
};

module.exports = config;
