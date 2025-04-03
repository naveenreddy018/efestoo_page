import React, { useEffect, useRef } from 'react';
import styles from './trending.module.css';

const eventData = [
  {
    id: 1,
    title: 'Bring your vision to life',
    description: 'create and manage extraordinary events effortlessly',
    image: '/meeting.webp',
  },
  {
    id: 2,
    title: 'Bring your vision to life',
    description: 'create and manage extraordinary events effortlessly',
    image: '/meeting.webp',
  },
  {
    id: 3,
    title: 'Bring your vision to life',
    description: 'create and manage extraordinary events effortlessly',
    image: '/meeting.webp',
  },
];

const EventCards: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (containerRef.current) {
        containerRef.current.scrollBy({ left: 750, behavior: 'smooth' });


        if (
          containerRef.current.scrollLeft + containerRef.current.clientWidth >=
          containerRef.current.scrollWidth
        ) {
          setTimeout(() => {
            containerRef.current?.scrollTo({ left: 0, behavior: 'smooth' });
          }, 1000);
        }
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div ref={containerRef} className={styles.container}>
      {eventData.map((event) => (
        <div key={event.id} className={styles.card} style={{ backgroundImage: `url(${event.image})` }}>
          <div className={styles.overlay}>
            <h3 className={styles.title}>{event.title}</h3>
            <p className={styles.description}>{event.description}</p>
            <button className={styles.button}>Register Now</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EventCards;
