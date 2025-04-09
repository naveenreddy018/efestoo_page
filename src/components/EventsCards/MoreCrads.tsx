'use client';

import React, { useState } from 'react';
import styles from './MoreCards.module.css';
import Image from 'next/image';
import { FaMapMarkerAlt } from 'react-icons/fa';

const allEvents = new Array(15).fill({
  title: 'Sanskriti Utsav 2025',
  location: 'NIT Dhanbad Hall',
  date: '23rd April',
  time: '6:30 PM',
  type: 'PAID',
  isSellingFast: false,
  sellingDate: '18 March',
  daysLeft: '1 day left',
});

allEvents[1].type = 'PAID';
allEvents[1].isSellingFast = true;

const MoreEvents = () => {
  const [liked, setLiked] = useState(Array(allEvents.length).fill(false));
  const [currentPage] = useState(1);
  const cardsPerPage = 6;

  const toggleLike = (index: number) => {
    setLiked((prev) => prev.map((item, i) => (i === index ? !item : item)));
  };

  // const totalPages = Math.ceil(allEvents.length / cardsPerPage);
  const startIdx = (currentPage - 1) * cardsPerPage;
  const currentEvents = allEvents.slice(startIdx, startIdx + cardsPerPage);



  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Explore Latest Events</h2>
      <div className={styles.grid}>
        {currentEvents.map((event, index) => {
          const globalIndex = startIdx + index;
          return (
            <div key={globalIndex} className={styles.card}>
              <div className={styles.imageWrapper}>
                <Image
                  src="/updates.png"
                  alt={event.title}
                  width={400}
                  height={250}
                />
                <span className={styles.dateTag}>{event.date}</span>
              </div>
              <div className={styles.cardBody}>
                <div className={styles.title}>
                  {event.title}
                  <span
                    className={`${styles.badge} ${event.type === 'PAID' ? styles.paid : styles.free
                      }`}
                  >
                    <span className={styles.rupeeSymbol}>₹</span> {event.type}
                  </span>
                </div>
                <div className={styles.info}>
                  <div className={styles.Dates}>
                    <div>
                      <span>
                        <FaMapMarkerAlt className={styles.locationIcon} />
                        {event.location}
                      </span>
                    </div>
                    <div>
                      <span>Starts at</span>
                    </div>
                  </div>
                  <span className={styles.statusRow}>
                    <span className={styles.statusLabel}>🕒 {event.daysLeft}</span>
                    <span>{event.time}</span>
                  </span>
                </div>
                <div className={styles.buttonRow}>
                  <button className={styles.registerBtn}>Register</button>
                  <button
                    className={`${styles.favoriteBtn} ${liked[globalIndex] ? styles.liked : ''
                      }`}
                    onClick={() => toggleLike(globalIndex)}
                  >
                    {liked[globalIndex] ? '💖' : '💙'}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MoreEvents;
