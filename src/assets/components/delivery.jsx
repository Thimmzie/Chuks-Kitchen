import React from 'react';

const delivery = () => {
  return (
    <div className="bg-[#f3f4f6] pt-6 lg:pt-16 pb-16 px-3 sm:px-15 md:px-25 lg:px-80 xl:px-96">
      <div className="bg-[#ffffff] rounded-lg pt-3.5 px-2 sm:px-8 pb-13">
        <h1 className="text-[1.6rem] font-bold">Delivery Details</h1>
        <div className="h-[0.5px] bg-[#bbbbbb] w-full mt-8"></div>
        <div className="rounded-lg mt-5 border border-[#cecece] w-full py-5 px-2 flex justify-between items-center">
          <p className="text-[1rem] w-[60%]">
            Home: 123 Main Street, Victoria Island, Lagos Apt 4B, Opposite Mega
            Plaza
          </p>
          <p className=" text-[1rem] text-[#3a97e8]">Change Address</p>
        </div>

        <div className="mt-5">
          <label className="text-[1rem]">Delivery Time</label>
          <input
            type="text"
            placeholder="ASAP(30-25)"
            className="mt-3 rounded-lg w-full py-3.5 px-2.5 text-[#3a3a3a] border border-[#cecece] text-[1rem] outline-0"
          />
        </div>
        <div className="mt-5">
          <label className="text-[1rem]">
            Delivery Instructions (Optional)
          </label>
          <textarea
            placeholder="E.g a at the front of the door, knock twice..................."
            className="mt-3 rounded-lg w-full py-2 h-[13vh] text-[#3a3a3a] px-2.5 border border-[#cecece] text-[1rem] outline-0"
          ></textarea>
        </div>
        <div className="mt-5">
          <label className="text-[1rem]">Contact</label>
          <input
            type="tel"
            placeholder="+234 801 234 5678"
            className="mt-3 rounded-lg w-full py-3.5 px-2.5 text-[#3a3a3a] border border-[#cecece] text-[1rem] outline-0"
          />
        </div>
      </div>
    </div>
  );
};

export default delivery;
