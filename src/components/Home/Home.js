import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import styles from './Home.module.css';

// Import images from local public folder
const teddyBearImg = '/images/teddy-bear.png';
const familyImg = '/images/family.png';
const babyImg = '/images/baby.png';
const babyImg1 = '/images/baby1.png';
const galleryImages = [
  '/images/baby-items.jpg',
  '/images/baby-shower.jpg',
  '/images/baby-clothes.jpg',
  '/images/baby-gifts.jpg'
];

const Home = () => {
  // These are State variables to manage form inputs and app logic
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [attending, setAttending] = useState('');
  const [guests, setGuests] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showMap, setShowMap] = useState(false);

  useEffect(() => {
    // Load map after component mount to avoid Server-Side-Rendering issues
    setShowMap(true);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here we send the RSVP data to a server
    console.log({ name, email, attending, guests });
    setIsSubmitted(true);
  };

  return (
    <div className={styles.container}>

      <h1 className={styles.pageHeading}>BABY SHOWER</h1>

      <header className={styles.header}>
        <nav className={styles.nav}>
          <a href="#home">Home</a>
          <a href="#venue">Venue</a>
          <a href="#rsvp">RSVP</a>
          <a href="#invitedBy">InvitedBy</a>
          <a href="#gallery">Gallery</a>
          
        </nav>
      </header>

      <main className={styles.mainContent}>
        <img src={teddyBearImg} alt="Teddy Bear" className={styles.teddyBear} />
        <p className={styles.babyInfo}>Join us and Let's celebrate</p>
        <h1 className={styles.title}>Baby Shower</h1>
        <img src={babyImg1} alt="Baby Image" className={styles.teddyBear} />
        <div className={styles.babyInfo}>
          <p>Welcoming Our Lovely</p>
          <h2 className={styles.babyName}>Baby Girl</h2>
        </div>

        <div className={styles.dateTime}>
          <p>APRIL 20TH | STARTS AT 05:00 PM</p>
        </div>

        <div className={styles.invitedBy} id="invitedBy">
          <img src={babyImg} alt="Baby Photo" className={styles.teddyBear} /> 
          <h3>Invited By</h3>
          <p className={styles.babyName}>Vanaras Family</p>
        </div>

        <div id="venue" className={styles.venue}>
          <img src={familyImg} alt="Family Photo" className={styles.teddyBear} /> 
          <h3>Venue</h3>
          <div className={styles.address}>
            <p>At My Home</p>
            <p>250 Stevenson St San</p>
            <p>Francisco, CA 94103,</p>
            <p>United States</p>
          </div>
        </div>

        <div id="rsvp" className={styles.rsvpSection}>
          <div className={styles.rsvpForm}>
            {!isSubmitted ? (
              <form onSubmit={handleSubmit}>
                <h3>Are You Attending?</h3>
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <select
                    value={attending}
                    onChange={(e) => setAttending(e.target.value)}
                    required
                  >
                    <option value="">Will you attend?</option>
                    <option value="yes">Yes, I'll be there!</option>
                    <option value="no">Sorry, I can't make it</option>
                  </select>
                </div>
                {attending === 'yes' && (
                  <div>
                    <input
                      type="number"
                      min="1"
                      max="5"
                      value={guests}
                      onChange={(e) => setGuests(Number(e.target.value))}
                    />
                  </div>
                )}
                <button type="submit">RSVP</button>
              </form>
            ) : (
              <div>
                <h3>Thank you for your response!</h3>
                <p>We've received your RSVP.</p>
              </div>
            )}
          </div>
          <div className={styles.mapContainer}>
            {showMap && (
              <MapContainer
                center={[37.7749, -122.4194]}
                zoom={13}
                style={{ height: '100%', width: '100%' }}
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={[37.7749, -122.4194]}>
                  <Popup>
                    250 Stevenson St San<br />
                    Francisco, CA 94103
                  </Popup>
                </Marker>
              </MapContainer>
            )}
          </div>
        </div>

        <div id="gallery" className={styles.gallery}>
          <h2>Gallery</h2>
          <div className={styles.galleryGrid}>
            {galleryImages.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Gallery ${index + 1}`}
                className={styles.galleryImage}
              />
            ))}
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>&copy; 2024 Baby Shower Celebration. All rights reserved.</p>
        <p>Made with ❤️ for our little princess</p>
      </footer>

      <img src="/images/balloon1.png" alt="Balloon 1" className={`${styles.decoration} ${styles.dec1}`} />
      <img src="/images/balloon2.png" alt="Balloon 2" className={`${styles.decoration} ${styles.dec2}`} />
      <img src="/images/toy1.png" alt="Toy 1" className={`${styles.decoration} ${styles.dec3}`} />
      <img src="/images/toy2.png" alt="Toy 2" className={`${styles.decoration} ${styles.dec4}`} />
      <img src="/images/rattle.png" alt="Rattle" className={`${styles.decoration} ${styles.dec5}`} />
      <img src="/images/star.png" alt="Star" className={`${styles.decoration} ${styles.dec6}`} />
      <img src="/images/duck.png" alt="Duck" className={`${styles.decoration} ${styles.dec7}`} />
    </div>
  );
};

export default Home; 