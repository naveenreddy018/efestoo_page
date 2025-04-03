import React from 'react';
import styles from './promobanner.module.css';
import Image from "next/image";

const PromoCard: React.FC = () => {
  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <h2 className={styles.title}>
          Bring your vision to life—create and manage extraordinary events effortlessly!
        </h2>
        <p className={styles.subtitle}>Start your journey as a creator today</p>
        <button className={styles.button}>Create Event</button>
      </div>
      <div className={styles.image}>
        <Image width={500} height={300} src="/family.png" alt="Group 33" />
      </div>
    </div>
  );
};

export default PromoCard;
