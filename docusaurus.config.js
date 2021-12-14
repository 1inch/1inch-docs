// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '1inch Network',
  tagline: 'The 1inch Network unites decentralized protocols whose synergy enables the most lucrative, fastest and protected operations in the DeFi space.',
  url: 'https://1inch.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon/favicon.ico',
  organizationName: '1inch', // Usually your GitHub org/user name.
  projectName: '1inch-docs', // Usually your repo name.

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/1inch/1inch-docs/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/1inch/1inch-docs/edit/master/website/blog/',
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
      navbar: {
        title: '1inch Network Docs',
        logo: {
          alt: '1inch',
          src: 'https://app.1inch.io/assets/images/1inch_logo_without_text.svg',
        },
        items: [
          {
            label: 'Protocols',
            position: 'left',
            items: [
              {
                label: 'Aggregation protocol',
                href: '/docs/aggregation-protocol/introduction',
              },
              {
                label: 'Limit order protocol',
                href: '/docs/limit-order-protocol/introduction'
              },
              {
                label: 'Governance',
                href: '/docs/governance/overview'
              }
            ]
          },
          {
            label: 'Open Source',
            position: 'left',
            items: [
              {
                label: 'Router contract',
                href: '/',
              },
              {
                label: 'Limit order contract',
                href: '/',
              },
              {
                label: 'Transactions parsing library',
                href: '/',
              },
              {
                label: 'Multicall',
                href: '/',
              },
              {
                label: 'EIP-2612 utils library',
                href: '/',
              },
              {
                label: 'Off-chain oracle',
                href: '/',
              },
              {
                label: 'Cumulative merkle drop',
                href: '/',
              },
            ]
          },
          {
            label: 'Grants Program',
            position: 'right',
            href: 'https://www.npmjs.com/'
          },
          {
            label: 'Bug bounty',
            position: 'right',
            href: 'https://www.npmjs.com/'
          },
          {
            href: 'https://www.npmjs.com/',
            label: 'NPM',
            position: 'right',
          },
          {
            href: 'https://github.com/1inch',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
