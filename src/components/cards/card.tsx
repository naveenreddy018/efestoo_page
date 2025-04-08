// 'use client';
// import React from 'react';
// import styles from './card.module.css';

// interface Organizer {
//   id: number;
//   name: string;
//   logo: string;
//   events: number;
// }

// const organizers: Organizer[] = [
//   { id: 1, name: 'SRI INDU COLLEGE', logo: '/hyd.png', events: 5 },
//   { id: 2, name: 'IIT HYDERABAD', logo: '/hyd.png', events: 5 },
//   { id: 3, name: 'IIT DELHI', logo: '/hyd.png', events: 5 },
//   { id: 4, name: 'IIT BOMBAY', logo: '/hyd.png', events: 5 },
//   { id: 5, name: 'IIT KANPUR', logo: '/hyd.png', events: 5 },
//   { id: 6, name: 'IIT KHARAGPUR', logo: '/hyd.png', events: 5 },
//   { id: 7, name: 'IIT ROORKEE', logo: '/hyd.png', events: 5 },
//   { id: 8, name: 'IIT MADRAS', logo: '/hyd.png', events: 5 },
//   { id: 9, name: 'IIT VARANASI', logo: '/hyd.png', events: 5 },
//   { id: 10, name: 'IIT PATNA', logo: '/groupiit.png', events: 5 },
//   { id: 11, name: 'IIT INDORE', logo: '/groupiit.png', events: 5 },
//   { id: 12, name: 'IIT BHUBANESWAR', logo: '/groupiit.png', events: 5 },
//   { id: 13, name: 'IIT GUWAHATI', logo: '/groupiit.png', events: 5 },
//   { id: 14, name: 'IIT GANDHINAGAR', logo: '/groupiit.png', events: 5 },
//   { id: 15, name: 'IIT BHOPAL', logo: '/groupiit.png', events: 5 },
//   { id: 16, name: 'IIT CHENNAI', logo: '/groupiit.png', events: 5 },
//   { id: 17, name: 'IIT TIRUPATI', logo: '/groupiit.png', events: 5 },
//   { id: 18, name: 'IIT ROPAR', logo: '/groupiit.png', events: 5 },
// ];

// const OrganizerGrid: React.FC = () => {
//   return (
//     <div className={styles.container}>
//       <h2 className={styles.heading}>Top Colleges & Trusted Organizers</h2>
//       <div className={styles.grid}>
//         {organizers.map((org) => (
//           <div key={org.id} className={styles.card}>
//             <img src={org.logo} alt={org.name} className={styles.logo} />
//             <h3 className={styles.name}>{org.name}</h3>
//             <p className={styles.events}>{org.events} Upcoming Events</p>
//             <button className={styles.button}>View Events</button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default OrganizerGrid;
'use client';

import React, { useState } from 'react';
import styles from './card.module.css';

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
            <button
              className={styles.viewAllBtn}
              onClick={() => setShowAll((prev) => !prev)}
            >
              {showAll ? 'Show Less' : 'View All'}
            </button>
          )}
        </>
      )}
    </div>
  );
};

export default EventPage;
