import { Navigate, Outlet } from 'react-router-dom';
import Navbar from './components/navbar/navbar.component';

import Footer from './components/footer/footer.component';
import styles from './index.module.css';
import useUserStore from './stores/user.store';

const Layout = () => {
  const currentUser = useUserStore((state) => state.currentUser);

  return (
    <>
      {!currentUser && <Navigate to={'/login'} />}
      <Navbar />
      <div className={styles.content}>
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
