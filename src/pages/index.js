import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/homepage-features/HomepageFeatures';
import HomepageDeveloperLinks from "../components/homepage-developer-links/HomepageDeveloperLinks";
import HomepagePreFooter from "../components/homepage-prefooter/HomepagePreFooter";
import HomepageFooter from "../components/homepage-footer/HomepageFooter";

function HomepageHeader() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <header>
            <div className="container">
                <h1 className={styles.mainTitle}>Documentation Portal</h1>
            </div>
        </header>
    );
}

export default function Home() {
    return (
        <Layout
            title="1inch Network | Leading high capital efficient DeFi protocols"
            description="The 1inch Network unites decentralized protocols whose synergy enables the most lucrative, fastest and protected operations in the DeFi space.">
            <div class={styles.mainLayout}>
                <img className={styles.startImage} src='../../static/img/start-image.png'/>
                <HomepageHeader/>
                <main>
                    <HomepageFeatures/>
                    <HomepageDeveloperLinks/>
                    <HomepagePreFooter/>
                    <HomepageFooter />
                </main>
                <img src="../../static/img/bottom-gradient.png" alt="Bottom gradient" className={styles.bottomGradient} />
            </div>
        </Layout>
    );
}
