
'use client';

import React, { useState } from 'react';
import styles from './card.module.css';
import Link from 'next/link';

const eventsData = [
  { id: 1, title: 'IIT HYDERABAD', eventsCount: 7, bgImage: '/cardback.png', logo: '/iit.png' },
  { id: 2, title: 'OLD TOWN BID', eventsCount: 7, bgImage: '/cardback.png', logo: '/iit.png' },
  { id: 3, title: 'IIT HYDERABAD', eventsCount: 7, bgImage: '/cardback.png', logo: '/hyd.png' },
  { id: 4, title: 'OLD TOWN BID', eventsCount: 7, bgImage: '/cardback.png', logo: '/hyd.png' },
  { id: 5, title: 'IIT HYDERABAD', eventsCount: 7, bgImage: '/cardback.png', logo: '/iit.png' },
  { id: 6, title: 'OLD TOWN BID', eventsCount: 7, bgImage: '/cardback.png', logo: '/hyd.png' },
  { id: 7, title: 'IIT HYDERABAD', eventsCount: 7, bgImage: '/cardback.png', logo: '/iit.png' },
  { id: 8, title: 'OLD TOWN BID', eventsCount: 7, bgImage: '/cardback.png', logo: '/hyd.png' },
  { id: 9, title: 'NIT WARANGAL', eventsCount: 5, bgImage: '/cardback.png', logo: '/iit.png' },
  { id: 10, title: 'BITS PILANI', eventsCount: 9, bgImage: '/cardback.png', logo: '/iit.png' },
  { id: 11, title: 'JNTU HYDERABAD', eventsCount: 6, bgImage: '/cardback.png', logo: '/iit.png' },
  { id: 12, title: 'VIT VELLORE', eventsCount: 8, bgImage: '/cardback.png', logo: '/hyd.png' },
  { id: 13, title: 'SRM UNIVERSITY', eventsCount: 4, bgImage: '/cardback.png', logo: '/hyd.png' },
];

const EventPage = () => {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('');
  const [showAll, setShowAll] = useState(false);

  const normalize = (str: string) => str.toLowerCase().trim();

  const filteredEvents = eventsData.filter((event) => {
    const matchesSearch = normalize(event.title).includes(normalize(search));
    const matchesFilter = filter === '' || event.title === filter;
    return matchesSearch && matchesFilter;
  });

  const eventsToShow = showAll ? filteredEvents : filteredEvents.slice(0, 4);

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Discover Events from Top Colleges & Trusted Organizers</h1>
      <p className={styles.subheading}>Unleash the thrill of events and create stories to remember</p>

      <div className={styles.searchFilter}>
        <input
          type="text"
          placeholder="Search for events, Colleges, or Organizations"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className={styles.searchInput}
        />
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className={styles.filterSelect}
        >
          <option value="">All</option>
          <option value="IIT HYDERABAD">IIT HYDERABAD</option>
          <option value="OLD TOWN BID">OLD TOWN BID</option>
        </select>
      </div>

      {filteredEvents.length === 0 ? (
        <div className={styles.noResults}>No events found.</div>
      ) : (
        <>
          <div className={styles.grid}>
            {eventsToShow.map((event) => (
              <div key={event.id} className={styles.cardNew}>
                <div className={styles.bgContainer}>
                  <img src={event.bgImage} alt="Background" className={styles.bgImageNew} />
                  <div className={styles.banner}>
                    <span className={styles.title}>{event.title}</span>
                  </div>
                  <div className={styles.logoCircleNew}>
                    <img src={event.logo} alt="Logo" className={styles.logoNew} />
                  </div>
                </div>
                <div className={styles.cardContentNew}>
                  <p className={styles.eventsCount}><strong>{event.eventsCount}</strong> upcoming events</p>
                  <button className={styles.viewButtonNew}>View Events</button>
                </div>
              </div>
            ))}
          </div>

          {filteredEvents.length > 4 && (
           
      
              <Link className={styles.viewAllBtn} href="/Cards">view more</Link>
         
          )}
        </>
      )}
    </div>
  );
};

export default EventPage;
