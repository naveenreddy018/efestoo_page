'use client';
import React, { useRef, useState, useEffect } from 'react';
import styles from './Blog.module.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface Video {
  id: number;
  embedUrl: string;
}

const videos: Video[] = [
  {
    id: 1,
    embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },
  {
    id: 2,
    embedUrl: 'https://www.youtube.com/embed/3tmd-ClpJxA',
  },
  {
    id: 3,
    embedUrl: 'https://www.youtube.com/embed/L_jWHffIx5E',
  },
  {
    id: 4,
    embedUrl: 'https://www.youtube.com/embed/IcrbM1l_BoI',
  },
  {
    id: 5,
    embedUrl: 'https://www.youtube.com/embed/V-_O7nl0Ii0',
  },
];

const BlogCarousel: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState<boolean>(false);
  const [canScrollRight, setCanScrollRight] = useState<boolean>(true);

  const updateScrollButtons = () => {
    const el = carouselRef.current;
    if (el) {
      setCanScrollLeft(el.scrollLeft > 0);
      setCanScrollRight(el.scrollLeft + el.offsetWidth < el.scrollWidth);
    }
  };

  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;

    updateScrollButtons();
    el.addEventListener('scroll', updateScrollButtons);
    return () => el.removeEventListener('scroll', updateScrollButtons);
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    const cardWidth = 310; // Width + gap
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -cardWidth : cardWidth,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Our Blogs</h2>
      <div className={styles.carouselWrapper}>
        <button
          className={`${styles.navButton} ${!canScrollLeft ? styles.disabled : ''}`}
          onClick={() => scroll('left')}
          disabled={!canScrollLeft}
        >
          <FaChevronLeft />
        </button>

        <div className={styles.carousel} ref={carouselRef}>
          {videos.map((video) => (
            <div key={video.id} className={styles.card}>
              <iframe
                className={styles.video}
                src={video.embedUrl}
                title={`YouTube video ${video.id}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          ))}
        </div>

        <button
          className={`${styles.navButton} ${!canScrollRight ? styles.disabled : ''}`}
          onClick={() => scroll('right')}
          disabled={!canScrollRight}
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default BlogCarousel;
