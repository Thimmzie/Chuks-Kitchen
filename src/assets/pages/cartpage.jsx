import React from 'react';
import Navbar from '../components/navbar';
import Cart from '../components/cart';
import Footer from '../components/footer';

const cartpage = () => {
  return (
    <div className="page-content">
      <Navbar />
      <Cart />
      <Footer />
    </div>
  );
};

export default cartpage;
