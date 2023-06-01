import React from 'react';
import styles from './HomepageDeveloperLinks.module.css';
import Link from '@docusaurus/Link';
import clsx from "clsx";

const DeveloperList = [
    {
        link: 'https://1inch.io/foundation-grant-program/',
        button: {
            title: 'Apply for Grant',
            href: 'https://airtable.com/shr899d3K9Bw963CP'
        },
        image: (
            <div className={clsx(styles.developerCardImage, styles.foundationGrantProgramImage)}/>
        ),
        title: 'Grants program',
        description: (
            <>
                Incentivizing individual developers and teams to build on the 1inch Network's protocols and contribute
                to protocol evolution.
            </>
        )
    },
    {
        button: {
            title: 'Report a Bug',
            href: 'https://airtable.com/shrddQOOkm3hOLuzd'
        },
        image: (
            <div className={clsx(styles.developerCardImage, styles.bugBountyImage)}/>
        ),
        title: 'Bug bounty program',
        description: (
            <>
                Offering monetary rewards to "white hats" for successfully discovering and reporting vulnerabilities or
                bugs in 1inch Network protocols and products.
            </>
        )
    },
    {
        button:{
            title: 'View Articles',
            href: './docs/educational-resources/introduction'
        },
        image: (
            <div className={clsx(styles.developerCardImage, styles.educationalResourcesImage)}/>
        ),
        title: 'Educational resources',
        description: (
            <>
                A collection of educational resources for developers, including guides, tutorials, and articles.
            </>
        )
    }
];

function DeveloperLink({image, title, description, link, button}) {
    return (
        <div className={styles.developerCard}>
            <div>{image}</div>
            <h3 className={styles.developerCardTitle}>{title}</h3>
            <div className={styles.developerCardText}>
                {description}
                &nbsp;
                {link && <Link className={styles.developerCardLink} to={link}>Read more</Link>}
            </div>

            <Link className={styles.developerCardButton} to={button.href}>{button.title}</Link>
        </div>
    )
}

export default function HomepageDeveloperLinks() {
    return (
        <section>
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
