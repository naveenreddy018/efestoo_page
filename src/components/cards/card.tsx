'use client';
import React from 'react';
import styles from './card.module.css';

interface Organizer {
  id: number;
  name: string;
  logo: string;
  events: number;
}

const organizers: Organizer[] = [
  { id: 1, name: 'SRI INDU COLLEGE', logo: '/hyd.png', events: 5 },
  { id: 2, name: 'IIT HYDERABAD', logo: '/hyd.png', events: 5 },
  { id: 3, name: 'IIT DELHI', logo: '/hyd.png', events: 5 },
  { id: 4, name: 'IIT BOMBAY', logo: '/hyd.png', events: 5 },
  { id: 5, name: 'IIT KANPUR', logo: '/hyd.png', events: 5 },
  { id: 6, name: 'IIT KHARAGPUR', logo: '/hyd.png', events: 5 },
  { id: 7, name: 'IIT ROORKEE', logo: '/hyd.png', events: 5 },
  { id: 8, name: 'IIT MADRAS', logo: '/hyd.png', events: 5 },
  { id: 9, name: 'IIT VARANASI', logo: '/hyd.png', events: 5 },
  { id: 10, name: 'IIT PATNA', logo: '/groupiit.png', events: 5 },
  { id: 11, name: 'IIT INDORE', logo: '/groupiit.png', events: 5 },
  { id: 12, name: 'IIT BHUBANESWAR', logo: '/groupiit.png', events: 5 },
  { id: 13, name: 'IIT GUWAHATI', logo: '/groupiit.png', events: 5 },
  { id: 14, name: 'IIT GANDHINAGAR', logo: '/groupiit.png', events: 5 },
  { id: 15, name: 'IIT BHOPAL', logo: '/groupiit.png', events: 5 },
  { id: 16, name: 'IIT CHENNAI', logo: '/groupiit.png', events: 5 },
  { id: 17, name: 'IIT TIRUPATI', logo: '/groupiit.png', events: 5 },
  { id: 18, name: 'IIT ROPAR', logo: '/groupiit.png', events: 5 },
];

const OrganizerGrid: React.FC = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Top Colleges & Trusted Organizers</h2>
      <div className={styles.grid}>
        {organizers.map((org) => (
          <div key={org.id} className={styles.card}>
            <img src={org.logo} alt={org.name} className={styles.logo} />
            <h3 className={styles.name}>{org.name}</h3>
            <p className={styles.events}>{org.events} Upcoming Events</p>
            <button className={styles.button}>View Events</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrganizerGrid;
