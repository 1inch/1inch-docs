import React from 'react';
import styles from './HomepageCardsGrantProgram.module.css';
import Link from '@docusaurus/Link';
import clsx from "clsx";

const GrantProgram = [
    {
        link: 'https://1inch.io/foundation-grant-program/',
        image: (
            <div className={clsx(styles.grantProgramCardImage, styles.networkGrantProgramImage)}/>
        ),
        title: 'Network development',
        description: (
            <>
                <ol>
                    <li>Product development</li>
                    <li>Integration</li>
                    <li>Interoperability</li>
                    <li>Security</li>
                </ol>
            </>
        ),
    },
    {
        link: 'https://airtable.com/shrddQOOkm3hOLuzd',
        image: (
            <div className={clsx(styles.grantProgramCardImage, styles.communityGrantProgramImage)}/>
        ),
        title: 'Community development',
        description: (
            <ol>
                <li>Education</li>
                <li>Community building/ events</li>
                <li>Social</li>
            </ol>
        ),
    },
    {
        link: 'https://airtable.com/shrddQOOkm3hOLuzd',
        image: (
            <div className={clsx(styles.grantProgramCardImage, styles.researchGrantProgramImage)}/>
        ),
        title: 'Research & analytics',
        description: (
            <ol>
                <li>Advanced data analytics </li>
                <li>Innovative research</li>
                <li>Simulation of protocol performance/ efficiency</li>
            </ol>
        ),
    },
];

function GrantProgramCard({image, title, description, link}) {
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

export default function HomepageCardsGrantProgram() {
    return (
        <section className="page-container">
            <h2 className={styles.developerLinksTitle}>Grant program</h2>
            <div className={styles.developerLinksWrap}>
                {
                    GrantProgram.map((props, idx) => (
                        <GrantProgramCard key={idx} {...props} />
                    ))
                }
            </div>
        </section>
    );
}
