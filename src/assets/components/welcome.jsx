import React from 'react';
import FoodLoginMobile from '../../../public/images/login-food-mobile.png';
import Logo from '../../../public/images/Chuks Kitchen.png';
import Cutlery from '../../../public/images/fork-knife-fill.png';
import Bus from '../../../public/images/bus.png';

const welcome = () => {
  return (
    <div className="flex flex-col gap-5 mt-4 px-7">
      <div>
        <img className="mx-auto" src={FoodLoginMobile} />
        <div className="flex justify-end mt-6">
          <button className="text-[#1e88e5] text-[1.2rem] px-10 py-2.5 border-2 border-[#1e88e5] rounded-xl">
            Sign In
          </button>
        </div>
      </div>
      <div>
        <div className="mt-8">
          <div className="logo flex justify-center">
            <img src={Logo} />
          </div>
          <div className="desktop-button hidden md:block">
            <button>Sign In</button>
          </div>
        </div>
        <div>
          <div className="mt-3">
            <h1 className="text-[#1f2937] text-[1.9rem] font-bold leading-10">
              Your Authentic Taste of Nigeria
            </h1>
            <p className="pt-3 text-[#1f2937] text-[1.1rem]">
              Experience homemade flavors delivered fresh to your desk or home.
              We bring the rich culinary heritage of Nigeria right to your
              doorstep.
            </p>
          </div>
          <div className="grid grid-cols-1 mt-5 gap-3">
            <div className="bg-[#f3f4f6] rounded-lg w-full h-[8vh] flex items-center gap-3 p-2">
              <div className="bg-[#ffe1c4] rounded-xl">
                <img className="p-2" src={Cutlery} />
              </div>
              <div>
                <h1 className="text-[1rem]">Freshly Prepared</h1>
              </div>
            </div>
            <div className="bg-[#f3f4f6] rounded-lg w-full h-[8vh] flex items-center gap-3 p-2">
              <div className="bg-[#ffe1c4] rounded-xl">
                <img className="p-2" src={Cutlery} />
              </div>
              <div>
                <h1 className="text-[1rem]">Support Local Business</h1>
              </div>
            </div>
            <div className="bg-[#f3f4f6] rounded-lg w-full h-[8vh] flex items-center gap-3 p-2">
              <div className="bg-[#ffe1c4] rounded-xl">
                <img className="p-2" src={Bus} />
              </div>
              <div>
                <h1 className="text-[1rem]">Fast & Reliable Delivery</h1>
              </div>
            </div>
          </div>
          <div className="mt-11 flex flex-col gap-3 mb-12">
            <button className="bg-[#ff7a18] text-[#ffffff] text-[1rem] w-full h-[8vh] rounded-xl">
              Start Your Order
            </button>
            <button className="border-2 border-[#1e88e5] text-[#1e88e5] w-full h-[8vh] rounded-xl text-[1rem]">
              Learn More About Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default welcome;
