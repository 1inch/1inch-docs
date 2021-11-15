import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';
import Link from "@docusaurus/Link";

const FeatureList = [
    {
        title: 'Aggregation protocol',
        link: 'docs/aggregation-protocol/introduction',
        linkGithub: 'https://github.com/1inch',
        title_1: 'Documentation',
        link_1: 'https://docs.1inch.io/api/',
        title_2: 'API (swagger)',
        link_2: 'https://1inch.io',
        title3: 'Contacts',
        link_3: 'https://1inch.io/api/',
        image: require('../../../static/img/aggregationProtocol.png').default,
        description: (
            <>
                Engaging adopters and maximizing the network's decentralization through growing stakeowner numbers
            </>
        ),
    },
    {
        title: 'Limit order protocol',
        link: 'docs/limit-order-protocol/introduction',
        image: require('../../../static/img/limit-order-protocol.png').default,
        title_1: 'Documentation',
        link_1: 'https://docs.1inch.io/api/',
        title_2: 'API (swagger)',
        link_2: 'https://1inch.io',
        title3: 'Contacts',
        description: (
            <>
                Running yield farming programs that have proven to be efficient bootstrapping tools for potential
                bluechips
                of the DeFi space,
            </>
        ),
    },
    {
        title: 'Liquidity protocol',
        link: 'docs/limit-order-protocol/introduction',
        image: require('../../../static/img/liquidity-protocol-new.png').default,
        title_1: 'Documentation',
        link_1: 'https://docs.1inch.io/api/',
        title_2: 'API (swagger)',
        link_2: 'https://1inch.io',
        title3: 'Contacts',
        description: (
            <>
                Incentivizing individual developers and teams to build on the 1inch Network's protocols
            </>
        ),
    },
];

function Feature({image, title, description, link, linkGithub, title_1, link_1, title_2, link_2, title3, link3}) {
    return (
        <Link className={styles.featureCard} to={link}>
            <div className={styles.featureCardTitle}>
                <h3>{title}</h3>
                <Link to={linkGithub}>
                    <img className='icons-card' src='img/icons/github.svg' alt="github"/>
                </Link>
            </div>
            <p className={styles.featureCardText}>{description}</p>
            <img src={image} alt={title}/>
            <Link to={link_1} className={styles.featureCardTitle}>
                <p>{title_1}</p>
                <img src='img/icons/arrow-outside.svg'/>
            </Link>
            <Link to={link_2} className={styles.featureCardTitle}>
                <p>{title_2}</p>
                <img src='img/icons/arrow-outside.svg'/>
            </Link>
            <Link to={link3} className={styles.featureCardTitle}>
                <p>{title3}</p>
                <img src='img/icons/arrow-outside.svg'/>
            </Link>
        </Link>
    );
}

export default function HomepageFeatures() {
    return (
        <section>
            <div className="container">
                <div className={styles.featureList}>
                    {FeatureList.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}
