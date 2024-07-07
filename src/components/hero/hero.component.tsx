import { useState } from 'react';
import {
  IoIosInformationCircleOutline,
  IoMdVolumeHigh,
  IoMdVolumeOff,
} from 'react-icons/io';
import styles from './hero.module.css';
import { useMediaQuery } from 'usehooks-ts';

const Hero = () => {
  const [isMuted, setIsMuted] = useState(false);

  const isMobile = useMediaQuery('(max-width:768px)');

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  return (
    <div className={styles.heroContainer}>
      <img
        src="https://i.ibb.co.com/YD6mpYM/hero-img.png"
        alt="hero-background"
      />
      <div className={styles.heroContent}>
        <div className={styles.heroMeta}>
          <h2 className={styles.title}>Duty After School</h2>
          <p className={styles.description}>
            Sebuah benda tak dikenal mengambil alih dunia. Dalam keputusasaan,
            Departemen Pertahanan mulai merekrut lebih banyak tentara, termasuk
            siswa sekolah menengah. Mereka pun segera menjadi pejuang garis
            depan dalam perang.
          </p>
        </div>
        <div className={styles.heroActions}>
          <div className={styles.actionButtons}>
            <button className={`${styles.btn} `}>Mulai</button>
            <button className={`${styles.btn} ${styles.info} `}>
              <IoIosInformationCircleOutline />
              &nbsp;Selengkapnya
            </button>
            <span className={styles.ageRating}>18+</span>
          </div>
          <span onClick={toggleMute} className={styles.volumeControl}>
            {isMuted ? (
              <IoMdVolumeOff size={`${isMobile ? '20px' : '24px'}`} />
            ) : (
              <IoMdVolumeHigh size={`${isMobile ? '20px' : '24px'}`} />
            )}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
