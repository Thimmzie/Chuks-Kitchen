import React from 'react';
import Navbar from './../components/navbar';
import Explore from './../components/explore';
import Footer from './../components/footer';

const explorePage = () => {
  return (
    <div className="page-content">
      <Navbar />
      <Explore />
      <Footer />
    </div>
  );
};

export default explorePage;
