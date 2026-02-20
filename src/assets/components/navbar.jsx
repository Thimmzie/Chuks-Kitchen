import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { navLinks } from './../../../constants/index.js';
import Logo from '../images/chuks-logo.png';
import { useNavigate, NavLink } from 'react-router-dom';

const navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-between items-center bg-[#ffff] px-3 py-3 sm:px-8 md:px-12">
      <div>
        <img className="h-[4vh]" src={Logo} />
      </div>
      <div className="hidden lg:block">
        <ul className="hidden lg:flex lg:gap-33">
          {navLinks.map((menu) => (
            <li key={menu.id}>
              <NavLink
                to={menu.path}
                className={({ isActive }) =>
                  `text-[1rem] transition duration-700 ease-in-out ${
                    isActive
                      ? 'text-[#ff7a18]'
                      : 'text-[#1f2937] hover:text-[#ff7a18]'
                  }`
                }
              >
                {menu.menu}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className="lg:hidden">
        {' '}
        <GiHamburgerMenu size={25} />
      </div>
      <div className="hidden lg:block">
        <button
          className="bg-[#ff7a18] text-[#ffffff] text-[1rem] lg:text-[1rem] px-8 py-4 lg:py-2.5 lg:px-12 rounded-xl hover:bg-[#ffffff] hover:text-[#ff7a18] hover:cursor-pointer transition duration-500 ease-in-out border border-transparent hover:border-amber-700 mt-3 outline-0"
          onClick={() => navigate('/signin')}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default navbar;
