import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'howler-docs',
  tagline: 'Free Docs for learning stuff',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://github.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/howler-docs/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'playground506', // Usually your GitHub org/user name.
  projectName: 'howler-docs', // Usually your repo name.
  deploymentBranch: "gh-ppages",
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/playground506/howler-docs/tree/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl:
            'https://github.com/playground506/howler-docs/tree/main/docs/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'howler-docs',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
          {
            to: '/community',
            label: 'community',
            position: 'left',
            activeBaseRegex: '/community/'
          },
          {
            to: '/certifications',
            label: 'certifications',
            position: 'left',
            activeBaseRegex: '/certifications/'
          },
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Docs',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/playground506/howler-docs',
            label: 'GitHub',
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
              label: 'Tutorial',
              to: '/docs/intro', // Or whatever your first docs page is
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/a7Gkd22h',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/playground506/howler-docs',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} HowlerDev. Learn new technology.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    
    announcementBar: {
      id: 'SWA Announcements',
      content:
      // '<b> Join: <a href="https://aka.ms/swa/community/standups"> Monthly Community Standups </a> | Visit: <a href="https://aka.ms/30DaysOfSWA/github">GitHub Repo</a> (& give us a ⭐️)</b>',

      '<b> Join: our team learn and share 📗 . </a> | Visit:  (& give us a ⭐️)</b>',
      backgroundColor: '#552f99',
      textColor: '#ffffff',
      isCloseable: false,
    },
  } satisfies Preset.ThemeConfig,

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'community',
        path: 'community',
        routeBasePath: 'community',
        sidebarPath: require.resolve('./sidebarsCommunity.ts'),
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'certifications',
        path: 'certifications',
        routeBasePath: 'certifications',
        sidebarPath: require.resolve('./sidebarsCertifications.ts'),
      },
    ],
    [
      '@docusaurus/plugin-ideal-image',
      {
        quality: 70,
        max: 1030, // max resized image's size.
        min: 640, // min resized image's size. 
        steps: 2, // #images b/w min and max (inclusive)
        disableInDev: false,
      },
    ],
    [
      '@docusaurus/plugin-content-blog',
      {
        id: 'blog-howlerdoc',
        /**
         * URL route for the blog section of your site.
         * *DO NOT* include a trailing slash.
         */
        routeBasePath: 'thismonth',
        /**
         * Path to data on filesystem relative to site dir.
         */
        path: './blog-howlerdoc',
        blogTitle: 'This Month In SWA',blogDescription: 'A monthly roundup of Azure Static Web Apps news, updates, content and more from your friendly neighborhood SWA team!',
        blogSidebarCount: 12,
        blogSidebarTitle: '#ThisMonthInSWA',
        tagsBasePath: 'tags',
        archiveBasePath: 'archive',
        postsPerPage: 1,
        showReadingTime: true,
        sortPosts: 'descending'
      },
    ],
  ]

};

export default config;
