"use client"
import { useState } from 'react';
import MyNavbar from '../HomeNavBar/navbar';
import styles from './ConcertEvent.module.css';
import Image from 'next/image';
import Footer from '../Footer/footer';
import { FaMapMarkerAlt } from 'react-icons/fa';
import MoreEvents from '../EventsCards/MoreCrads';

const ConcertEvent = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [feedback, setFeedback] = useState('');

  const plans = [
    {
      title: 'Plan 1 - Demo',
      price: '₹200',
      duration: '4 classes',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      featured: false,
    },
    {
      title: 'Plan 2 - 2 week',
      price: '₹3,000',
      duration: '4 classes',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      featured: true,
    },
    {
      title: 'Plan 3 - 8 week',
      price: '₹200',
      duration: '4 classes',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      featured: false,
    },
    {
      title: 'Plan 3 - 8 week',
      price: '₹200',
      duration: '4 classes',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      featured: false,
    },
  ];
  const prizes = [
    {
      place: '1st prize',
      description: 'Exclusive Backstage Passes for contest winners',
      image: "/medal1.png",
      style: styles.goldCard,
    },
    {
      place: '2nd prize',
      description: 'Exclusive Backstage Passes for contest winners',
      image: "/medal2.png",
      style: styles.silverCard,
    },
    {
      place: '3rd prize',
      description: 'Exclusive Backstage Passes for contest winners',
      image: "/medal3.png",
      style: styles.bronzeCard,
    },
  ];

  const reviews = [
    {
      name: 'Durga Prasad P',
      title: 'Mechanical Engineer',
      rating: 4,
      img: '/Ellipse1.png',
      review:
        "A dream come true! Anirudh's energy was next level! The moment he started singing ‘Vaathi Coming,’ the entire crowd went wild. Best night ever!",
    },
    {
      name: 'Sartaj M',
      title: 'Software Engineer',
      rating: 5,
      img: '/Ellipse2.png',
      review:
        'Best concert experience ever! IIT Hyderabad rocked with insane lighting, bass that shook the ground, and a crowd that sang every lyric!',
    },
    {
      name: 'Kranthi Kumar R',
      title: 'Software Engineer',
      rating: 4,
      img: '/Ellipse3.png',
      review:
        'The sound, the lighting, the vibes—everything was perfect! The live performance of ‘Arabic Kuthu’ gave me chills! The stage setup was unreal!',
    },
    {
      name: 'Kranthi Kumar R',
      title: 'Software Engineer',
      rating: 4,
      img: '/Ellipse2.png',
      review:
        'The sound, the lighting, the vibes—everything was perfect! The live performance of ‘Arabic Kuthu’ gave me chills! The stage setup was unreal!',
    },
    {
      name: 'Kranthi Kumar R',
      title: 'Software Engineer',
      rating: 4,
      img: '/Ellipse2.png',
      review:
        'The sound, the lighting, the vibes—everything was perfect! The live performance of ‘Arabic Kuthu’ gave me chills! The stage setup was unreal!',
    },
    {
      name: 'Kranthi Kumar R',
      title: 'Software Engineer',
      rating: 4,
      img: '/Ellipse2.png',
      review:
        'The sound, the lighting, the vibes—everything was perfect! The live performance of ‘Arabic Kuthu’ gave me chills! The stage setup was unreal!',
    },
    {
      name: 'Kranthi Kumar R',
      title: 'Software Engineer',
      rating: 4,
      img: '/Ellipse2.png',
      review:
        'The sound, the lighting, the vibes—everything was perfect! The live performance of ‘Arabic Kuthu’ gave me chills! The stage setup was unreal!',
    },
    {
      name: 'Kranthi Kumar R',
      title: 'Software Engineer',
      rating: 4,
      img: '/Ellipse2.png',
      review:
        'The sound, the lighting, the vibes—everything was perfect! The live performance of ‘Arabic Kuthu’ gave me chills! The stage setup was unreal!',
    },
    {
      name: 'Kranthi Kumar R',
      title: 'Software Engineer',
      rating: 4,
      img: '/Ellipse2.png',
      review:
        'The sound, the lighting, the vibes—everything was perfect! The live performance of ‘Arabic Kuthu’ gave me chills! The stage setup was unreal!',
    },

  ];



  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Rating:', rating, 'Feedback:', feedback);
  };

  return (
    <>
      <MyNavbar />
      <div className={styles.container}>
        <div className={styles.leftSection}>
          <div className={styles.imageWrapper}>
            <Image
              src="/Anirudh.png"
              alt="Anirudh Live"
              layout="fill"
              objectFit="cover"
              className={styles.concertImage}
            />
            <div className={styles.overlayText}>
              Anirudh Live in Concert – IIT Hyderabad
            </div>
          </div>

          <div className={styles.infoBox}>
            <div className={styles.collegeDetails}>
              <Image src="/hyd.png" alt="Logo" width={100} height={100} />
              <div className={styles.collegList}>
                <h2>IIT Hyderabad</h2>
                <button className={styles.activeEventsBtn}>35 Active events</button>
                <a className={styles.viewLink}>View ➡</a>
              </div>
            </div>

            <div className={styles.locationDetails}>
              <h3>Location Details</h3>
              <p className={styles.loc}>        <FaMapMarkerAlt className={styles.locationIcon} /> Open Air Auditorium</p>
              <a className={styles.viewLink}>      <FaMapMarkerAlt className={styles.locationIcon} /> View Map</a>
            </div>

            <div className={styles.contactDetails}>
              <h3>Contact Details</h3>
              <p>+91 XXXXXXXXXX</p>
              <p>Email: events@iithyderabad.in</p>
            </div>
          </div>
        </div>

        <div className={styles.rightSection}>
          <div className={styles.registrationBox}>
            <h3><strong>Registration status</strong></h3>
            <p>Registration Opens: <strong>Feb 15</strong></p>
            <p>Registration Closes:<strong>April 30</strong></p>
            <p>Available Slots:<span className={styles.slots}>150 remaining</span></p>
            <button className={styles.registerBtn}>Register Now</button>
          </div>

          <div className={styles.socialBox}>
            <h3>Social Media</h3>
            <div className={styles.icons}>
              <Image src="/insta.png" style={{ background: " rgba(59, 130, 246, 1)", padding: "0.3rem", borderRadius: "30px" }} alt="Instagram" width={40} height={40} />
              <Image src="/youtube.png" style={{ background: " rgba(59, 130, 246, 1)", padding: "0.3rem", borderRadius: "30px" }} alt="YouTube" width={40} height={40} />
              <Image src="/twitter.png" style={{ background: " rgba(59, 130, 246, 1)", padding: "0.3rem", borderRadius: "30px" }} alt="X (Twitter)" width={40} height={40} />
            </div>
          </div>
        </div>
      </div>

      {/* social media container */}
      <div className={styles.container1}>
        {/* Top Stats */}
        <div className={styles.statsGrid}>
          <div className={styles.statBox}>
            <Image alt="Logo" src="/btnicon1.png" width={30} height={30} />
            <div>
              <p className={styles.label}>Registered</p>
              <p className={styles.value}>1600</p>
            </div>
          </div>
          <div className={styles.statBox}>
            <Image alt="Logo" src="/btnicon3.png" width={30} height={30} />
            <div>
              <p className={styles.label}>Group Size</p>
              <p className={styles.value}>max 1 - 6</p>
            </div>
          </div>
          <div className={styles.statBox}>
            <Image alt="Logo" src="/btnicon4.png" width={30} height={30} />
            <div>
              <p className={styles.label}>Impressions</p>
              <p className={styles.value}>88000</p>
            </div>
          </div>
          <div className={styles.statBox}>
            <Image alt="Logo" src="/btnicon2.png" width={30} height={30} />
            <div>
              <p className={styles.label}>Registration Deadline</p>
              <p className={styles.value}>2 days left</p>
            </div>

          </div>
        </div>

        {/* Tabs */}
        <div className={styles.tabButtons}>
          {['About Event', 'Rewards', 'Plans'].map((tab, i) => (
            <button key={i} className={styles.tabButton}>
              {tab}
            </button>
          ))}
        </div>

        {/* About Section */}
        <div className={styles.aboutSection}>
          <h2 className={styles.aboutTitle}>About the event</h2>
          <p className={styles.aboutText}>
            My Music My Country proudly presents Anirudh Ravichander,
            the musical sensation behind chart-topping hits like Vaathi
            Coming, Arabic Kuthu, and the Leo Anthem, in a spectacular
            live concert organized by Hyderabad Talkies. Get ready for
            an electrifying night as Anirudh, one of India's most
            celebrated music composers and singers, takes the stage
            for an unforgettable performance! Known for his high-energy
            beats and soul-stirring melodies, this concert promises an experience like never before.
          </p>
        </div>
      </div>

      <div className={styles.container2}>
        <h2 className={styles.heading}>Plans & Pricing</h2>
        <div className={styles.grid}>
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`${styles.card} ${plan.featured ? styles.featured : ''}`}
            >
              <h3 className={styles.title}>{plan.title}</h3>
              <p className={styles.price}>
                {plan.price}
                <span className={styles.duration}>/ {plan.duration}</span>
              </p>
              <p className={styles.description}>{plan.description}</p>
              <button className={styles.button1}>View</button>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.container3}>
        <h2 className={styles.heading3}>Prizes and rewards</h2>
        <div className={styles.grid3}>
          {prizes.map((item, index) => (
            <div key={index} className={`${styles.card3} ${item.style}`}>
              <Image src={item.image} alt={`${item.place} medal`} width={70} height={70} />
              <div className={styles.card3text}>
                <h3 className={styles.place}>{item.place}</h3>
                <p className={styles.description}>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.cardRefer}>
        <div className={styles.textSectionRefer}>
          <h2>Refer & Win – Exciting Rewards Await!</h2>
          <p className={styles.subTextRefer}>Invite your friends and win exclusive prizes</p>
          <p className={styles.prizesRefer}>MacBook, iPhone, Apple Watch, Cash & More!</p>

          <div className={styles.ctaRow}>
            <button className={styles.referBtnRefer}>Refer Now</button>
            <span className={styles.icon}>🔁</span>
          </div>

          <p className={styles.limitedNote}>Hurry up! Limited seats available!</p>
        </div>

        <div className={styles.imageSection}>
          <Image src="/refer.png" alt="Refer & Earn" width={180} height={180} />
        </div>
      </div>

      <div className={styles.container5}>
        <h2 className={styles.title5}>Reviews & Ratings</h2>
        <div className={styles.carousel5}>
          {reviews.map((review, index) => (
            <div className={styles.card5} key={index}>
              <div className={styles.cardPart}>
                <div>
                  <h3 className={styles.name}>{review.name}</h3>
                  <p className={styles.role}>{review.title}</p>
                </div>
                <img src={review.img} alt={review.name} className={styles.avatar} />

              </div>
              <div className={styles.stars}>
                {[...Array(5)].map((_, i) => (
                  <span key={i}>{i < review.rating ? '⭐' : '☆'}</span>
                ))}
              </div>
              <p className={styles.text}>"{review.review}"</p>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.container6}>
        <div className={styles.left}>
          <h2>We appreciate your <br>
          </br> feedback!</h2>
          <p>Share your thoughts on the event and help us  <br></br>deliver better.</p>
        </div>
        <form onSubmit={handleSubmit} className={styles.right}>
          <label className={styles.label}>Rate</label>
          <div className={styles.stars}>
            {[...Array(5)].map((_, i) => {
              const ratingValue = i + 1;
              return (
                <span
                  key={i}
                  className={
                    ratingValue <= (hover || rating)
                      ? styles.starActive
                      : styles.starInactive
                  }
                  onClick={() => setRating(ratingValue)}
                  onMouseEnter={() => setHover(ratingValue)}
                  onMouseLeave={() => setHover(0)}
                >
                  ★
                </span>
              );
            })}
          </div>
          <textarea
            className={styles.textarea}
            placeholder="Type your feedback..."
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            rows={4}
          />
        <div className={styles.btnposition}>
        <button type="submit" className={styles.button2}>
            Submit My feedback
          </button>
        </div>
        </form>
      </div>

      <div className={styles.eventsContainer}>
        <h1>Similar Events you might like</h1>
        <MoreEvents />
      </div>
      <Footer />
    </>
  );
};

export default ConcertEvent;
