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
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon/favicon.ico',
  organizationName: '1inch', // Usually your GitHub org/user name.
  projectName: '1inch-docs', // Usually your repo name.
  themes: ['docusaurus-theme-search-typesense'],
  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/1inch/1inch-docs/edit/master/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/1inch/1inch-docs/edit/master/',
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
                label: 'Aggregation Protocol',
                href: '/docs/aggregation-protocol/introduction',
              },
              {
                label: 'Limit Order Protocol',
                href: '/docs/limit-order-protocol/introduction'
              },
              {
                label: 'Spot Price Aggregator',
                href: '/docs/spot-price-aggregator/introduction'
              }
            ]
          },
          {
            label: 'Governance',
            position: 'left',
            type: 'doc',
            docId: 'governance/overview',
          },
          {
            label: 'Open Source',
            position: 'left',
            items: [
              {
                label: 'Limit order contract',
                href: 'https://github.com/1inch/limit-order-protocol',
              },
              {
                label: 'Multicall',
                href: 'https://github.com/1inch/multicall',
              },
              {
                label: 'EIP-2612 utils library',
                href: 'https://github.com/1inch/permit-signed-approvals-utils',
              },
              {
                label: 'Cumulative merkle drop',
                href: 'https://github.com/1inch/merkle-distribution',
              },
            ]
          },
          {
            label: 'Grants Program',
            position: 'right',
            href: 'https://1inch.io/foundation-grant-program/'
          },
          {
            label: 'Bug bounty',
            position: 'right',
            href: 'https://airtable.com/shrddQOOkm3hOLuzd'
          },
          {
            href: 'https://www.npmjs.com/search?q=%401inch',
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
      typesense: {
        typesenseCollectionName: '1inch-docs',
        typesenseServerConfig: {
          nearestNode: {
            host: 'fsn-typesense.1inch.io',
            port: 443,
            protocol: 'https',
          },
          nodes: [
            {
              host: 'fsn-typesense.1inch.io',
              port: 443,
              protocol: 'https',
            },
            {
              host: 'hel-typesense.1inch.io',
              port: 443,
              protocol: 'https',
            },
          ],
          apiKey: 'PkWe6bmCzamVA4lw1Z5ZmRjdG0BQ7Cvh',
        },

        typesenseSearchParameters: {},

        contextualSearch: false,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
