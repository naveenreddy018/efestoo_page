
"use client"
import React, { useState, useEffect } from 'react';
import styles from './coursel1.module.css';


const Coursel1: React.FC = () => {
    const images: string[] = [
        'Rectangle.png',
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
        <>
            <h1 className={styles.text}>Event Name</h1>
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
                    <h3>Discover & Book the Best Events Near You!</h3>
                    <p>Find exciting college fests, concerts, workshops, and competitions in one place</p>
                    <div className={styles.Register}>
                        <button className={styles.button}>Register</button>
                        <button>Create Event</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Coursel1;
