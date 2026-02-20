import React from 'react';
import Navbar from './../components/navbar';
import HomeBody from './../components/homebody';
import Footer from './../components/footer';

const home = () => {
  return (
    <div className="page-content">
      <Navbar />
      <HomeBody />
      <Footer />
    </div>
  );
};

export default home;
