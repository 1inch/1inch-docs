import React from 'react';
import clsx from 'clsx';
import styles from './HomepagePreFooter.module.css';
import Link from "@docusaurus/Link";

const PreFooterData = {
    title: '1inch dApp',
    text: 'An entry point to the 1inch Network\'s tech. The 1inch dApp is #1 DeFi aggregator, offering access to the most liquidity and the best token swap rates on various DEXes, with unique features, including partial fill, the Chi gas token and the ability to find the best swap paths across multiple liquidity sources.',
    button: {
        title: 'Launch dApp',
        href: 'https://app.1inch.io/#/1/swap/ETH/1INCH'
    },
    image: require('../homepage-prefooter/img/image-footer.png').default
}

export default function homepageFooter() {
    return (
        <section className={clsx('page-container', styles.prefooterWrap)}>
            <div className={styles.prefooterFirstColumn}>
                <h2 className={styles.prefooterTitle}>{PreFooterData.title}</h2>
                <p className={styles.prefooterText}>{PreFooterData.text}</p>
                <Link to={PreFooterData.button.href} className={styles.prefooterButton}>
                    <span>{PreFooterData.button.title}</span>
                    <img src='../../../static/img/chevron-right.svg' alt="chevron-right"/>
                </Link>
            </div>
            <img className={styles.prefooterImage} src={PreFooterData.image} alt={PreFooterData.title}/>
        </section>
    );
}
