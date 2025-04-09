import React, { useState } from "react";
import styles from "./LatestEvents.module.css";
import classNames from "classnames";
import MoreEvents from "../EventsCards/MoreCrads";
import PaginationRounded from "../pagination/pagination";
import Link from "next/link";

const eventData = [
  // Add more dummy data here up to 30 items
  {
    id: 1,
    title: "Sanskriti Utsav 2025",
    date: "23rd April",
    time: "6:30 PM",
    location: "DY Patil Stadium",
    duration: "1 day left",
    sellingFast: true,
    image: "/images/event.jpg",
    price: "Free",
    type: "Cultural",
  },
  {
    id: 2,
    title: "AI Hackathon",
    date: "26th April",
    time: "10:00 AM",
    location: "IIT Delhi",
    duration: "2 days left",
    sellingFast: false,
    image: "/images/event.jpg",
    price: "200",
    type: "Hackathons",
  },
  {
    id: 2,
    title: "AI Hackathon",
    date: "26th April",
    time: "10:00 AM",
    location: "IIT Delhi",
    duration: "2 days left",
    sellingFast: false,
    image: "/images/event.jpg",
    price: "200",
    type: "Hackathons",
  },
  {
    id: 2,
    title: "AI Hackathon",
    date: "26th April",
    time: "10:00 AM",
    location: "IIT Delhi",
    duration: "2 days left",
    sellingFast: false,
    image: "/images/event.jpg",
    price: "200",
    type: "Hackathons",
  },
  {
    id: 2,
    title: "AI Hackathon",
    date: "26th April",
    time: "10:00 AM",
    location: "IIT Delhi",
    duration: "2 days left",
    sellingFast: false,
    image: "/images/event.jpg",
    price: "200",
    type: "Hackathons",
  },
  {
    id: 2,
    title: "AI Hackathon",
    date: "26th April",
    time: "10:00 AM",
    location: "IIT Delhi",
    duration: "2 days left",
    sellingFast: false,
    image: "/images/event.jpg",
    price: "200",
    type: "Hackathons",
  },
  {
    id: 2,
    title: "AI Hackathon",
    date: "26th April",
    time: "10:00 AM",
    location: "IIT Delhi",
    duration: "2 days left",
    sellingFast: false,
    image: "/images/event.jpg",
    price: "200",
    type: "Hackathons",
  },
  {
    id: 2,
    title: "AI Hackathon",
    date: "26th April",
    time: "10:00 AM",
    location: "IIT Delhi",
    duration: "2 days left",
    sellingFast: false,
    image: "/images/event.jpg",
    price: "200",
    type: "Hackathons",
  },
  {
    id: 2,
    title: "AI Hackathon",
    date: "26th April",
    time: "10:00 AM",
    location: "IIT Delhi",
    duration: "2 days left",
    sellingFast: false,
    image: "/images/event.jpg",
    price: "200",
    type: "Hackathons",
  },
  {
    id: 2,
    title: "AI Hackathon",
    date: "26th April",
    time: "10:00 AM",
    location: "IIT Delhi",
    duration: "2 days left",
    sellingFast: false,
    image: "/images/event.jpg",
    price: "200",
    type: "Hackathons",
  },
  {
    id: 2,
    title: "AI Hackathon",
    date: "26th April",
    time: "10:00 AM",
    location: "IIT Delhi",
    duration: "2 days left",
    sellingFast: false,
    image: "/images/event.jpg",
    price: "200",
    type: "Hackathons",
  },
  {
    id: 2,
    title: "AI Hackathon",
    date: "26th April",
    time: "10:00 AM",
    location: "IIT Delhi",
    duration: "2 days left",
    sellingFast: false,
    image: "/images/event.jpg",
    price: "200",
    type: "Hackathons",
  },
  {
    id: 2,
    title: "AI Hackathon",
    date: "26th April",
    time: "10:00 AM",
    location: "IIT Delhi",
    duration: "2 days left",
    sellingFast: false,
    image: "/images/event.jpg",
    price: "200",
    type: "Hackathons",
  },
  // Add more items...
];



const LatestCards = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedType, setSelectedType] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [freeOnly, setFreeOnly] = useState(false);
  const [priceRange, setPriceRange] = useState(20000);

 
  const handleFilterChange = (type) => {
    setSelectedType(type);
    setCurrentPage(1); // reset pagination
  };

  if(currentPage){
    return
  }



  return (
    <>
     <div>
     <div className={styles.nav1}>
        <Link className={styles.navItem1} href="/">Home</Link>
        <div className={styles.verticalDivider} />
        <span className={styles.navItem1}>All Products</span>
      </div>
     </div>

      <div className={styles.eventPageContainer}>
        {/* Sidebar */}
        <div className={styles.sidebar}>
          <h4>Event type</h4>
          <hr className={styles.separator} />
          <ul>
            {["All", "Hackathons", "Workshops", "Seminars", "Sports", "Cultural"].map((type) => (
              <li
                key={type}
                className={classNames({ [styles.active]: selectedType === type })}
                onClick={() => handleFilterChange(type)}
              >
                {type}
              </li>
            ))}
          </ul>

          <h4>Price range</h4>
          <hr className={styles.separator} />
          <div className={styles.priceRange}>
            <button onClick={() => setFreeOnly(!freeOnly)} className={freeOnly ? styles.active : ""}>
              Free only
            </button>
            <input
              type="range"
              min="200"
              max="20000"
              value={priceRange}
              onChange={(e) => setPriceRange(Number(e.target.value))}
            />
            <span>Up to ₹{priceRange}</span>
          </div>
        </div>

        {/* Main Content */}
        <div className={styles.mainContent}>


          <div className={styles.searchFilterContainer}>
            <input
              type="text"
              placeholder="Search for events, colleges, or organizations"
              className={styles.searchBar}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <select
              value={selectedType}
              onChange={(e) => handleFilterChange(e.target.value)}
              className={styles.inlineFilterSelect}
            >
              <option value="All">All Types</option>
              <option value="Hackathons">Hackathons</option>
              <option value="Workshops">Workshops</option>
              <option value="Seminars">Seminars</option>
              <option value="Sports">Sports</option>
              <option value="Cultural">Cultural</option>
            </select>
          </div>

          <MoreEvents />

          <PaginationRounded />
        </div>
      </div>
    </>
  );
};

export default LatestCards;
