
'use client';
import React from 'react';
import styles from './Features.module.css';
import Image from 'next/image';

const features = [
  {
    title: 'All Events in ONE place',
    desc: 'Code, compete, and compete with the best',
    icon: '/All.png',
    yellow: true,
  },
  {
    title: 'Personalized organiser page',
    desc: 'Code, compete, and compete with the best',
    icon: '/personal.png',
  },
  {
    title: 'Seamless registration management',
    desc: 'Code, compete, and compete with the best',
    icon: '/seamless.png',
    yellow: true,
  },
  {
    title: 'Secure payment processing',
    desc: 'Code, compete, and compete with the best',
    icon: '/secure.png',
  },

];

const WhyEfestoo = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.topIcons}>
        <div>
          <Image src="/Group1.png" alt="Best" width={120} height={120} />

        </div>
        <div>
          <Image src="/Group2.png" alt="Meet" width={120} height={120} />

        </div>
        <div>
          <Image src="/Group3.png" alt="Discover" width={120} height={120} />

        </div>
        <div>
          <Image src="/Group4.png" alt="Skills" width={120} height={120} />

        </div>
      </div>

      <div className={styles.titleBlock}>
        <h2>Why Choose <span>Efestoo.com</span></h2>
        <p>From planning to payment, Efestoo.com powers your events with ease!</p>
        <button className={styles.exploreBtn}>Explore Efestoo.com</button>
      </div>

      <div className={styles.featuresGrid}>
        {features.map((feature, index) => (
          <div
            key={index}
            className={`${styles.featureCard} ${feature.yellow ? styles.yellow : ''}`}
          >
            <Image src={feature.icon} alt={feature.title} width={40} height={40} />
            <h4>{feature.title}</h4>
            <p>{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyEfestoo;
