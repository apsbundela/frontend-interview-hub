import { Outlet } from 'react-router-dom';
import Header from '../shared/components/Header';
import Footer from '../shared/components/Footer';

export const PublicLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
