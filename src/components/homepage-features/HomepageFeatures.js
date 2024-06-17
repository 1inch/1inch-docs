import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';
import ArrowOutside from '../../../static/img/icons/arrow-outside.svg';
import Link from "@docusaurus/core/lib/client/exports/Link";

const FeatureList = [
    {
        title: 'Aggregation Protocol V6',
        description: 'The 1inch Aggregation Protocol facilitates cost-efficient and secure swap transactions across multiple liquidity sources',
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
                href: 'https://dune.com/1inch/aggregator'
            },
            {
                title: 'Smart contract v5',
                href: 'https://etherscan.io/address/0x1111111254EEB25477B68fb85Ed929f73A960582'
            },
            {
                title: 'Smart contract v6',
                href: 'https://etherscan.io/address/0x111111125421ca6dc452d289314280a0f8842a65'
            },
            {
                title: 'API',
                isSwagger: true,
                href: '/docs/aggregation-protocol/api/swagger'
            },
        ]
    },
    {
        title: 'Limit Order Protocol V4',
        description: 'The 1inch Limit Order Protocol facilitates the most innovative and flexible limit order swap opportunities in DeFi',
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
                href: 'https://dune.com/k06a/1inch-Limit-Order-Protocol'
            },
            {
                title: 'Smart contract',
                href: 'https://etherscan.io/address/0x111111125421ca6dc452d289314280a0f8842a65'
            },
            {
                title: 'API',
                isSwagger: true,
                href: '/docs/limit-order-protocol/api'
            },
        ]
    },
    {
        title: 'Spot price aggregator',
        description: 'The 1inch spot price aggregator is a set of smart contracts that extract price data for tokens traded on DEXes from the blockchain',
        image: (
            <div className={clsx(styles.featureCardImage, styles.spotPriceAggregatorImage)}/>
        ),
        links: [
            {
                title: 'Introduction',
                href: '/docs/spot-price-aggregator/introduction'
            },
            {
                title: 'Github',
                href: 'https://github.com/1inch/spot-price-aggregator'
            },
            {
                title: 'Smart contract',
                href: 'https://etherscan.io/address/0x07D91f5fb9Bf7798734C3f606dB065549F6893bb'
            },
        ]
    },
    {
        title: '1inch Fusion mode',
        description: '1inch Fusion Mode offer users a way to execute swaps without gas spend and risks of being front-run.',
        image: (
            <div className={clsx(styles.featureCardImage, styles.fusion)}/>
        ),
        links: [
            {
                title: 'Introduction',
                href: '/docs/fusion-swap/introduction'
            },
            {
                title: 'How to become a resolver',
                href: 'docs/fusion-swap/becoming-a-resolver/how-to-become-resolver'
            },
            {
                title: 'Resolver’s setup script example',
                href: 'docs/fusion-swap/becoming-a-resolver/resolver-setup-script-example'
            },
            {
                title: 'Contract interaction',
                href: 'docs/fusion-swap/becoming-a-resolver/contracts-interaction'
            },
        ]
    },
];

function Feature({title, description, image, links}) {
    return (
        <div className={styles.featureCard}>
            <div>
                <div>
                    <h3 className={styles.featureCardTitle}>{title}</h3>
                    <p className={styles.featureCardText}>{description}</p>
                </div>
                {image}
            </div>
            <div className={styles.featureCardLinks}>
                {
                    links.map((link, index) => {
                        if (link.title) {
                            return (
                                <Link href={link.href} className={styles.featureCardLinkWrap} key={index}>
                                    <p className={styles.featureCardLinkTitle}>
                                        <span>{link.title}</span>
                                        {link.isSwagger && <span className={styles.featureCardLinkSwagger}>Swagger</span>}
                                        {link.versionLabel && <span className={styles.featureCardLinkVersionLabel}>{link.versionLabel}</span>}
                                    </p>
                                    <ArrowOutside className={styles.featureCardLinkIcon} />
                                </Link>
                            )
                        } else {
                            return <span/>
                        }

                    })
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
