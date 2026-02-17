import React from 'react';
import Desktop from '../images/details-desktop.png';
import Mobile from '../images/details-mobile.png';
import { IoClose } from 'react-icons/io5';
import { CiAlarmOn } from 'react-icons/ci';

const details = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 bg-[#f3f4f6] overflow-x-hidden">
      <div>
        <img className="lg:hidden" src={Mobile} />
        <img className="hidden lg:block" src={Desktop} />
      </div>
      <div className="bg-[#ffff] pt-6 px-4 lg:my-5 lg:mx-8">
        <div className="flex justify-end">
          <IoClose className="text-[#ffff] bg-[#000000] py-1 px-1 " size={30} />
        </div>
        <h1 className="text-[1.4rem] font-bold mt-4 lg:text-[1.6rem]">
          Jollof Rice with Fried Chicken
        </h1>
        <h1 className="text-[1.3rem] text-[#ff7a18] sm:text-[1.2rem] lg:text-[1.2rem] pt-3 pb-2.5">
          {'\u20A6'}2,800
        </h1>
        <p className="text-[0.9rem] pr-3 ">
          Our signature Jollof rice, cooked to perfection with aromatic spices,
          served with juicy, golden-fried chicken. A classic Nigerian comfort
          food, rich in flavor and satisfying. Perfect for a quick lunch or a
          hearty dinner.
        </p>
        <div className="flex flex-col lg:flex-row gap-3 mt-5 pr-5 lg:gap-2">
          <div className="bg-[#f3f4f6] flex items-center gap-2.5 lg:gap-1 py-2 pl-2 w-full rounded-lg  lg:py-0 lg:w-fit lg:bg-[#ffff]">
            <CiAlarmOn className="text-[#ff7a18]" size={25} />
            <p className="text-[1rem] text-[#4b5563] lg:text-[0.9rem]">
              Mildly spicy
            </p>
          </div>
          <div className="bg-[#f3f4f6] flex items-center gap-2.5 lg:gap-1 py-2 pl-2 w-full rounded-lg lg:bg-[#ffff] lg:py-0 lg:w-fit">
            <CiAlarmOn className="text-[#ff7a18]" size={25} />
            <p className="text-[1rem] text-[#3895e7] lg:text-[0.9rem]">
              View Allergies
            </p>
          </div>
          <div className="bg-[#f3f4f6] flex items-center gap-2.5 lg:gap-1 py-2 pl-2 w-full rounded-lg lg:bg-[#ffff] lg:py-0 lg:w-fit">
            <CiAlarmOn className="text-[#ff7a18]" size={25} />

            <p className="text-[1rem] text-[#4b5563] lg:text-[0.9rem]">
              Vegetarian option available
            </p>
          </div>
        </div>
        <div>
          <h1 className="text-[1.4rem] font-bold mt-6">Choose your Protein</h1>
          <div className="flex flex-col mt-5 gap-4">
            <div className=" flex justify-between items-center px-2 rounded-xl border border-[#3b3b3b] w-full h-[7vh]">
              <div className="flex items-center gap-1.5">
                <span className="w-8 h-8 border-6 border-[#ff7a18] rounded-full lg:w-6 lg:h-6 lg:border-4"></span>
                <p className="text-[1rem]">Fried Chicken</p>
              </div>
              <div>
                <p className="text-[1rem]">(Default)</p>
              </div>
            </div>
            <div className=" flex justify-between items-center px-2 rounded-xl border border-[#3b3b3b] w-full h-[7vh]">
              <div className="flex items-center gap-1.5">
                <span className="w-8 h-8 border-6 border-[#ff7a18] rounded-full lg:w-6 lg:h-6 lg:border-4"></span>
                <p className="text-[1rem]">Grilled Fish</p>
              </div>
              <div>
                <p className="text-[1rem]"> +{'\u20A6'}500</p>
              </div>
            </div>
            <div className=" flex justify-between items-center px-2 rounded-xl border border-[#3b3b3b] w-full h-[7vh]">
              <div className="flex items-center gap-1.5">
                <span className="w-8 h-8 border-6 border-[#ff7a18] rounded-full lg:w-6 lg:h-6 lg:border-4"></span>
                <p className="text-[1rem]">Beef</p>
              </div>
              <div>
                <p className="text-[1rem]"> +{'\u20A6'}700</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-[1.4rem] font-bold mt-10 lg:mt-7">
            Extra Sides (Optional)
          </h1>
          <div className="flex flex-col mt-5 gap-4">
            <div className=" flex justify-between items-center px-2 rounded-xl border border-[#3b3b3b] w-full h-[7vh]">
              <div className="flex items-center gap-1.5">
                <span className="w-8 h-8 border border-[#808080] rounded-full lg:w-6 lg:h-6"></span>
                <p className="text-[1rem]">Fried Plantain</p>
              </div>
              <div>
                <p className="text-[1rem]"> +{'\u20A6'}700</p>
              </div>
            </div>
            <div className=" flex justify-between items-center px-2 rounded-xl border border-[#3b3b3b] w-full h-[7vh]">
              <div className="flex items-center gap-1.5">
                <span className="w-8 h-8 border border-[#808080] rounded-full lg:w-6 lg:h-6"></span>
                <p className="text-[1rem]">Coleslaw</p>
              </div>
              <div>
                <p className="text-[1rem]"> +{'\u20A6'}500</p>
              </div>
            </div>
            <div className=" flex justify-between items-center px-2 rounded-xl border border-[#3b3b3b] w-full h-[7vh]">
              <div className="flex items-center gap-1.5">
                <span className="w-8 h-8 border border-[#808080] rounded-full lg:w-6 lg:h-6"></span>
                <p className="text-[1rem]">Extra Pepper Sauce</p>
              </div>
              <div>
                <p className="text-[1rem]"> +{'\u20A6'}300</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-[1.4rem] font-bold mt-10 lg:mt-7">
            Special Instructions
          </h1>

          <textarea
            className="rounded-lg mt-4 w-full h-[17vh] px-2 border border-[#3b3b3b] text-[1rem] mb-10 outline-0 pt-2"
            placeholder="E.g no onion, food is too spicy, food is too hothhhhhhhhhh food is tasty"
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default details;
