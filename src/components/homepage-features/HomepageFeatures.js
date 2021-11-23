import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';
import Link from '@docusaurus/Link';
import GithubImage from '../../../static/img/icons/github-link.svg';
import ArrowOutside from '../../../static/img/icons/arrow-outside.svg';

const FeatureList = [
    {
        title: 'Aggregation protocol',
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
                href: '/docs/aggregation-protocol/introduction'
            },
            {
                title: 'Smart contract',
                href: ''
            },
            {
                title: 'Enterprise API',
                href: '/docs/aggregation-protocol/api/swagger'
            },
            {
                title: 'API (swagger)',
                href: '/docs/aggregation-protocol/api/swagger'
            },
        ]
    },
    {
        title: 'Limit order protocol',
        description: 'Running yield farming programs that have proven to be efficient bootstrapping tools for potential bluechips of the DeFi space',
        image: (
            <div className={clsx(styles.featureCardImage, styles.limitOrderProtocolImage)}/>
        ),
        links: [
            {
                title: 'Introduction',
                href: '/docs/aggregation-protocol/introduction'
            },
            {
                title: 'Dune analytics',
                href: '/docs/aggregation-protocol/introduction'
            },
            {
                title: 'Smart contract',
                href: '/'
            },
            {
                title: 'Enterprise API',
                href: '/docs/aggregation-protocol/api/swagger'
            },
            {
                title: 'API (swagger)',
                href: '/docs/aggregation-protocol/api/swagger'
            },
        ]
    },
];

function Feature({title, description, image, hrefGithub, links}) {
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
                        <a href={link.href} target="_blank" className={styles.featureCardLinkWrap} key={index}>
                            <p>{link.title}</p>
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
        <section className="page-container">
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
