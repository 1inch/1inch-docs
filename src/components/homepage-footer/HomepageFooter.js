import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFooter.module.css';
import Link from "@docusaurus/Link";


const footerLinks = [
    {
        title: 'Protocols',
        links: [
            {
                title: 'Liquidity Protocol',
                link: 'https://1inch.io/liquidity-protocol/'
            },
            {
                title: 'Aggregation Protocol',
                link: 'https://1inch.io/aggregation-protocol/'
            },
            {
                title: 'Limit Order Protocol',
                link: 'https://1inch.io/limit-order-protocol/'
            },
            {
                title: 'Tokens',
                link: 'https://1inch.io/token/'
            }
        ]
    },
    {
        title: 'Governance',
        links: [
            {
                title: '1inch DAO',
                link: 'https://1inch.io/dao/'
            },
            {
                title: '1INCH token',
                link: 'https://1inch.io/token/'
            },
            {
                title: 'Forum',
                link: 'https://gov.1inch.io/'
            }
        ]
    },
    {
        title: 'Support',
        links: [
            {
                title: 'Help center',
                link: 'https://help.1inch.io/en/'
            },
            {
                title: 'API',
                link: '/'
            },
            {
                title: 'Press room',
                link: 'https://1inch.io/press-room/'
            },
            {
                title: 'Terms of service',
                link: 'https://1inch.io/assets/1inch_network_terms_of_use.pdf'
            },
            {
                title: 'Privacy policy',
                link: 'https://1inch.io/assets/1inch_network_privacy_policy.pdf'
            }
        ]
    },
    {
        title: 'Legacy',
        links: [
            {
                title: '1inch v.1 (Legacy)',
                link: '/'
            },
            {
                title: '1inch v.2 (Legacy)',
                link: '/'
            },
            {
                title: 'Earn (Legacy)',
                link: '/'
            }
        ]
    }
]

function LinkFooter({title, link}) {
    return (
        <Link className={styles.footerLink} to={link}>
            <p>{title}</p>
        </Link>
    );
}

export default function HomepageFooter() {
    return (
        <section>
            <hr />
            <div className="container">
                <div className={styles.footer}>
                    <div  className={styles.footerLinksBlock}>
                        {
                            footerLinks.map((props, idx) => (
                                <div>

                                    <h3 className={styles.footerTitle} key={idx}>{props.title}</h3>
                                    {
                                        props.links.map((LinkProps, index) => (
                                            <LinkFooter {...LinkProps} key={index}/>
                                        ))
                                    }
                                </div>
                            ))
                        }
                    </div>
                    <div>
                        <p className={styles.footerTitle}>Subscribe to 1inch newsletter</p>
                        <p className={styles.colorText}>Get the latest news and updates</p>
                        <Link to='https://cdn.forms-content.sg-form.com/b14fb08e-939b-11eb-873a-46ac7bfee17b' className={styles.buttonFooter}>
                            <span className={styles.buttonText}>Subscribe</span>
                            <img src="../../../static/img/chevron-right.svg" />
                        </Link>
                        <div className={styles.socialMedia}>
                            <Link to='https://blog.1inch.io/'>
                                <img src="../../../static/img/icons/twitter.svg" alt="Medium"/>
                            </Link>
                            <Link to='https://www.reddit.com/r/1inch/'>
                                <img src="../../../static/img/icons/reddit.svg" alt="Reddit"/>
                            </Link>
                            <Link to='https://twitter.com/1inch'>
                                <img src="../../../static/img/icons/medium.svg" alt="Twitter"/>
                            </Link>
                            <Link to='https://discord.com/invite/1inch'>
                                <img src="../../../static/img/icons/discord.svg" alt="Discord"/>
                            </Link>
                            <Link to='https://www.youtube.com/channel/UCk0nvK4bHpteQXZKv7lkq5w'>
                                <img src="../../../static/img/icons/youtube.svg" alt="Youtube"/>
                            </Link>
                            <Link to='https://t.me/OneInchNetwork'>
                                <img src="../../../static/img/icons/telegram.svg" alt="Telegram"/>
                            </Link>
                            <Link to='https://github.com/1inch'>
                                <img src="../../../static/img/icons/github.svg" alt="Github"/>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
