"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Sling as Hamburger } from "hamburger-react";
import styles from "./nav.module.css";

const MyNavbar = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      {/* Navbar Container */}
      <nav className={styles.navbarContainer}>
        <div className={styles.navLeft}>
          <Link href="/" className={styles.navbarBrand}>
            Efestoo
          </Link>
        </div>

        {/* Search Box */}
        <div className={styles.searchBox}>
          <Image alt="Search Icon" width={24} height={24} src="/search.png" />
          <input type="text" placeholder="Search..." className={styles.searchInput} />
        </div>

        {/* Hamburger  */}
        <div className={styles.hamburger} onClick={() => setOpen(!isOpen)}>
          <Hamburger toggled={isOpen} toggle={setOpen} size={24} />
        </div>

        {/* Navigation Links */}
        <div className={`${styles.navLinksContainer} ${isOpen ? styles.navOpen : ""}`}>
          <Link href="" className={styles.navLink}>My Tickets</Link>
          <Link href="" className={styles.navLink}>Sponsorship</Link>
          <Link href="s" className={styles.navLink}>
            <Image width={24} height={24} alt="Messages" src="/message.png" />
          </Link>
          <Link href="" className={styles.navLink}>
            <Image width={24} height={24} alt="Notifications" src="/bell.png" />
          </Link>
          <button className={styles.alertBtn}>+ Create Alert</button>
          <div className={styles.ParentProfileIcon}>
            <Image src="/profileicon.png" alt="Profile" width={40} height={40} />
          </div>
        </div>
      </nav>
    </>
  );
};

export default MyNavbar;
