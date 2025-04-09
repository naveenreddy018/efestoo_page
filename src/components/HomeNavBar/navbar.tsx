"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Sling as Hamburger } from "hamburger-react";
import styles from "./nav.module.css";
import { FaMapMarkerAlt } from "react-icons/fa";

const MyNavbar = () => {
  const [isOpen, setOpen] = useState(false);
  const [location, setLocation] = useState("Locating...");
  const [showDropdown, setShowDropdown] = useState(false);
  const [isOn, setIsOn] = useState(true);

  const toggleHandler = () => {
    setIsOn(!isOn);
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;

        if (latitude >= 17 && latitude <= 18 && longitude >= 78 && longitude <= 79) {
          setLocation("Hyderabad");
        } else if (latitude >= 28 && latitude <= 29 && longitude >= 76 && longitude <= 78) {
          setLocation("Delhi");
        } else if (latitude >= 19 && latitude <= 20 && longitude >= 72 && longitude <= 73) {
          setLocation("Mumbai");
        } else {
          setLocation("Your Location");
        }
      },
      (error) => {
        console.error("Location error:", error);
        setLocation("Location unavailable");
      }
    );
  }, []);

  const handleLocationChange = (newLocation: string) => {
    setLocation(newLocation);
    setShowDropdown(false);
  };

  const cities = ["Hyderabad", "Mumbai", "Delhi", "Bengaluru"];

  return (
    <nav className={styles.navbarContainer}>
      <div className={styles.navLeft}>
        <Link href="/" className={styles.navbarBrand}>
          Efestoo
        </Link>

        <div
          className={styles.locationWrapper}
          onClick={() => setShowDropdown(!showDropdown)}
        >
          <FaMapMarkerAlt className={styles.locationIcon} />
          <span className={styles.locationText}>{location}</span>
          <span className={styles.dropdownArrow}>▼</span>

          {showDropdown && (
            <div className={styles.dropdownMenu}>
              {cities.map((city) => (
                <div
                  key={city}
                  className={styles.dropdownItem}
                  onClick={() => handleLocationChange(city)}
                >
                  {city}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className={styles.searchBox}>
        <Image alt="Search Icon" width={24} height={24} src="/search.png" />
        <input
          type="text"
          placeholder="Search..."
          className={styles.searchInput}
        />
      </div>

      <div className={styles.hamburger} onClick={() => setOpen(!isOpen)}>
        <Hamburger toggled={isOpen} toggle={setOpen} size={24} />
      </div>

      <div
        className={`${styles.navLinksContainer} ${isOpen ? styles.navOpen : ""
          }`}
      >
        <Link href="" className={styles.navLink}>My Tickets</Link>
        <Link href="" className={styles.navLink}>Sponsorship</Link>
        <Link href="s" className={styles.navLink}>
          <Image width={24} height={24} alt="Messages" src="/message.png" />
        </Link>
        <Link href="" className={styles.navLink}>
          <Image width={24} height={24} alt="Notifications" src="/bell.png" />
        </Link>
        <button className={styles.alertBtn}>+ Create Alert</button>
        <div
          className={`${styles.toggleContainer} ${isOn ? styles.on : styles.off}`}
          onClick={toggleHandler}
        >
          <div className={styles.toggleCircle}></div>
        </div>

        <div className={styles.ParentProfileIcon}>
          <Image src="/profileicon.png" alt="Profile" width={40} height={40} />
        </div>
      </div>
    </nav>
  );
};

export default MyNavbar;
