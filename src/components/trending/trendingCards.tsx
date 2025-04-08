import React, { useEffect, useRef, useState } from 'react';
import styles from './trending.module.css';

const eventData = [
  {
    id: 1,
    title: 'Bring your vision to life',
    description: 'Create and manage extraordinary events effortlessly.',
    image: '/meeting.webp',
  },
  {
    id: 2,
    title: 'Innovate with confidence',
    description: 'Host events that captivate and inspire your audience.',
    image: '/meeting.webp',
  },
  {
    id: 3,
    title: 'Seamless Event Management',
    description: 'Smart tools for your next big idea.',
    image: '/meeting.webp',
  },
];

const EventCards: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    startAutoScroll();
    return () => stopAutoScroll();
  }, []);

  const startAutoScroll = () => {
    intervalRef.current = setInterval(() => {
      setActiveIndex(prev => {
        const nextIndex = (prev + 1) % eventData.length;
        containerRef.current?.scrollTo({
          left: nextIndex * 750,
          behavior: 'smooth',
        });
        return nextIndex;
      });
    }, 3500);
  };

  const stopAutoScroll = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  return (
    <div
      className={styles.wrapper}
      onMouseEnter={stopAutoScroll}
      onMouseLeave={startAutoScroll}
    >     <h1 className={styles.tag}>Trending events </h1>
      <div ref={containerRef} className={styles.container}>
        {eventData.map((event, index) => (
          <div
            key={event.id}
            className={`${styles.card} ${activeIndex === index ? styles.active : ''}`}
            style={{ backgroundImage: `url(${event.image})` }}
          >
            <div className={styles.overlay}>
              <h3 className={styles.title}>{event.title}</h3>
              <p className={styles.description}>{event.description}</p>
              <button className={styles.button}>Register Now</button>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.dots}>
        {eventData.map((_, idx) => (
          <span
            key={idx}
            className={`${styles.dot} ${activeIndex === idx ? styles.activeDot : ''}`}
            onClick={() => {
              setActiveIndex(idx);
              containerRef.current?.scrollTo({
                left: idx * 750,
                behavior: 'smooth',
              });
            }}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default EventCards;
