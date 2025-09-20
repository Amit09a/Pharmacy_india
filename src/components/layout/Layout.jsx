import React from 'react';
import Navbar from '../common/Navbar';
import Footer from '../common/Footer';
import FloatingButtons from '../ui/FloatingButtons/FloatingButtons';
import List from '../ui/List/List';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <FloatingButtons/>
      <List/>
      <Footer />
    </div>
  );
};

export default Layout;
