import React from 'react';
import { MdRadioButtonChecked } from 'react-icons/md';
import { IoIosRadioButtonOff } from 'react-icons/io';
import { MdOutlineCheckBoxOutlineBlank } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

const payment = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-[#f3f4f6] pt-6 lg:pt-16 pb-16 px-3 sm:px-15 md:px-25 lg:px-80 xl:px-96">
      <div className="bg-[#ffffff] rounded-lg pt-3.5 px-2 sm:px-8 pb-5">
        <h1 className="text-[1.6rem] font-bold">Payment</h1>
        <div className="h-[0.5px] bg-[#bbbbbb] w-full mt-8"></div>
        <p className="pt-6 text-[1rem]">Pay with</p>
        <div className="flex justify-between mt-6">
          <div className="flex items-center gap-1.5">
            <MdRadioButtonChecked
              className="text-[#3cc173] border-[#3cc173]"
              size={30}
            />
            <p className="text-[1rem]">Card</p>
          </div>
          <div className="flex items-center gap-1.5">
            <IoIosRadioButtonOff
              className="text-[#9c9c9c] border-[#9c9c9c]"
              size={30}
            />
            <p className="text-[1rem] text-[#9c9c9c]">Bank</p>
          </div>
          <div className="flex items-center gap-1.5">
            <IoIosRadioButtonOff
              className="text-[#9c9c9c] border-[#9c9c9c]"
              size={30}
            />
            <p className="text-[1rem] text-[#9c9c9c]">Transfer</p>
          </div>
        </div>
        <div className="mt-8">
          <label>Card Number</label>
          <input
            type="tel"
            placeholder="1234  5678  9101  1121"
            className="mt-3 rounded-lg w-full py-3.5 px-2.5 text-[#949494] border border-[#cecece] text-[1rem] outline-0"
          />
        </div>
        <div className="mt-4 flex gap-4">
          <div className="flex-1">
            <label>Expiration Date</label>
            <input
              type="tel"
              placeholder="MM/YY"
              className="mt-3 rounded-lg w-full py-3.5 px-2.5 text-[#949494] border border-[#cecece] text-[1rem] outline-0 "
            />
          </div>
          <div className="flex-1">
            <label>CVV</label>
            <input
              type="tel"
              placeholder="123"
              className="mt-3 rounded-lg w-full py-3.5 px-2.5 text-[#949494] border border-[#cecece] text-[1rem] outline-0 "
            />
          </div>
        </div>
        <div className="flex gap-3 items-center mt-3">
          <MdOutlineCheckBoxOutlineBlank className="text-[#888585]" size={30} />
          <p className="text-[1rem] text-[#444343]">Save card details</p>
        </div>
        <div>
          <button
            className="bg-[#ff7a18] text-[#ffffff] text-[1rem] lg:text-[1rem] w-full h-[8.5vh] rounded-xl hover:bg-[#ffffff] hover:text-[#ff7a18] hover:cursor-pointer transition duration-500 ease-in-out border border-transparent hover:border-amber-700 mt-8 outline-0 mb-2"
            onClick={() => navigate('/loading')}
          >
            Pay {'\u20A6'}9,900
          </button>
        </div>
        <div>
          <p className="text-[1rem] text-[#a8a8a8] mt-3">
            Your personal data will be used to process your order, support your
            experience throughout this website, and for other purposes described
            in our privacy policy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default payment;
