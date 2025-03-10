import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  guidesSidebar: [
    {
      type: 'category',
      label: 'Guides',
      collapsed: false,
      items: [
        'index',
        'getting-started',
      ],
    },
  ],
};

export default sidebars;