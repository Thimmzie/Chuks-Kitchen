import React from 'react';
import FoodLoginMobile from '../../../public/images/login-food-mobile.png';
import Logo from '../../../public/images/Chuks Kitchen.png';
import Cutlery from '../../../public/images/fork-knife-fill.png';
import Bus from '../../../public/images/bus.png';
import ImgLoginDesktop from '../../../public/images/login-img-desktop.png';
import { useNavigate } from 'react-router-dom';

const welcome = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col gap-5 mt-4 px-7 sm:px-14 lg:flex-row lg:px-0 lg:mt-0">
      {/* <div>
        <h1 className="text-black text-4xl lg:block xl:hidden">see here</h1>
      </div> */}
      <div className="lg:w-[95%] ">
        <img className="mx-auto w-full lg:hidden" src={FoodLoginMobile} />

        <img className="hidden lg:block" src={ImgLoginDesktop} />

        <div className="flex justify-end mt-6 lg:hidden">
          <button
            className="text-[#1e88e5] text-[1rem] px-10 py-2 border-2 border-[#1e88e5] rounded-xl"
            onClick={() => navigate('/signIn')}
          >
            Sign In
          </button>
        </div>
      </div>
      <div>
        <div>
          <div className="mt-8 lg:flex justify-between lg:items-center lg:px-10">
            <div className="logo flex justify-center lg:justify-start lg:pl-7">
              <img className="h-[4.5vh]" src={Logo} />
            </div>
            <div className="desktop-button hidden lg:block">
              <button
                className="text-[#1e88e5] text-[1rem] px-9 py-2 border-2 border-[#1e88e5] rounded-xl hover:bg-[#1e88e5] hover:text-[#ffff] hover:cursor-pointer transition duration-500 ease-in-out"
                onClick={() => navigate('/signIn')}
              >
                Sign In
              </button>
            </div>
          </div>
          <div>
            <div className="mt-3 lg:mt-36">
              <h1 className="text-[#1f2937] text-[1.9rem] font-bold leading-10 md:text-center">
                Your Authentic Taste of Nigeria
              </h1>
              <p className="pt-3 text-[#2a313a] text-[1.1rem] lg:text-[1rem] lg:px-20 lg:pt-5">
                Experience homemade flavors delivered fresh to your desk or
                home. We bring the rich culinary heritage of Nigeria right to
                your doorstep.
              </p>
            </div>
            <div className="grid grid-cols-1 mt-5 gap-3 lg:px-19 lg:grid-cols-2">
              <div className="bg-[#f3f4f6] lg:bg-[#ffffff] rounded-lg w-full h-[8vh] flex items-center gap-3 p-2">
                <div className="bg-[#ffe1c4] rounded-xl">
                  <img className="p-2" src={Cutlery} />
                </div>
                <div>
                  <h1 className="text-[1rem] lg:text-[0.9rem]">
                    Freshly Prepared
                  </h1>
                </div>
              </div>
              <div className="bg-[#f3f4f6] lg:bg-[#ffffff] rounded-lg w-full h-[8vh] flex items-center gap-3 p-2">
                <div className="bg-[#ffe1c4] rounded-xl">
                  <img className="p-2" src={Cutlery} />
                </div>
                <div>
                  <h1 className="text-[1rem] lg:text-[0.9rem]">
                    Support Local Business
                  </h1>
                </div>
              </div>
              <div className="bg-[#f3f4f6] lg:bg-[#ffffff] rounded-lg w-full h-[8vh] flex items-center gap-3 p-2">
                <div className="bg-[#ffe1c4] rounded-xl">
                  <img className="p-2" src={Bus} />
                </div>
                <div>
                  <h1 className="text-[1rem] lg:text-[0.9rem]">
                    Fast & Reliable Delivery
                  </h1>
                </div>
              </div>
            </div>
            <div className="mt-11 flex flex-col mb-10 lg:mb-0 gap-3 lg:px-22">
              <button className="bg-[#ff7a18] text-[#ffffff] text-[1rem] w-full h-[8vh] rounded-xl hover:bg-[#ffffff] hover:text-[#ff7a18] hover:cursor-pointer transition duration-500 ease-in-out hover:border-2 hover:border-[#ff7a18]">
                Start Your Order
              </button>
              <button className="border-2 border-[#1e88e5] text-[#1e88e5] w-full h-[8vh] rounded-xl text-[1rem] hover:bg-[#1e88e5] hover:text-[#ffffff] hover:cursor-pointer transition duration-500 ease-in-out hover:border-0">
                Learn More About Us
              </button>
            </div>
            <div className="hidden lg:mt-40 lg:flex gap-5 lg:mb-0 lg:px-27 xl:mt-60">
              <p className="text-[#3b4450] text-[0.9rem]">
                &copy; 2024 Chuks Kitchen
              </p>

              <a className="text-[#64b5f6] text-[0.9rem]" href="#">
                Privacy Policy
              </a>
              <a className="text-[#64b5f6] text-[0.9rem]" href="#">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default welcome;
