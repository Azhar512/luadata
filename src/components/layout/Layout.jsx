import React from 'react';
import Header from './Header';
import Footer from './Footer';
import SEOHead from '../common/SEOHead';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-x-hidden">
      <SEOHead />
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;