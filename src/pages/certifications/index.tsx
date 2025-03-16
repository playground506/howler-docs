import React, { ReactNode } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import HeroBanner from '@site/src/components/HeroBanner';

export default function CertificationsPage(): ReactNode {
  return (
    <Layout title="Certifications">
      <main>
          <HeroBanner
            title = 'Certifications'
            tagline = 'Find some information about certifications'
            primaryActionLabel = 'Learn more about it 📗'
            primaryActionLink = '/certifications/intro'
            showAction 
            />  
          <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
            <h1>Certifications</h1>
            <p>Welcome to our Certifications section</p>
            <ul>
              <li><Link to="/howler-docs/certifications/intro">Mock</Link></li>
            </ul>
          </div>
      </main>
    </Layout>
  );
};