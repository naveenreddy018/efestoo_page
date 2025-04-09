'use client';

import React, { useState } from 'react';
import styles from './subCards.module.css';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Image from "next/image";

const eventsData = [
    { id: 1, title: 'IIT HYDERABAD', eventsCount: 7, bgImage: '/cardback.png', logo: '/iit.png' },
    { id: 2, title: 'OLD TOWN BID', eventsCount: 7, bgImage: '/cardback.png', logo: '/iit.png' },
    { id: 3, title: 'IIT HYDERABAD', eventsCount: 7, bgImage: '/cardback.png', logo: '/hyd.png' },
    { id: 4, title: 'OLD TOWN BID', eventsCount: 7, bgImage: '/cardback.png', logo: '/hyd.png' },
    { id: 5, title: 'NIT WARANGAL', eventsCount: 5, bgImage: '/cardback.png', logo: '/iit.png' },
    { id: 6, title: 'BITS PILANI', eventsCount: 9, bgImage: '/cardback.png', logo: '/iit.png' },
    { id: 7, title: 'JNTU HYDERABAD', eventsCount: 6, bgImage: '/cardback.png', logo: '/iit.png' },
    { id: 8, title: 'VIT VELLORE', eventsCount: 8, bgImage: '/cardback.png', logo: '/hyd.png' },
    { id: 9, title: 'SRM UNIVERSITY', eventsCount: 4, bgImage: '/cardback.png', logo: '/hyd.png' },
    { id: 10, title: 'ANNA UNIVERSITY', eventsCount: 6, bgImage: '/cardback.png', logo: '/iit.png' },
    { id: 11, title: 'DELHI UNIVERSITY', eventsCount: 5, bgImage: '/cardback.png', logo: '/hyd.png' },
    { id: 12, title: 'OSMANIA UNIVERSITY', eventsCount: 7, bgImage: '/cardback.png', logo: '/iit.png' },
    { id: 13, title: 'MANIPAL UNIVERSITY', eventsCount: 9, bgImage: '/cardback.png', logo: '/hyd.png' },
    { id: 14, title: 'AMITY UNIVERSITY', eventsCount: 4, bgImage: '/cardback.png', logo: '/iit.png' },
    { id: 15, title: 'CHRIST UNIVERSITY', eventsCount: 8, bgImage: '/cardback.png', logo: '/hyd.png' },
    { id: 16, title: 'SHIV  UNIVERSITY', eventsCount: 6, bgImage: '/cardback.png', logo: '/iit.png' },
    { id: 17, title: 'IIIT HYDERABAD', eventsCount: 7, bgImage: '/cardback.png', logo: '/hyd.png' },
    { id: 18, title: 'IISc BANGALORE', eventsCount: 10, bgImage: '/cardback.png', logo: '/iit.png' },
    { id: 19, title: 'VEL TECH UNIVERSITY', eventsCount: 5, bgImage: '/cardback.png', logo: '/hyd.png' },
    { id: 20, title: 'REVA UNIVERSITY', eventsCount: 6, bgImage: '/cardback.png', logo: '/iit.png' },
    { id: 21, title: 'KL UNIVERSITY', eventsCount: 5, bgImage: '/cardback.png', logo: '/iit.png' },
    { id: 22, title: 'GITAM UNIVERSITY', eventsCount: 7, bgImage: '/cardback.png', logo: '/hyd.png' },
    { id: 23, title: 'LOVELYUNIVERSITY', eventsCount: 8, bgImage: '/cardback.png', logo: '/iit.png' },
    { id: 24, title: 'PES UNIVERSITY', eventsCount: 6, bgImage: '/cardback.png', logo: '/hyd.png' },
    { id: 25, title: 'CHANDIGARH UNIVERSITY', eventsCount: 7, bgImage: '/cardback.png', logo: '/iit.png' },
    { id: 26, title: 'SASTRA UNIVERSITY', eventsCount: 5, bgImage: '/cardback.png', logo: '/hyd.png' },
    { id: 27, title: 'KLU HYDERABAD', eventsCount: 9, bgImage: '/cardback.png', logo: '/iit.png' },
    { id: 28, title: 'SHARDA UNIVERSITY', eventsCount: 4, bgImage: '/cardback.png', logo: '/hyd.png' },
    { id: 29, title: 'GRAPHIC UNIVERSITY', eventsCount: 6, bgImage: '/cardback.png', logo: '/iit.png' },
    { id: 30, title: 'MAHE MANGALORE', eventsCount: 7, bgImage: '/cardback.png', logo: '/hyd.png' },
    { id: 31, title: 'INDIAN  MINES', eventsCount: 8, bgImage: '/cardback.png', logo: '/iit.png' },
    { id: 32, title: 'TEZPUR UNIVERSITY', eventsCount: 4, bgImage: '/cardback.png', logo: '/hyd.png' },
    { id: 33, title: 'JAMIA  ISLAMIA', eventsCount: 5, bgImage: '/cardback.png', logo: '/iit.png' },
    { id: 34, title: 'ALIGARH UNIVERSITY', eventsCount: 7, bgImage: '/cardback.png', logo: '/hyd.png' },
    { id: 35, title: 'IGNOU', eventsCount: 6, bgImage: '/cardback.png', logo: '/iit.png' },
    { id: 36, title: 'TISS MUMBAI', eventsCount: 5, bgImage: '/cardback.png', logo: '/hyd.png' },
    { id: 37, title: 'NARSEE  INSTITUTE', eventsCount: 7, bgImage: '/cardback.png', logo: '/iit.png' },
    { id: 38, title: 'BML UNIVERSITY', eventsCount: 8, bgImage: '/cardback.png', logo: '/hyd.png' },
    { id: 39, title: 'SRM AMARAVATI', eventsCount: 6, bgImage: '/cardback.png', logo: '/iit.png' },
    { id: 40, title: 'JAIN UNIVERSITY', eventsCount: 9, bgImage: '/cardback.png', logo: '/hyd.png' },
    { id: 1, title: 'IIT HYDERABAD', eventsCount: 7, bgImage: '/cardback.png', logo: '/iit.png' },
    { id: 2, title: 'OLD TOWN BID', eventsCount: 7, bgImage: '/cardback.png', logo: '/iit.png' },
    { id: 3, title: 'IIT HYDERABAD', eventsCount: 7, bgImage: '/cardback.png', logo: '/hyd.png' },
    { id: 4, title: 'OLD TOWN BID', eventsCount: 7, bgImage: '/cardback.png', logo: '/hyd.png' },
    { id: 5, title: 'NIT WARANGAL', eventsCount: 5, bgImage: '/cardback.png', logo: '/iit.png' },
    { id: 6, title: 'BITS PILANI', eventsCount: 9, bgImage: '/cardback.png', logo: '/iit.png' },
    { id: 7, title: 'JNTU HYDERABAD', eventsCount: 6, bgImage: '/cardback.png', logo: '/iit.png' },
    { id: 8, title: 'VIT VELLORE', eventsCount: 8, bgImage: '/cardback.png', logo: '/hyd.png' },
    { id: 9, title: 'SRM UNIVERSITY', eventsCount: 4, bgImage: '/cardback.png', logo: '/hyd.png' },
    { id: 10, title: 'ANNA UNIVERSITY', eventsCount: 6, bgImage: '/cardback.png', logo: '/iit.png' },
    { id: 11, title: 'DELHI UNIVERSITY', eventsCount: 5, bgImage: '/cardback.png', logo: '/hyd.png' },
    { id: 12, title: 'OSMANIA UNIVERSITY', eventsCount: 7, bgImage: '/cardback.png', logo: '/iit.png' },
    { id: 13, title: 'MANIPAL UNIVERSITY', eventsCount: 9, bgImage: '/cardback.png', logo: '/hyd.png' },
    { id: 14, title: 'AMITY UNIVERSITY', eventsCount: 4, bgImage: '/cardback.png', logo: '/iit.png' },
    { id: 15, title: 'CHRIST UNIVERSITY', eventsCount: 8, bgImage: '/cardback.png', logo: '/hyd.png' },
    { id: 16, title: 'SHIV NADAR UNIVERSITY', eventsCount: 6, bgImage: '/cardback.png', logo: '/iit.png' },
    { id: 17, title: 'IIIT HYDERABAD', eventsCount: 7, bgImage: '/cardback.png', logo: '/hyd.png' },
    { id: 18, title: 'IISc BANGALORE', eventsCount: 10, bgImage: '/cardback.png', logo: '/iit.png' },
    { id: 19, title: 'VEL TECH UNIVERSITY', eventsCount: 5, bgImage: '/cardback.png', logo: '/hyd.png' },
    { id: 20, title: 'REVA UNIVERSITY', eventsCount: 6, bgImage: '/cardback.png', logo: '/iit.png' },
    { id: 21, title: 'KL UNIVERSITY', eventsCount: 5, bgImage: '/cardback.png', logo: '/iit.png' },
    { id: 22, title: 'GITAM UNIVERSITY', eventsCount: 7, bgImage: '/cardback.png', logo: '/hyd.png' },
    { id: 23, title: 'LOVELY PROFESSIONAL UNIVERSITY', eventsCount: 8, bgImage: '/cardback.png', logo: '/iit.png' },
    { id: 24, title: 'PES UNIVERSITY', eventsCount: 6, bgImage: '/cardback.png', logo: '/hyd.png' },
    { id: 25, title: 'CHANDIGARH UNIVERSITY', eventsCount: 7, bgImage: '/cardback.png', logo: '/iit.png' },
    { id: 26, title: 'SASTRA UNIVERSITY', eventsCount: 5, bgImage: '/cardback.png', logo: '/hyd.png' },
    { id: 27, title: 'KLU HYDERABAD', eventsCount: 9, bgImage: '/cardback.png', logo: '/iit.png' },
    { id: 28, title: 'SHARDA UNIVERSITY', eventsCount: 4, bgImage: '/cardback.png', logo: '/hyd.png' },
    { id: 29, title: 'GRAPHIC ERA UNIVERSITY', eventsCount: 6, bgImage: '/cardback.png', logo: '/iit.png' },
    { id: 30, title: 'MAHE MANGALORE', eventsCount: 7, bgImage: '/cardback.png', logo: '/hyd.png' },
    { id: 31, title: 'INDIAN SCHOOL OF MINES', eventsCount: 8, bgImage: '/cardback.png', logo: '/iit.png' },
    { id: 32, title: 'TEZPUR UNIVERSITY', eventsCount: 4, bgImage: '/cardback.png', logo: '/hyd.png' },
    { id: 33, title: 'JAMIA MILLIA ISLAMIA', eventsCount: 5, bgImage: '/cardback.png', logo: '/iit.png' },
    { id: 34, title: 'ALIGARH MUSLIM UNIVERSITY', eventsCount: 7, bgImage: '/cardback.png', logo: '/hyd.png' },
    { id: 35, title: 'IGNOU', eventsCount: 6, bgImage: '/cardback.png', logo: '/iit.png' },
    { id: 36, title: 'TISS MUMBAI', eventsCount: 5, bgImage: '/cardback.png', logo: '/hyd.png' },
    { id: 37, title: 'NARSEE MONJEE INSTITUTE', eventsCount: 7, bgImage: '/cardback.png', logo: '/iit.png' },
    { id: 38, title: 'BML MUNJAL UNIVERSITY', eventsCount: 8, bgImage: '/cardback.png', logo: '/hyd.png' },
    { id: 39, title: 'SRM AMARAVATI', eventsCount: 6, bgImage: '/cardback.png', logo: '/iit.png' },
    { id: 40, title: 'JAIN UNIVERSITY', eventsCount: 9, bgImage: '/cardback.png', logo: '/hyd.png' }


];

