import { IoIosLogOut } from 'react-icons/io';
import { IoPersonSharp, IoStarSharp } from 'react-icons/io5';
import styles from './profile-menu.module.css';
import { signOutUser } from '../../utils/firebase/firebase-config';
import useUserStore from '../../stores/user.store';

const ProfileMenu = () => {
  const signOut = useUserStore((state) => state.signOut);
  const logout = () => {
    signOutUser();
    signOut();
  };

  return (
    <div className={styles.container}>
      <div className={styles.menuItem}>
        <span>
          <IoPersonSharp size={16} />
        </span>
        Profile Saya
      </div>
      <div className={styles.menuItem}>
        <span>
          <IoStarSharp size={16} />
        </span>
        Ubah Premium
      </div>
      <div className={styles.menuItem} onClick={logout}>
        <span>
          <IoIosLogOut size={16} />
        </span>
        Keluar
      </div>
    </div>
  );
};

export default ProfileMenu;