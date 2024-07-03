import { Outlet } from 'react-router-dom';
import Navbar from './components/navbar/navbar.component';

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default Layout;
