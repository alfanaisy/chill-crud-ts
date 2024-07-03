import { Outlet } from 'react-router-dom';
import Navbar from './components/navbar/navbar.component';

import styles from './index.module.css';

const Layout = () => {
  return (
    <>
      <Navbar />
      <div className={styles.content}>
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
