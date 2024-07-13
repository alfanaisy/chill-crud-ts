import { CgChevronDown } from 'react-icons/cg';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'usehooks-ts';

import Avatar from '../../assets/avatar.svg';
import LogoSmall from '../../assets/logo-sm.svg';
import Logo from '../../assets/logo.svg';

import styles from './navbar.module.css';
import { useState } from 'react';
import ProfileMenu from '../profile-menu/profile-menu.component';
import useUserStore from '../../stores/user.store';

const Navbar = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const [isShowMenu, setIsShowMenu] = useState(false);

  const currentUser = useUserStore((state) => state.currentUser);

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        <Link to={'/'} className={styles.navLogo}>
          <img src={isMobile ? LogoSmall : Logo} alt="navbar-logo" />
        </Link>

        <Link className={styles.navItem} to="/my-list">
          <span>Daftar Saya</span>
        </Link>
      </div>
      <div
        className={styles.profileMenu}
        onClick={() => setIsShowMenu(!isShowMenu)}
      >
        <img src={currentUser?.photoURL || Avatar} alt="avatar pic" />
        <span>
          <CgChevronDown />
        </span>
      </div>
      {isShowMenu && <ProfileMenu />}
    </nav>
  );
};

export default Navbar;
