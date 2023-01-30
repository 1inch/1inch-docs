import React from 'react';
import styles from './HomepagePreFooter.module.css';
import Link from "@docusaurus/Link";
import ChevronRightImg from '../../../static/img/chevron-right.svg';

const PreFooterData = {
    title: '1inch dApp',
    text: 'An entry point to the 1inch Network\'s tech. The 1inch dApp is #1 DeFi aggregator, offering access to the most liquidity and the best token swap rates on various DEXes, with unique features, including partial fill, the Chi gas token and the ability to find the best swap paths across multiple liquidity sources.',
    button: {
        title: 'Launch dApp',
        href: 'https://app.1inch.io/#/1/swap/ETH/1INCH'
    },
    imageLight: require('../../../static/img/prefooter-light.png').default,
    imageDark: require('../../../static/img/prefooter-dark.png').default
}

export default function HomepagePreFooter() {
    return (
        <section className={styles.prefooterWrap}>
            <div className={styles.prefooterFirstColumn}>
                <h2 className={styles.prefooterTitle}>{PreFooterData.title}</h2>
                <p className={styles.prefooterText}>{PreFooterData.text}</p>
                <Link to={PreFooterData.button.href} className={styles.prefooterButton}>
                    <span>{PreFooterData.button.title}</span>
                    <ChevronRightImg/>
                </Link>
            </div>
            <img data-theme-mode="light" className={styles.prefooterImage} src={PreFooterData.imageLight} alt={PreFooterData.title}/>
            <img data-theme-mode="dark" className={styles.prefooterImage} src={PreFooterData.imageDark} alt={PreFooterData.title}/>
        </section>
    );
}
