import styles from './footer.module.css';
import Logo from '../../assets/logo.svg';
import FooterItem from '../footer-item/footer-item.component';

const genres: string[] = [
  'Aksi',
  'Drama',
  'Komedi',
  'Sains & Alam',
  'Anak-anak',
  'Fantasi Ilmiah & Fantasi',
  'Petualangan',
  'Thriller',
  'Anime',
  'Kejahatan',
  'Perang',
  'Britania',
  'KDrama',
  'Romantis',
];
const helps: string[] = ['FAQ', 'Kontak Kami', 'Privasi', 'Syarat & Ketentuan'];

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerLogo}>
        <img src={Logo} alt="footer-logo" />
        <p>@2024 Chill All Rights Reserved.</p>
      </div>
      <FooterItem title="Genre" items={genres} />
      <FooterItem title="Bantuan" items={helps} />
    </div>
  );
};

export default Footer;
