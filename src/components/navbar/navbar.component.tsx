import { CgChevronDown } from 'react-icons/cg';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'usehooks-ts';

import Avatar from '../../assets/avatar.svg';
import LogoSmall from '../../assets/logo-sm.svg';
import Logo from '../../assets/logo.svg';

import styles from './navbar.module.css';

const Navbar = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        <Link to={'/'} className={styles.navLogo}>
          <img src={isMobile ? LogoSmall : Logo} alt="navbar-logo" />
        </Link>

        <Link className={styles.navItem} to="/series">
          <span>Series</span>
        </Link>
        <Link className={styles.navItem} to="/film">
          <span>Film</span>
        </Link>
        <Link className={styles.navItem} to="/my-list">
          <span>Daftar Saya</span>
        </Link>
      </div>
      <div className={styles.profileMenu}>
        <img src={Avatar} alt="avatar pic" />
        <span>
          <CgChevronDown />
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
