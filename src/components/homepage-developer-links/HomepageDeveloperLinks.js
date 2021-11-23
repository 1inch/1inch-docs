import React from 'react';
import styles from './HomepageDeveloperLinks.module.css';
import Link from '@docusaurus/Link';
import clsx from "clsx";

const DeveloperList = [
    {
        link: 'https://1inch.io/foundation-grant-program/',
        image: (
            <div className={clsx(styles.developerCardImage, styles.foundationGrantProgramImage)}/>
        ),
        title: 'Grants program',
        description: (
            <>
                Incentivizing individual developers and teams to build on the 1inch Network's protocols and contribute
                to protocol evolution.
            </>
        ),
    },
    {
        link: 'https://airtable.com/shrddQOOkm3hOLuzd',
        image: (
            <div className={clsx(styles.developerCardImage, styles.bugBountyImage)}/>
        ),
        title: 'Bug bounty',
        description: (
            <>
                Engaging adopters and maximizing the network's decentralization through growing stakeowner numbers and
                their participation
            </>
        ),
    },
    {
        link: '',
        image: (
            <div className={clsx(styles.developerCardImage, styles.smartContractsImage)}/>
        ),
        title: 'Smartcontracts',
        description: (
            <ul className={styles.developerCardList}>
                <li>
                    <a className={styles.developerCardListLink} href="https://github.com/1inch/merkle-distribution">cumulative-merkle-drop</a>
                </li>
                <li>
                    <a className={styles.developerCardListLink} href="https://github.com/1inch/offchain-oracle">off-chain-oracle</a>
                </li>
                <li>
                    <a className={styles.developerCardListLink} href="https://github.com/1inch">more</a>
                </li>
            </ul>
        ),
    },
    {
        link: '',
        image: (
            <div className={clsx(styles.developerCardImage, styles.web3Image)}/>
        ),
        title: 'Web 3.0',
        description: (
            <ul className={styles.developerCardList}>
                <li>
                    <a className={styles.developerCardListLink} href="https://github.com/1inch/permit-signed-approvals-utils">permit-signed-approvals-utils</a>
                </li>
                <li>
                    <a className={styles.developerCardListLink} href="https://github.com/1inch/multicall">multicall</a>
                </li>
                <li>
                    <a className={styles.developerCardListLink} href="https://github.com/1inch">more</a>
                </li>
            </ul>
        ),
    }
];

function DeveloperLink({image, title, description, link}) {
    return link
        ? (
            <Link className={clsx(styles.developerCard, styles.developerCardLink)} to={link}>
                <div>{image}</div>
                <h3 className={styles.developerCardTitle}>{title}</h3>
                <div className={styles.developerCardText}>{description}</div>
            </Link>
        )
        : (
            <div className={styles.developerCard}>
                <div>{image}</div>
                <h3 className={styles.developerCardTitle}>{title}</h3>
                <div className={styles.developerCardText}>{description}</div>
            </div>
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
