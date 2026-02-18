import React from 'react';
import { useNavigate } from 'react-router-dom';

const order = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-[#f3f4f6] pt-6 lg:pt-16 pb-16 px-3 sm:px-15 md:px-25 lg:px-80 xl:px-96">
      <div className="bg-[#ffffff] rounded-lg pt-3.5 px-2 sm:px-8">
        <h1 className="text-[1.6rem] font-bold">Order Summary</h1>
        <div className="h-[0.5px] bg-[#bbbbbb] w-full mt-3"></div>
        <p className="pt-8 text-[0.9rem]">Add promo code here</p>
        <div className="flex gap-2.5 mt-3">
          <input
            type="text "
            placeholder="Enter code here"
            className="text-[1rem] text-[#2e2e2e] border border-[#cecece] rounded-lg px-3 w-full h-[7vh] "
          />
          <button className="bg-[#ff7a18] text-[#ffffff] text-[1rem] px-16 h-[7vh] lg:text-[0.9rem] rounded-lg hover:bg-[#ffffff] hover:text-[#ff7a18] hover:cursor-pointer transition duration-500 ease-in-out border border-transparent hover:border-amber-700 outline-0">
            Login
          </button>
        </div>
        <div className="flex flex-col mt-10 gap-2.5">
          <div className="flex justify-between text-[#3d3d3d] text-[1rem]">
            <p>Subtotal</p>
            <p> {'\u20A6'}9,200</p>
          </div>
          <div className="flex justify-between text-[#3d3d3d] text-[1rem]">
            <p>Delivery Fee</p>
            <p> {'\u20A6'}500</p>
          </div>
          <div className="flex justify-between text-[#3d3d3d] text-[1rem]">
            <p>Service Fee</p>
            <p> {'\u20A6'}200</p>
          </div>
          <div className="flex justify-between text-[#3d3d3d] text-[1rem]">
            <p>Tax</p>
            <p> {'\u20A6'}0</p>
          </div>
        </div>
        <div className="h-[0.5px] bg-[#bbbbbb] w-full mt-6"></div>
        <div className="mt-6 flex justify-between">
          <h1 className="text-[1.4rem]">Total</h1>
          <h1 className="text-[1.4rem]">{'\u20A6'}9,900</h1>
        </div>
        <div className="mt-6 flex w-full rounded-xl bg-transparent h-[8vh]">
          <div className="text-[#ffff] flex-1 text-[1rem] text-center bg-[#ff7a18] rounded-tl-xl rounded-bl-xl flex justify-center items-center">
            <p> Delivery</p>
          </div>
          <div className="text-[#ffff] flex-1 text-[1rem] text-center bg-[#bdbdbd] rounded-tr-xl rounded-br-xl flex justify-center items-center">
            <p>Pick up</p>
          </div>
        </div>
        <div>
          <h1 className="text-[1.1rem] font-bold mt-10 lg:mt-7">
            Special Instructions for restaurants
          </h1>

          <textarea
            className="rounded-lg mt-4 w-full h-[17vh] px-2 border border-[#3b3b3b] text-[1rem] mb-2 outline-0 pt-2"
            placeholder="E.g no onion, food is too spicy, food is too hothhhhhhhhhh food is tasty"
          ></textarea>
        </div>
        <div>
          <button
            className="bg-[#ff7a18] text-[#ffffff] text-[1rem] lg:text-[1rem] w-full h-[7.5vh] rounded-xl hover:bg-[#ffffff] hover:text-[#ff7a18] hover:cursor-pointer transition duration-500 ease-in-out border border-transparent hover:border-amber-700 mt-2 outline-0 mb-7"
            onClick={() => navigate('/delivery')}
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default order;
