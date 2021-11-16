import React from 'react';
import clsx from 'clsx';
import styles from './HomepagePreFooter.module.css';
import Link from "@docusaurus/Link";

const PreFooterList = [
    {
        title: '1inch dApp',
        text: 'An entry point to the 1inch Network\'s tech. The 1inch dApp is #1 DeFi aggregator, offering access to the most liquidity and the best token swap rates on various DEXes, with unique features, including partial fill, the Chi gas token and the ability to find the best swap paths across multiple liquidity sources.',
        button: 'Launch dApp',
        linkButton: 'https://app.1inch.io/#/1/swap/ETH/1INCH',
        image: require('../homepage-prefooter/img/image-footer.png').default
    }
]

function FooterLink({title, text, buttonText, linkButton, image}) {
    return (
      <div className={styles.footerCard}>
          <div>
              <h2>{title}</h2>
              <p className={styles.textColor}>{text}</p>
              <Link href={linkButton} className={styles.buttonPreFooter}>
                  <span>Launch dApp</span>
                  <img src='../../../static/img/chevron-right.svg' />
              </Link>
          </div>
        <img className={styles.imgFooter} src={image} alt={image} />
      </div>
    );
}

export default function homepageFooter () {
    return (
        <section>
            <div className="container">
                <div className={styles.developerList}>
                    {PreFooterList.map((props, idx) => (
                        <FooterLink key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}