const EventPage = () => {
    const [search, setSearch] = useState('');
    const [filter, setFilter] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 16;

    const normalize = (str: string) => str.toLowerCase().trim();

    const filteredEvents = eventsData.filter((event) => {
        const matchesSearch = normalize(event.title).includes(normalize(search));
        const matchesFilter = filter === '' || event.title === filter;
        return matchesSearch && matchesFilter;
    });

    const totalPages = Math.ceil(filteredEvents.length / itemsPerPage);
    const indexOfLast = currentPage * itemsPerPage;
    const indexOfFirst = indexOfLast - itemsPerPage;
    const eventsToShow = filteredEvents.slice(indexOfFirst, indexOfLast);

    const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setCurrentPage(value);
    };

    // Dynamically collect unique titles for filter dropdown
    const uniqueTitles = Array.from(new Set(eventsData.map(e => e.title)));

    return (
        <div className={styles.container}>
            <h1 className={styles.heading}>Discover Events from Top Colleges & Trusted Organizers</h1>
            <p className={styles.subheading}>Unleash the thrill of events and create stories to remember</p>

            <div className={styles.searchFilter}>
                <input
                    type="text"
                    placeholder="Search for events, Colleges, or Organizations"
                    value={search}
                    onChange={(e) => {
                        setSearch(e.target.value);
                        setCurrentPage(1);
                    }}
                    className={styles.searchInput}
                />

                <select
                    value={filter}
                    onChange={(e) => {
                        setFilter(e.target.value);
                        setCurrentPage(1);
                    }}
                    className={styles.filterSelect}
                >
                    <option value="">All</option>
                    {uniqueTitles.map(title => (
                        <option key={title} value={title}>{title}</option>
                    ))}
                </select>
            </div>

            {filteredEvents.length === 0 ? (
                <div className={styles.noResults}>No events found.</div>
            ) : (
                <>
                    <div className={styles.grid}>
                        {eventsToShow.map((event) => (
                            <div key={`${event.id}-${event.title}`} className={styles.cardNew}>
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
                                    <p className={styles.eventsCount}>
                                        <strong>{event.eventsCount}</strong> upcoming events
                                    </p>
                                    <button className={styles.viewButtonNew}>View Events</button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {totalPages > 1 && (
                        <Stack spacing={2} className={styles.paginationContainer}>
                            <Pagination
                                count={totalPages}
                                page={currentPage}
                                onChange={handlePageChange}
                                color="primary"
                                size="large"
                                className={styles.pagination}
                            />
                        </Stack>
                    )}

                </>
            )}
        </div>
    );
};

export default EventPage;
