
"use client"
import React, { useState, useEffect } from 'react';
import styles from './coursel.module.css';


const Coursel: React.FC = () => {
    const images: string[] = [
        'https://media.hitex.co.in/gallery/2023/lucky-ali-concert-2023/whatsapp-image-12023-03-17-at-182934_0317133464146c7ad49ba.jpg',
        'https://img.freepik.com/premium-photo/concert-background-hd-8k-wallpaper-stock-photographic-image_1066384-65.jpg',
        'https://img.redbull.com/images/q_auto,f_auto/redbullcom/2020/9/22/jga0kgfesqc6pqcaqpu4/beats-per-minute-hyderabad-electronic-music-scene'
    ];

    const [currentIndex, setCurrentIndex] = useState<number>(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className={styles.carouselContainer}>

            {images.map((image, index) => (
                <img
                    key={index}
                    src={image}
                    alt={`Slide ${index + 1}`}
                    className={`${styles.slide} ${index === currentIndex ? styles.active : ''}`}
                />
            ))}

              <div className={styles.overlayText}>
                <h3>DISCOVER</h3>
                <h1>Top Colleges & Trusted Organizers</h1>
                <p>Find exciting college fests, concerts, workshops, and competitions in one place.</p>
            </div>
        </div>
    );
};

export default Coursel;
