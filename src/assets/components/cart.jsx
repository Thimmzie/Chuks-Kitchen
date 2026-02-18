import React from 'react';
import Fried from '../images/jollof-fried.png';
import { FaPlus } from 'react-icons/fa6';
import { FaMinus } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';

const cart = () => {
  return (
    <div className="bg-[#f3f4f6] pt-4 pb-16 px-2 sm:px-12 md:px-20">
      <div className="bg-[#ffff] flex flex-col gap-4  mt-4 mx-2 py-3 px-2 rounded-xl ">
        <div className="flex gap-2.5 sm:gap-10 md:gap-18 lg:gap-8 border border-[#d8d8d8] rounded-xl py-2.5 px-2 ">
          <div>
            <img className="rounded-lg" src={Fried} />
          </div>
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:gap-24">
            <div>
              <h1 className="text-[1rem] font-bold lg:text-[1.5rem]">
                Jollof Rice & Fried Chicken
              </h1>
              <p className="text-[0.9rem] pt-1.5 lg:text-[1rem]">
                With Plaintain, extra pepper sauce
              </p>
            </div>
            <div className="flex justify-between lg:gap-12 lg:items-center">
              <FaPlus
                className="bg-[#bdbdbd] rounded-lg px-1.5 py-1.5"
                size={25}
              />
              <p className="text-[1rem] lg:text-[1.4rem]">1</p>
              <FaMinus
                className="bg-[#bdbdbd] rounded-lg px-1.5 py-1.5"
                size={25}
              />
            </div>
            <div className="flex justify-between items-center lg:gap-16 lg:items-center">
              <h1 className="text-[1.3rem] text-[#ff7a18] sm:text-[1.2rem] lg:text-[1.4rem] pt-3 pb-2.5">
                {' '}
                {'\u20A6'}3,500
              </h1>
              <IoClose
                className="text-[#ffff] bg-[#000000] lg:bg-[#ff7a18] py-1 px-1 "
                size={25}
              />
            </div>
          </div>
        </div>
        <div className="flex gap-2.5 sm:gap-10 md:gap-18 lg:gap-8 border border-[#d8d8d8] rounded-xl py-2.5 px-2 ">
          <div>
            <img className="rounded-lg" src={Fried} />
          </div>
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:gap-24">
            <div>
              <h1 className="text-[1rem] font-bold lg:text-[1.5rem]">
                Jollof Rice & Fried Chicken
              </h1>
              <p className="text-[0.9rem] pt-1.5 lg:text-[1rem]">
                With Plaintain, extra pepper sauce
              </p>
            </div>
            <div className="flex justify-between lg:gap-12 lg:items-center">
              <FaPlus
                className="bg-[#bdbdbd] rounded-lg px-1.5 py-1.5"
                size={25}
              />
              <p className="text-[1rem] lg:text-[1.4rem]">1</p>
              <FaMinus
                className="bg-[#bdbdbd] rounded-lg px-1.5 py-1.5"
                size={25}
              />
            </div>
            <div className="flex justify-between items-center lg:gap-16 lg:items-center">
              <h1 className="text-[1.3rem] text-[#ff7a18] sm:text-[1.2rem] lg:text-[1.4rem] pt-3 pb-2.5">
                {' '}
                {'\u20A6'}3,500
              </h1>
              <IoClose
                className="text-[#ffff] bg-[#000000] lg:bg-[#ff7a18] py-1 px-1 "
                size={25}
              />
            </div>
          </div>
        </div>
        <div className="flex gap-2.5 sm:gap-10 md:gap-18 lg:gap-8 border border-[#d8d8d8] rounded-xl py-2.5 px-2 ">
          <div>
            <img className="rounded-lg" src={Fried} />
          </div>
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:gap-24">
            <div>
              <h1 className="text-[1rem] font-bold lg:text-[1.5rem]">
                Jollof Rice & Fried Chicken
              </h1>
              <p className="text-[0.9rem] pt-1.5 lg:text-[1rem]">
                With Plaintain, extra pepper sauce
              </p>
            </div>
            <div className="flex justify-between lg:gap-12 lg:items-center">
              <FaPlus
                className="bg-[#bdbdbd] rounded-lg px-1.5 py-1.5"
                size={25}
              />
              <p className="text-[1rem] lg:text-[1.4rem]">1</p>
              <FaMinus
                className="bg-[#bdbdbd] rounded-lg px-1.5 py-1.5"
                size={25}
              />
            </div>
            <div className="flex justify-between items-center lg:gap-16 lg:items-center">
              <h1 className="text-[1.3rem] text-[#ff7a18] sm:text-[1.2rem] lg:text-[1.4rem] pt-3 pb-2.5">
                {' '}
                {'\u20A6'}3,500
              </h1>
              <IoClose
                className="text-[#ffff] bg-[#000000] lg:bg-[#ff7a18] py-1 px-1 "
                size={25}
              />
            </div>
          </div>
        </div>
        <div className="flex gap-2.5 sm:gap-10 md:gap-18 lg:gap-8 border border-[#d8d8d8] rounded-xl py-2.5 px-2 ">
          <div>
            <img className="rounded-lg" src={Fried} />
          </div>
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:gap-24">
            <div>
              <h1 className="text-[1rem] font-bold lg:text-[1.5rem]">
                Jollof Rice & Fried Chicken
              </h1>
              <p className="text-[0.9rem] pt-1.5 lg:text-[1rem]">
                With Plaintain, extra pepper sauce
              </p>
            </div>
            <div className="flex justify-between lg:gap-12 lg:items-center">
              <FaPlus
                className="bg-[#bdbdbd] rounded-lg px-1.5 py-1.5"
                size={25}
              />
              <p className="text-[1rem] lg:text-[1.4rem]">1</p>
              <FaMinus
                className="bg-[#bdbdbd] rounded-lg px-1.5 py-1.5"
                size={25}
              />
            </div>
            <div className="flex justify-between items-center lg:gap-16 lg:items-center">
              <h1 className="text-[1.3rem] text-[#ff7a18] sm:text-[1.2rem] lg:text-[1.4rem] pt-3 pb-2.5">
                {' '}
                {'\u20A6'}3,500
              </h1>
              <IoClose
                className="text-[#ffff] bg-[#000000] lg:bg-[#ff7a18] py-1 px-1 "
                size={25}
              />
            </div>
          </div>
        </div>
        <div className="flex gap-2 items-center mt-2 mb-2">
          <FaPlus className="text-[#1e88e5]" size={20} />
          <h1 className="text-[#1e88e5] text-[1.1rem]">
            Add more items from Chuks Kitchen
          </h1>
        </div>
      </div>
    </div>
  );
};

export default cart;
