import React from 'react';
import Layout from '@theme/Layout';
import styles from './index.module.css';
import HomepageFeatures from '../components/homepage-features/HomepageFeatures';
import HomepageDeveloperLinks from '../components/homepage-developer-links/HomepageDeveloperLinks';
import HomepagePreFooter from '../components/homepage-prefooter/HomepagePreFooter';
import HomepageFooter from '../components/homepage-footer/HomepageFooter';
import HomePageBackgroundImage from '../../static/img/logo-background.svg';
import SearchBar from "docusaurus-theme-search-typesense/src/theme/SearchBar";

function HomepageHeader() {
    return (
        <header className={styles.headerWrap}>
            <h1 className={styles.mainTitle}>Documentation Portal</h1>
            <SearchBar className={styles.search} />
        </header>
    );
}

export default function Home() {
    return (
        <Layout pageClassName={styles.mainLayout}
                title="1inch Network | Leading high capital efficient DeFi protocols"
                description="The 1inch Network unites decentralized protocols whose synergy enables the most lucrative, fastest and protected operations in the DeFi space.">
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
