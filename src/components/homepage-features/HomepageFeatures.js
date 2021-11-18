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
                href: '/docs/aggregation-protocol/api/swagger'
            },
            {
                title: 'Contracts',
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
                title: 'Contracts',
                href: '/docs/limit-order-protocol/smart-contract/LimitOrderProtocol'
            }
        ]
    },
];

function Feature({title, description, image, hrefGithub, links}) {
    return (
        <div className={styles.featureCard}>
            <div>
                <div className={styles.featureCardTitleWrap}>
                    <h3 className={styles.featureCardTitle}>{title}</h3>
                    <Link className={styles.featureCardGithubLink} to={hrefGithub}>
                        <GithubImage/>
                        {/*<img className='icons-card' src='img/icons/github-link.svg' alt="github"/>*/}
                    </Link>
                </div>
                <p className={styles.featureCardText}>{description}</p>
            </div>
            <img className={styles.featureCardImage} src={image} alt={title}/>
            <div>
                {
                    links.map((link, index) => (
                        <Link to={link.href} className={styles.featureCardLinkWrap} key={index}>
                            <p>{link.title}</p>
                            <ArrowOutside/>
                        </Link>
                    ))
                }
            </div>
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
