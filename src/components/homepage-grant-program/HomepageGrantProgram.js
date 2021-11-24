import React from 'react';
import clsx from 'clsx';
import styles from './HomepageGrantProgram.module.css';
import Link from "@docusaurus/Link";
import ChevronRightImg from '../../../static/img/chevron-right.svg';

const PreFooterData = {
    title: '1inch Foundation grant program',
    text: 'The 1inch Foundation grant program fosters growth and expansion of the 1inch Network and incentivizes contributions through grants and resources',
    button: {
        title: 'Apply for a grant',
        href: 'https://airtable.com/shr899d3K9Bw963CP'
    },
}

export default function homepageFooter() {
    return (
        <section className={clsx('page-container', styles.prefooterWrap)}>
            <div className={styles.prefooterFirstColumn}>
                <h2 className={styles.prefooterTitle}>{PreFooterData.title}</h2>
                <p className={styles.prefooterText}>{PreFooterData.text}</p>
                <Link to={PreFooterData.button.href} className={styles.prefooterButton}>
                    <span>{PreFooterData.button.title}</span>
                    <ChevronRightImg/>
                </Link>
            </div>
            <img className={styles.prefooterImage} src='../../../static/img/grant-cup.png' alt='Grant program image'/>
        </section>
    );
}
