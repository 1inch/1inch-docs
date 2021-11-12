import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFooter.module.css';
import Link from "@docusaurus/Link";

const FooterList = [
    {
        text: 'An entry point to the 1inch Network\'s tech. The 1inch dApp is #1 DeFi aggregator, offering access to the most liquidity and the best token swap rates on various DEXes, with unique features, including partial fill, the Chi gas token and the ability to find the best swap paths across multiple liquidity sources.',
        button: 'Launch dApp',
        linkButton: 'https://app.1inch.io/#/1/swap/ETH/1INCH',
        image: require('../homepage-footer/img/image-footer.png').default
    }
]

function FooterLink({ text, buttonText, linkButton, image}) {
    return (
      <div className={styles.footerCard}>
          <div>
              <p className={styles.textColor}>{text}</p>
              <Link to={linkButton}>
                  <p>{buttonText}</p>
              </Link>
          </div>
        <img src={image} alt={image} />
      </div>
    );
}

export default function homepageFooter () {
    return (
        <section>
            <div className="container">
                <h2>1inch dApp</h2>
                <div className={styles.developerList}>
                    {FooterList.map((props, idx) => (
                        <FooterLink key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}
