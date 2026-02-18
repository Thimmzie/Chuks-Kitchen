import React from 'react';
import Navbar from '../components/navbar';
import Payment from '../components/payment';
import Footer from '../components/footer';

const paymentpage = () => {
  return (
    <div className="page-content">
      <Navbar />
      <Payment />
      <Footer />
    </div>
  );
};

export default paymentpage;
