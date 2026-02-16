import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';

import Logo from './../../../public/images/Chuks kitchen.png';

const navbar = () => {
  return (
    <div className="flex justify-between bg-[#ffff]">
      <div>
        <img src={Logo} />
      </div>
      <div className="hidden lg:flex"></div>
      <div className="lg:hidden">
        {' '}
        <GiHamburgerMenu />
      </div>
      <div className="hidden lg:block">
        <button></button>
      </div>
    </div>
  );
};

export default navbar;
