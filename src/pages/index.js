import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/homepage-features/HomepageFeatures';
import HomepageDeveloperLinks from "../components/homepage-developer-links/HomepageDeveloperLinks";
import HomepageFooter from "../components/homepage-footer/HomepageFooter";

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className="">
      <div className="container mainTitle">
        <h1>Documentation Portal</h1>
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <Layout
      title="1inch Network | Leading high capital efficient DeFi protocols"
      description="The 1inch Network unites decentralized protocols whose synergy enables the most lucrative, fastest and protected operations in the DeFi space.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <HomepageDeveloperLinks />
        <HomepageFooter />
      </main>
    </Layout>
  );
}
