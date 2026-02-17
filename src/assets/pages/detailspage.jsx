import React from 'react';
import Navbar from '../components/navbar';
import Details from '../components/details';
import Footer from '../components/footer';

const detailspage = () => {
  return (
    <div className="page-content">
      <Navbar />
      <Details />
      <Footer />
    </div>
  );
};

export default detailspage;
