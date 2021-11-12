import React from 'react';
import clsx from 'clsx';
import styles from './HomepageDeveloperLinks.module.css';
import Link from "@docusaurus/Link";

const DeveloperList = [
    {
        link: 'https://1inch.io',
        image: require('../homepage-developer-links/img/grants-program.png').default,
        title: 'Grants program',
        description: (
            <>
                Incentivizing individual developers and teams to build on the 1inch Network's protocols and contribute
                to protocol evolution.
            </>
        ),
    },
    {
        link: 'https://1inch.io',
        image: require('../homepage-developer-links/img/bug-bounty.png').default,
        title: 'Bug bounty',
        description: (
            <>
                Engaging adopters and maximizing the network's decentralization through growing stakeowner numbers and their participation
            </>
        ),
    },
    {
        link: 'https://1inch.io',
        image: require('../homepage-developer-links/img/grants-program.png').default,
        title: 'Smartcontracts',
        description: (
            <ul>
                <li>cumukative-merkle-drop</li>
                <li>offchain-oracle</li>
                <li>cumukative-merkle-drop</li>
                <li>offchain-oracle</li>
            </ul>
        ),
    },
    {
        link: 'https://1inch.io',
        image: require('../homepage-developer-links/img/grants-program.png').default,
        title: 'Grants program',
        description: (
            <ul>
                <li>cumukative-merkle-drop</li>
                <li>offchain-oracle</li>
                <li>cumukative-merkle-drop</li>
                <li>offchain-oracle</li>
            </ul>
        ),
    }
];

function DeveloperLink({image, title, description, link}) {
    return (
        <Link className={styles.linkCard} to={link}>
            <div className={styles.developerCard}>
                <img className={styles.imageCard} src={image} alt=""/>
                <h3 className={styles.developerTitleColor}>{title}</h3>
                <div className={styles.developerText}>{description}</div>
            </div>
        </Link>
    );
}

export default function HomepageDeveloperLinks() {
    return (
        <section>
            <div className="container">
                <h2>Developer links</h2>
                <div className={styles.developerList}>
                    {DeveloperList.map((props, idx) => (
                        <DeveloperLink key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}
