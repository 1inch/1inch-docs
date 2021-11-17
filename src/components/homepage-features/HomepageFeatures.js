import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';
import Link from '@docusaurus/Link';
import aggregationProtocolImage from '../../../static/img/aggregationProtocol.png';
import limitOrderProtocolImage from '../../../static/img/limit-order-protocol.png';
import liquidityProtocolImage from '../../../static/img/liquidity-protocol.png';
import GithubImage from '../../../static/img/icons/github-link.svg';
import ArrowOutside from '../../../static/img/icons/arrow-outside.svg';

const FeatureList = [
    {
        title: 'Aggregation protocol',
        description: 'Engaging adopters and maximizing the network\'s decentralization through growing stakeowner numbers',
        image: aggregationProtocolImage,
        hrefGithub: 'https://github.com/1inch',
        links: [
            {
                title: 'Documentation',
                href: '/docs/aggregation-protocol/introduction'
            },
            {
                title: 'API (swagger)',
                href: '/docs/aggregation-protocol/swagger'
            },
            {
                title: 'Contacts',
                href: ''
            }
        ]
    },
    {
        title: 'Limit order protocol',
        description: 'Running yield farming programs that have proven to be efficient bootstrapping tools for potential bluechips of the DeFi space',
        image: limitOrderProtocolImage,
        hrefGithub: 'https://github.com/1inch',
        links: [
            {
                title: 'Documentation',
                href: '/docs/limit-order-protocol/introduction'
            },
            {
                title: 'API (swagger)',
                href: '/docs/limit-order-protocol/api'
            },
            {
                title: 'Contacts',
                href: ''
            }
        ]
    },
    {
        title: 'Liquidity protocol',
        description: 'Incentivizing individual developers and teams to build on the 1inch Network\'s protocols',
        image: liquidityProtocolImage,
        hrefGithub: 'https://github.com/1inch',
        links: [
            {
                title: 'Documentation',
                href: ''
            },
            {
                title: 'API (swagger)',
                href: ''
            },
            {
                title: 'Contacts',
                href: ''
            }
        ]
    },
];

function Feature({title, description, image, href, hrefGithub, links}) {
    return (
        <div className={styles.featureCard}>
            <div className={styles.featureCardTitleWrap}>
                <h3>{title}</h3>
                <Link className={styles.featureCardGithubLink} to={hrefGithub}>
                    <GithubImage/>
                    {/*<img className='icons-card' src='img/icons/github-link.svg' alt="github"/>*/}
                </Link>
            </div>
            <p className={styles.featureCardText}>{description}</p>
            <img className={styles.featureCardImage} src={image} alt={title}/>
            {
                links.map((link, index) => (
                    <Link to={link.href} className={styles.featureCardLinkWrap} key={index}>
                        <p>{link.title}</p>
                        <ArrowOutside/>
                    </Link>
                ))
            }
        </div>
    );
}

export default function HomepageFeatures() {
    return (
        <section className={clsx('page-container', styles.featureList)}>
            {
                FeatureList.map((props, idx) => (
                    <Feature key={idx} {...props} />
                ))
            }
        </section>
    );
}
