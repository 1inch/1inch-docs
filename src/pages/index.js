import React from 'react';
import styles from './index.module.css';
import HomepageFeatures from '../components/homepage-features/HomepageFeatures';
import HomepageDeveloperLinks from '../components/homepage-developer-links/HomepageDeveloperLinks';
import HomepageFooter from '../components/homepage-footer/HomepageFooter';
import HomePageBackgroundImage from '../../static/img/logo-background.svg';
import Layout from '@theme/Layout';
import Head from "@docusaurus/core/lib/client/exports/Head";
import useBaseUrl from "@docusaurus/core/lib/client/exports/useBaseUrl";
import HomepagePreFooter from "../components/homepage-prefooter/HomepagePreFooter";

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
                <title>1inch Network | Leading high capital efficient DeFi protocols</title>
                <meta property="og:title" content="1inch Network | Leading high capital efficient DeFi protocol" />
                <meta property="og:description" content="The 1inch Network unites decentralized protocols whose synergy enables the most lucrative, fastest and protected operations in the DeFi space." />
                <meta property="og:url" content="https://docs.1inch.io/" />
                <meta property="og:image" content="https://docs.1inch.io/img/cover.png" />
                <meta property="og:site_name" content="1inch Network Docs" />
                <meta property="og:type" content="website" />
                <meta property="twitter:title" content="1inch Network | Leading high capital efficient DeFi protocols" />
                <meta name="twitter:description" content="The 1inch Network unites decentralized protocols whose synergy enables the most lucrative, fastest and protected operations in the DeFi space." />
                <meta name="twitter:image:alt" content="1inch Network | Leading high capital efficient DeFi protocols" />
                <meta name="twitter:image" content="https://docs.1inch.io/img/cover.png" />
                <meta name="twitter:site" content="@1inchNetwork" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="naver-site-verification" content="8f8cdf9cd5f17a937992fb11f221c46054c8f5f1" />
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
                    <div className={styles.section4}>
                        <HomepagePreFooter/>
                    </div>
                </div>
                <HomepageFooter/>
            </main>
        </Layout>
    );
}
