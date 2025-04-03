'use client';

import Link from 'next/link';
import Image from 'next/image'; 
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import styles from './footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            {/* Background Image */}
            <Image
                src="/footerimage.png"
                alt="Footer Background"
                layout="fill"
                objectFit="cover"
                className={styles.footerBackground}
            />

            <div className={styles.container}>
                <div className={styles.infoBox}>
                    <p className={styles.heading}>Looking for your kind of people?</p>
                    <p>Searching for the perfect fest?</p>
                    <p className={styles.heading}>Efestoo has you covered—find your fest, find your tribe</p>
                </div>

                {/* Link Section */}
                <div className={styles.linksSection}>
                    <ul>
                        <li><Link href="#">About</Link></li>
                        <li><Link href="#">Terms and conditions</Link></li>
                        <li><Link href="#">Privacy policy</Link></li>
                        <li><Link href="#">Contact</Link></li>
                    </ul>
                </div>

                {/* Social Media Section */}
                <div className={styles.linksSection}>
                    <h3>Follow us</h3>
                    <ul>
                        <li><Link className={styles.Icons} href="#"><FaFacebook /> Facebook</Link></li>
                        <li><Link className={styles.Icons} href="#"><FaInstagram /> Instagram</Link></li>
                        <li><Link className={styles.Icons} href="#"><FaLinkedin /> LinkedIn</Link></li>
                        <li><Link className={styles.Icons} href="#"><FaTwitter /> Twitter</Link></li>
                    </ul>
                </div>

                {/* Contact Section */}
                <div className={styles.contactSection}>
                    <h3 className={styles.title}>Contact Us</h3>
                    <p>Address: NIT, Sector 1, Rourkela, Odisha</p>
                    <p>Contact: +91-9572559261</p>
                    <p>Email: efestoo.com@gmail.com</p>
                </div>
            </div>


            <div className={styles.achieve}>
                <div className={styles.trustSection}>
                    <div className={styles.trustText}><span className={styles.trustNumber}>32k+</span> Brands trust us</div>
                </div>
                <div className={styles.trustSection}>
                    <div className={styles.trustText}><span className={styles.trustNumber}>32k+</span> Brands trust us</div>
                </div>
                <div className={styles.trustSection}>
                    <div className={styles.trustText}><span className={styles.trustNumber}>32k+</span> Brands trust us</div>
                </div>
                <div className={styles.trustSection}>
                    <div className={styles.trustText}><span className={styles.trustNumber}>32k+</span> Brands trust us</div>
                </div>
            </div>

            {/* Copyright */}
            <div className={styles.copyright}>© 2025 Efestoo.in All rights reserved.</div>
        </footer>
    );
}
