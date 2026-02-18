import React from 'react';
import Navbar from '../components/navbar';
import Order from '../components/order';
import Footer from '../components/footer';

const orderpage = () => {
  return (
    <div className="page-content">
      <Navbar />
      <Order />
      <Footer />
    </div>
  );
};

export default orderpage;
