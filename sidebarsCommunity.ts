import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  communitySidebar: [
    {
      type: 'category',
      label: 'Community',
      collapsed: false,
      items: [
        'index',
        'contributing',
      ],
    },
  ],
};

export default sidebars;