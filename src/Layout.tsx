import { Outlet } from 'react-router-dom';
import Navbar from './components/navbar/navbar.component';

import Footer from './components/footer/footer.component';
import styles from './index.module.css';

const Layout = () => {
  return (
    <>
      <Navbar />
      <div className={styles.content}>
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
