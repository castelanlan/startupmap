import React from 'react';
import { ReactNode } from 'react';

import Header from '../Header';
import Footer from '../Footer';
import Info from '../Info';

// import { Container, Wrapper } from './styles';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC = () => {
  return (
    <>
      <Header />
      <Info />
      <Footer />
    </>
  );
};

export default Layout;
