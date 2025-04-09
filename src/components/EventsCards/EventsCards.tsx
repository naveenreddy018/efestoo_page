'use client';

import React, { useState } from 'react';
import styles from './EventCards.module.css';
import Image from 'next/image';
import { FaMapMarkerAlt } from 'react-icons/fa';
import Link from 'next/link';

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

const Events = () => {
  const [liked, setLiked] = useState(Array(allEvents.length).fill(false));
  const [visibleCount, setVisibleCount] = useState(4);

  const toggleLike = (index: number) => {
    setLiked((prev) =>
      prev.map((item, i) => (i === index ? !item : item))
    );
  };



  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Explore Latest Events</h2>
      <div className={styles.grid}>
        {allEvents.slice(0, visibleCount).map((event, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.imageWrapper}>
              <Image
                src="/updates.png"
                alt={event.title}
                width={400}
                height={250}
              />
              {/* {event.isSellingFast && (
                <span className={styles.ribbon}>
                  🔥 Selling Fast | {event.sellingDate}
                </span>
              )} */}
              <span className={styles.dateTag}>{event.date}</span>
            </div>
            <div className={styles.cardBody}>
              <div className={styles.title}>{event.title}
              <span
                    className={`${styles.badge} ${
                      event.type === 'PAID' ? styles.paid : styles.free
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
                  <span>6:30pm</span>
              
                </span>
                {/* <span>🕒 Starts at {event.time}</span> */}
              </div>
              <div className={styles.buttonRow}>
                <button className={styles.registerBtn}>Register</button>
                <button
                  className={`${styles.favoriteBtn} ${
                    liked[index] ? styles.liked : ''
                  }`}
                  onClick={() => toggleLike(index)}
                >
                  {liked[index] ? '💖' : '💙'}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
       <Link className={styles.viewAllBtn} href="/Events"> view more</Link>
    </div>
  );
};

export default Events;