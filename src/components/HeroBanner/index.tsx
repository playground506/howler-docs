import React, { JSX } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Heading from '@theme/Heading';
import styles from './index.module.css';

interface heroBannerProps {
  title?: string;
  tagline?: string;
  primaryActionLabel?: string;
  primaryActionLink?: string;
  showAction?: boolean;
  className?: string;
}

export default function HeroBanner({
  title,
  tagline,
  primaryActionLabel,
  primaryActionLink,
  showAction,
  className,
}: heroBannerProps): JSX.Element {
  const { siteConfig } = useDocusaurusContext();

  const displayTitle = title || siteConfig.title;
  const displayTagline = tagline || siteConfig.tagline;

  return (
    <header className={clsx('hero hero--primary', styles.heroBanner, className)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {displayTitle}
        </Heading>
        <p className="hero__subtitle">{displayTagline}</p>
        {showAction && (
          <div className={styles.buttons}>
            <Link
              className="button button--secondary button--lg"
              to={primaryActionLink}>
              {primaryActionLabel}
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}