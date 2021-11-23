import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import styles from './index.module.css';
import HomepageFeatures from '../components/homepage-features/HomepageFeatures';
import HomepageDeveloperLinks from '../components/homepage-developer-links/HomepageDeveloperLinks';
import HomepagePreFooter from '../components/homepage-prefooter/HomepagePreFooter';
import HomepageFooter from '../components/homepage-footer/HomepageFooter';

function HomepageHeader() {
    return (
        <header className={clsx('page-container', styles.headerWrap)}>
            <h1 className={styles.mainTitle}>Documentation Portal</h1>
        </header>
    );
}

export default function Home() {
    return (
        <Layout pageClassName={styles.mainLayout}
                title="1inch Network | Leading high capital efficient DeFi protocols"
                description="The 1inch Network unites decentralized protocols whose synergy enables the most lucrative, fastest and protected operations in the DeFi space.">
            <HomepageHeader/>
            <main>
                <div className={styles.section}>
                    <HomepageFeatures/>
                </div>
                <div className={styles.section2}>
                    <HomepageDeveloperLinks/>
                </div>
                <div className={styles.section3}>
                    <HomepagePreFooter/>
                </div>
                <HomepageFooter/>
            </main>
        </Layout>
    );
}
