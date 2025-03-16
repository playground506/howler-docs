import React, { ReactNode } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import HeroBanner from '@site/src/components/HeroBanner';

export default function CommunityPage(): ReactNode {
  return (
    <Layout title="Community">
      <main>
          <HeroBanner
            title = 'Community'
            tagline = 'Joing our community and contribuite'
            primaryActionLabel = 'Learn more about 🌎 it '
            primaryActionLink = '/community/intro'
            showAction 
            />  
          <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
            <h1>Community</h1>
            <p>Welcome to our community section</p>
            <ul>
              <li><Link to="/howler-docs/community/intro">Mock</Link></li>
            </ul>
          </div>
      </main>
    </Layout>
  );
};