import type {ReactNode} from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import HeroBanner from '@site/src/components/HeroBanner';


export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <main>
        <HeroBanner
          primaryActionLabel = 'Check Out Our Tutorial ⏱️'
          primaryActionLink = '/docs/intro'
          showAction 
          />  
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
