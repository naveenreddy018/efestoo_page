

import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import styles from './footer.module.css';
import Image from 'next/image';


export default function Footer() {
  return (
    <footer className={styles.footer}>

      <div className={styles.footerImage}>
        <Image alt="Footer icon1" className={styles.efestooImage1} width={150} height={80} src="/efestoo1.png" />
        <Image alt="Footer icon2" width={150} height={20} src="/efestoo2.png" />
      </div>

      <div className={styles.container}>
        <div className={styles.topGrid}>
          <div className={styles.section1}>
            <div className={styles.textContainer}>
              <p>
                <span style={{ color: "#f5a623" }}>Looking for your kind of people?</span><br />
                Searching for the perfect fest?<br />
                <strong>Efestoo</strong> has you covered—find your fest, find your tribe
              </p>
            </div>
          </div>


          <div className={styles.section}>
            <p className={styles.link}>About</p>
            <p className={styles.link}>Terms and conditions</p>
            <p className={styles.link}>Privacy policy</p>
            <p className={styles.link}>Contact</p>
          </div>

          <div className={styles.section}>
            <p className={styles.link}><FaFacebook /> Facebook</p>
            <p className={styles.link}><FaTwitter /> Twitter</p>
            <p className={styles.link}><FaLinkedin /> LinkedIn</p>
            <p className={styles.link}><FaInstagram /> Instagram</p>
          </div>

          <div className={styles.section}>
            <p>Address: NIT, Sector 1, Rourkela, Odisha</p>
            <p>Contact: +91-9572559261</p>
            <p>Email: efestoo.com@gmail.com</p>
          </div>
        </div>

        <div className={styles.brandStats}>
          <div className={styles.brandsBox}><span className={styles.brandCount}>32k<span className={styles.plus}>+</span></span><p className={styles.subText}>Brands trust us</p></div>
          <div className={styles.brandsBox}><span className={styles.brandCount}>32k<span className={styles.plus}>+</span></span><p className={styles.subText}>Brands trust us</p></div>
          <div className={styles.brandsBox}><span className={styles.brandCount}>32k<span className={styles.plus}>+</span></span><p className={styles.subText}>Brands trust us</p></div>
          <div className={styles.brandsBox}><span className={styles.brandCount}>32k<span className={styles.plus}>+</span></span><p className={styles.subText}>Brands trust us</p></div>
        </div>

        <div className={styles.bottom}>
          © 2025 Efestoo.in All rights reserved.
        </div>
      </div>
    </footer>
  );
}
