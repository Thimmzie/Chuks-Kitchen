import React from 'react';
import { FaCheck } from 'react-icons/fa6';

const success = () => {
  return (
    <div className="bg-[#f3f4f6]  h-screen pt-6 lg:pt-16 pb-16 px-3 sm:px-15 md:px-25 lg:px-80 xl:px-96">
      <div className="flex flex-col gap-2.5 items-center mt-14">
        <FaCheck
          className="bg-[#0e7a3e] px-3 py-3 text-[#ffff] rounded-full"
          size={45}
        />
        <p className="text-[1rem]">Order Placed Successfully!</p>
        <p className="text-center text-[1rem] text-[#474646]">
          Your delicious Chuks Kitchen meal is on its way!
        </p>
      </div>
      <div className="mt-50 flex flex-col items-center">
        <h1 className="text-center text-[1.3rem]">
          Order #123RGR231567Y Confirmed
        </h1>
        <button className="bg-[#ff7a18] text-[#ffffff] text-[1rem] lg:text-[1rem] w-full h-[8.5vh] rounded-xl hover:bg-[#ffffff] hover:text-[#ff7a18] hover:cursor-pointer transition duration-500 ease-in-out border border-transparent hover:border-amber-700 mt-3 outline-0 mb-2 lg:w-[27vw]">
          Track Order
        </button>
      </div>
      <div className="flex flex-col items-center gap-4 mt-5 ">
        <p className="text-[#919191]">Generate Receipt</p>
        <p className="text-[#3995e7]">Need help with your order?</p>
      </div>
    </div>
  );
};

export default success;
