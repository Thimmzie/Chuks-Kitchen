import React from 'react';
import Navbar from '../components/navbar';
import Delivery from '../components/delivery';
import Footer from '../components/footer';

const deliverypage = () => {
  return (
    <div className="page-content">
      <Navbar />
      <Delivery />
      <Footer />
    </div>
  );
};

export default deliverypage;
