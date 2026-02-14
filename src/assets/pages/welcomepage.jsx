import React from 'react';
import Welcome from '../components/welcome';
import Footer from '../components/footer';

const welcomepage = () => {
  return (
    <div className="page-content">
      <Welcome />
      <Footer />
    </div>
  );
};

export default welcomepage;
