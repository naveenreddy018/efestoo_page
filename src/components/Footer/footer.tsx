// 'use client';
// import styles from './footer.module.css';
// import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
// import Image from "next/image";

// const Footer = () => {
//   return (
//     <footer className={styles.footer}> 
//       <div className={styles.footerImage}>
        // <Image alt="Footer icon1" className={styles.efestooImage1} width={150} height={80} src="/efestoo1.png" />
        // <Image alt="Footer icon2" width={150} height={20} src="/efestoo2.png" />
//       </div>

//       <div className={styles.container}>
//         {/* Top Grid */}
//         <div className={styles.topGrid}>
//           {/* Section 1 - Text */}
//           <div className={styles.section1}>
//             <p className={styles.textContainer}>
//               Looking for your kind of people? <br />
//               Searching for the perfect fest? <br />
//               <strong>Efestoo</strong> has you covered — find your fest, find your tribe.
//             </p>
//             <div className={styles.brandsBox}>
//               <p className={styles.brandCount}>32k<span className={styles.plus}>+</span></p>
//               <p className={styles.subText}>Brands trust us</p>
//             </div>
//           </div>

//           {/* Section 2 - Links */}
//           <div className={styles.section}>
//             <p className={styles.link}>About</p>
//             <p className={styles.link}>Terms and conditions</p>
//             <p className={styles.link}>Privacy policy</p>
//             <p className={styles.link}>Contact</p>
//             <div className={styles.brandsBox}>
//               <p className={styles.brandCount}>32k<span className={styles.plus}>+</span></p>
//               <p className={styles.subText}>Brands trust us</p>
//             </div>
//           </div>

//           {/* Section 3 - Social */}
//           <div className={styles.section}>
            // <p className={styles.link}><FaFacebook /> Facebook</p>
            // <p className={styles.link}><FaTwitter /> Twitter</p>
            // <p className={styles.link}><FaLinkedin /> LinkedIn</p>
            // <p className={styles.link}><FaInstagram /> Instagram</p>
//             <div className={styles.brandsBox}>
//               <p className={styles.brandCount}>32k<span className={styles.plus}>+</span></p>
//               <p className={styles.subText}>Brands trust us</p>
//             </div>
//           </div>

//           {/* Section 4 - Address */}
//           <div className={styles.section}>
//             <p>Address: NIT, Sector 1, Rourkela, Odisha</p>
//             <p>Contact: +91-9572559261</p>
//             <p>Email: efestoo.com@gmail.com</p>
//             <div className={styles.brandsBox}>
//               <p className={styles.brandCount}>32k<span className={styles.plus}>+</span></p>
//               <p className={styles.subText}>Brands trust us</p>
//             </div>
//           </div>
//         </div>

//         {/* Bottom */}
//         <div className={styles.bottom}>
//           © 2025 Efestoo.in All rights reserved.
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import styles from './footer.module.css';
import Image from 'next/image';
// import efestooLogo from '/footer.png'; // Adjust the path accordingly

export default function Footer() {
  return (
    <footer className={styles.footer}>
      {/* Centered logo */}
      <div className={styles.footerImage}>
      <Image alt="Footer icon1" className={styles.efestooImage1} width={150} height={80} src="/efestoo1.png" />
      <Image alt="Footer icon2" width={150} height={20} src="/efestoo2.png" />
      </div>

      <div className={styles.container}>
        <div className={styles.topGrid}>
          {/* Column 1 - Description */}
          <div className={styles.section1}>
            <div className={styles.textContainer}>
              <p>
                <span style={{ color: "#f5a623" }}>Looking for your kind of people?</span><br />
                Searching for the perfect fest?<br />
                <strong>Efestoo</strong> has you covered—find your fest, find your tribe
              </p>
            </div>
          </div>

          {/* Column 2 - Navigation */}
          <div className={styles.section}>
            <p className={styles.link}>About</p>
            <p className={styles.link}>Terms and conditions</p>
            <p className={styles.link}>Privacy policy</p>
            <p className={styles.link}>Contact</p>
          </div>

          {/* Column 3 - Social media */}
          <div className={styles.section}>
          <p className={styles.link}><FaFacebook /> Facebook</p>
            <p className={styles.link}><FaTwitter /> Twitter</p>
            <p className={styles.link}><FaLinkedin/> LinkedIn</p>
            <p className={styles.link}><FaInstagram /> Instagram</p>
          </div>

          {/* Column 4 - Address */}
          <div className={styles.section}>
            <p>Address: NIT, Sector 1, Rourkela, Odisha</p>
            <p>Contact: +91-9572559261</p>
            <p>Email: efestoo.com@gmail.com</p>
          </div>
        </div>

        {/* Trust counters */}
        <div className={styles.brandStats}>
          <div className={styles.brandsBox}><span className={styles.brandCount}>32k<span className={styles.plus}>+</span></span><p className={styles.subText}>Brands trust us</p></div>
          <div className={styles.brandsBox}><span className={styles.brandCount}>32k<span className={styles.plus}>+</span></span><p className={styles.subText}>Brands trust us</p></div>
          <div className={styles.brandsBox}><span className={styles.brandCount}>32k<span className={styles.plus}>+</span></span><p className={styles.subText}>Brands trust us</p></div>
          <div className={styles.brandsBox}><span className={styles.brandCount}>32k<span className={styles.plus}>+</span></span><p className={styles.subText}>Brands trust us</p></div>
        </div>

        {/* Footer bottom */}
        <div className={styles.bottom}>
          © 2025 Efestoo.in All rights reserved.
        </div>
      </div>
    </footer>
  );
}
