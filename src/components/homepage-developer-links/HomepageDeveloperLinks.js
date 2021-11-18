import React from 'react';
import styles from './HomepageDeveloperLinks.module.css';
import Link from '@docusaurus/Link';
import grantsProgramImage from '../../../static/img/grants-program.png';
import bugBountyImage from '../../../static/img/bug-bounty.png';
import smartImage from '../../../static/img/smart.png';
import web3Image from '../../../static/img/web3.png';

const DeveloperList = [
    {
        link: 'https://1inch.io',
        image: grantsProgramImage,
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
        image: bugBountyImage,
        title: 'Bug bounty',
        description: (
            <>
                Engaging adopters and maximizing the network's decentralization through growing stakeowner numbers and
                their participation
            </>
        ),
    },
    {
        link: 'https://1inch.io',
        image: smartImage,
        title: 'Smartcontracts',
        description: (
            <ul className={styles.developerCardList}>
                <li>cumukative-merkle-drop</li>
                <li>offchain-oracle</li>
                <li>cumukative-merkle-drop</li>
                <li>offchain-oracle</li>
            </ul>
        ),
    },
    {
        link: 'https://1inch.io',
        image: web3Image,
        title: 'Web 3.0',
        description: (
            <ul className={styles.developerCardList}>
                <li>permit-signed-approvals-utils</li>
                <li>multicall</li>
                <li>multicall</li>
                <li>more</li>
            </ul>
        ),
    }
];

function DeveloperLink({image, title, description, link}) {
    return (
        <Link className={styles.developerCard} to={link}>
            <img className={styles.developerCardImage} src={image} alt={title}/>
            <h3 className={styles.developerCardTitle}>{title}</h3>
            <div className={styles.developerCardText}>{description}</div>
        </Link>
    );
}

export default function HomepageDeveloperLinks() {
    return (
        <section className="page-container">
            <h2 className={styles.developerLinksTitle}>Developer links</h2>
            <div className={styles.developerLinksWrap}>
                {
                    DeveloperList.map((props, idx) => (
                        <DeveloperLink key={idx} {...props} />
                    ))
                }
            </div>
        </section>
    );
}
