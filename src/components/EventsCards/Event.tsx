// // EventCard.js
// import React from 'react';
// import styles from './LatestEvents.module.css';

// const EventCard = ({ imageUrl, title, date, isSellingFast, onLike, onRegister }) => {
//   return (
//     <div className={styles.eventCard}>
//       <img src={imageUrl} alt={title} />
//       <div className={styles.cardBody}>
//         <h3>{title}</h3>
//         <div>
//           <span className={`${styles.tag} ${styles.dateTag}`}>{date}</span>
//           {isSellingFast && (
//             <span className={`${styles.tag} ${styles.sellingFast}`}>Selling Fast</span>
//           )}
//         </div>
//         <button className={styles.registerBtn} onClick={onRegister}>
//           Register Now
//         </button>
//         <button className={styles.likeBtn} onClick={onLike}>
//           ❤️
//         </button>
//       </div>
//     </div>
//   );
// };

// export default EventCard;
