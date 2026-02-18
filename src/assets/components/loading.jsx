import React from 'react';
import Load from '../images/load.png';
import { useNavigate } from 'react-router-dom';

const loading = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-[#f3f4f6] flex justify-center items-center h-screen pt-6 lg:pt-16 pb-16 px-3 sm:px-15 md:px-25 lg:px-80 xl:px-96">
      <a href="#" onClick={() => navigate('/success')}>
        <img src={Load} />
      </a>
    </div>
  );
};

export default loading;
