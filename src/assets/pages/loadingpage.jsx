import React from 'react';
import Navbar from '../components/navbar';
import Loading from '../components/loading';
import Footer from '../components/footer';

const loadingpage = () => {
  return (
    <div className="page-content">
      <Navbar />
      <Loading />
      <Footer />
    </div>
  );
};

export default loadingpage;
