import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';
import ArrowOutside from '../../../static/img/icons/arrow-outside.svg';

const FeatureList = [
    {
        title: 'Aggregation protocol V4',
        description: 'Engaging adopters and maximizing the network\'s decentralization through growing stakeowner numbers',
        image: (
            <div className={clsx(styles.featureCardImage, styles.aggregationProtocolImage)}/>
        ),
        links: [
            {
                title: 'Introduction',
                href: '/docs/aggregation-protocol/introduction'
            },
            {
                title: 'Dune analytics',
                href: 'https://dune.xyz/k06a/1inch'
            },
            {
                title: 'Smart contract',
                href: 'https://etherscan.io/address/0x1111111254fb6c44bac0bed2854e76f90643097d'
            },
            {
                title: 'Enterprise API',
                href: 'https://1inch.io/api/'
            },
            {
                title: 'API',
                isSwagger: true,
                href: '/docs/aggregation-protocol/api/swagger'
            },
        ]
    },
    {
        title: 'Limit order protocol V2',
        description: 'Running yield farming programs that have proven to be efficient bootstrapping tools for potential bluechips of the DeFi space',
        image: (
            <div className={clsx(styles.featureCardImage, styles.limitOrderProtocolImage)}/>
        ),
        links: [
            {
                title: 'Introduction',
                href: '/docs/limit-order-protocol/introduction'
            },
            {
                title: 'Dune analytics',
                href: 'https://dune.xyz/k06a/1inch-Limit-Order-Protocol'
            },
            {
                title: 'Smart contract',
                href: 'https://etherscan.io/address/0x119c71d3bbac22029622cbaec24854d3d32d2828'
            },
            {
                title: 'API',
                isSwagger: true,
                href: '/docs/limit-order-protocol/api'
            },
        ]
    },
];

function Feature({title, description, image, links}) {
    return (
        <div className={styles.featureCard}>
            <div>
                <h3 className={styles.featureCardTitle}>{title}</h3>
                <p className={styles.featureCardText}>{description}</p>
            </div>
            {image}
            <div className={styles.featureCardLinks}>
                {
                    links.map((link, index) => (
                        <a href={link.href} className={styles.featureCardLinkWrap} key={index}>
                            <p className={styles.featureCardLinkTitle}>
                                <span>{link.title}</span>
                                {link.isSwagger && <span className={styles.featureCardLinkSwagger}>Swagger</span>}
                                {link.versionLabel && <span className={styles.featureCardLinkVersionLabel}>{link.versionLabel}</span>}
                            </p>
                            <ArrowOutside className={styles.featureCardLinkIcon} />
                        </a>
                    ))
                }
            </div>
        </div>
    );
}

export default function HomepageFeatures() {
    return (
        <section>
            <h2 className={styles.featureListTitle}>Protocols</h2>
            <div className={styles.featureList}>
                {
                    FeatureList.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))
                }
            </div>
        </section>
    );
}
