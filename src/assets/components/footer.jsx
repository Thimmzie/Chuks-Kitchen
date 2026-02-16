import React from 'react';
import Logo from '../images/chuks-logo.png';
import { links } from '../../../constants/index.js';
import { FaArrowUpLong } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';

const footer = () => {
  const navigate = useNavigate();
  return (
    <div className="hidden lg:block bg-[#62412e] h-[65vh] px-28 pt-15">
      <div className="flex gap-35 ">
        <div>
          <img src={Logo} />
          <p className="text-[1.4rem] text-[#ffffff] pt-1">
            Bringing the authentic <br /> flavors of Nigerian <br /> home
            cooking to your <br /> table, with passion <br /> and care.
          </p>
        </div>
        <div>
          <h1 className="text-[1.4rem] text-[#ffffff]">Quick Links</h1>
          {links.map((link) => {
            return (
              <div className="pt-2" key={link.id}>
                <a className="text-[#d8cfcb] text-[0.8rem]" href="#">
                  {link.link}
                </a>
              </div>
            );
          })}
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="text-[1.4rem] text-[#ffffff]">Contact Us</h1>
          <p className="text-[#d8cfcb] text-[0.8rem]">+234 801 234 5678</p>
          <p className="text-[#d8cfcb] text-[0.8rem]">hello@chukskitchen.com</p>
          <p className="text-[#d8cfcb] text-[0.8rem]">
            123 Taste Blvd, Lagos, Nigeria
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <a className="text-[#d8cfcb] text-[0.8rem]" href="#">
            Facebook
          </a>
          <a className="text-[#d8cfcb] text-[0.8rem]" href="#">
            Twwitter
          </a>
          <a className="text-[#d8cfcb] text-[0.8rem]" href="#">
            LinkedIn
          </a>
          <a className="text-[#d8cfcb] text-[0.8rem]" href="#">
            Instagram
          </a>
        </div>
      </div>
      <div className="flex justify-between mt-13">
        <p className="text-[#d8cfcb] text-[0.7rem]">
          &copy; 2020 Lift Media. All rights reserved.
        </p>
        <button
          onClick={() =>
            window.scrollTo({
              top: 0,
              left: 0,
            })
          }
          className="bg-[#0081fe] px-3 py-3 rounded-4xl"
        >
          <FaArrowUpLong className="text-[#ffff] cursor-pointer" size={22} />
        </button>
      </div>
    </div>
  );
};

export default footer;
