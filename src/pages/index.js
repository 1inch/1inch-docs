import React from 'react';
import styles from './index.module.css';
import HomepageFeatures from '../components/homepage-features/HomepageFeatures';
import HomepageDeveloperLinks from '../components/homepage-developer-links/HomepageDeveloperLinks';
import HomepageFooter from '../components/homepage-footer/HomepageFooter';
import HomePageBackgroundImage from '../../static/img/logo-background.svg'
import Layout from "@docusaurus/core/lib/client/theme-fallback/Layout";
import Head from "@docusaurus/core/lib/client/exports/Head";
import Cover from '../../static/img/cover.png';

function HomepageHeader() {
    return (
        <header className={styles.headerWrap}>
            <h1 className={styles.mainTitle}>Documentation Portal</h1>
        </header>
    );
}

export default function Home() {
    return (
        <Layout pageClassName={styles.mainLayout}
                description="The 1inch Network unites decentralized protocols whose synergy enables the most lucrative, fastest and protected operations in the DeFi space.">
            <Head>
                <meta property="og:image" content={Cover} />
                <meta name="twitter:image" content={Cover} />
                <title>1inch Network | Leading high capital efficient DeFi protocols</title>
            </Head>
            <main className={styles.mainContainer}>
                <div className="page-container">
                    <HomePageBackgroundImage className={styles.bgImage}/>
                    <HomepageHeader/>
                    <div className={styles.section}>
                        <HomepageFeatures/>
                    </div>
                    <div className={styles.section2}>
                        <HomepageDeveloperLinks/>
                    </div>
                </div>
                <HomepageFooter/>
            </main>
        </Layout>
    );
}
