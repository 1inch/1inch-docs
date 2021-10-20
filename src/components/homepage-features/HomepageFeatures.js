import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';
import Link from "@docusaurus/Link";

const FeatureList = [
  {
    title: 'Aggregation protocol',
    link: 'docs/aggregation-protocol/introduction',
    image: require('../../../static/img/aggregation-protocol.png').default,
    description: (
      <>
          The protocol sources liquidity from various exchanges and is capable
          of splitting a single trade transaction across multiple DEXes to ensure the best rates.
      </>
    ),
  },
  {
    title: 'Liquidity protocol',
    link: 'docs/liquidity-protocol/introduction',
    image: require('../../../static/img/liquidity-protocol.png').default,
    description: (
      <>
          Earn with 1inch by providing liquidity to pools and collect extra
          rewards in 1INCH tokens for participating in liquidity mining programs.
      </>
    ),
  },
  {
    title: 'Limit order protocol',
    link: 'docs/limit-order-protocol/introduction',
    image: require('../../../static/img/limit-order-protocol.png').default,
    description: (
      <>
          Enjoy the most innovative and flexible limit order functionality in DeFi
      </>
    ),
  },
];

function Feature({image, title, description, link}) {
  return (
    <Link className={'feature-item ' + clsx('col col--4')} to={link}>
      <div className="text--center">
        <img className={styles.featureSvg} src={image} alt={title}/>
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </Link>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
