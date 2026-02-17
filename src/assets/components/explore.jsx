import React from 'react';
import Fried from '../images/jollof-fried.png';
import Eba from '../images/eba.png';
import Catfish from '../images/catfish.png';
import Amala from '../images/amala.png';
import Curry from '../images/curry.png';
import JollofNew from '../images/jollof-fried.png';
import Native from '../images/native-rice.png';
import Okro from '../images/okro.png';
import Snail from '../images/snail.png';
import Jollof from '../images/jollof.png';
import { FaCirclePlus } from 'react-icons/fa6';

const explore = () => {
  return (
    <div className="bg-[#f3f4f6] pb-12">
      <section>
        <div className="explore-hero flex flex-col justify-center px-3 sm:px-8">
          <div className="home-overlay"></div>
          <div className="z-20">
            <h1 className="text-[#ffff] text-[1.7rem] font-bold md:text-[1.9rem] lg:text-[2.2rem]">
              Chuks Kitchen
            </h1>
            <p className="text-[#e0e0e0] pt-5 text-[1rem] md:text-[1.2rem] lg:text-[1.3rem]">
              Chuks Kitchen Nigerian Home Cooking 4.8 (1.2k)
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className="bg-[#ffffff] pl-3 mb-14 lg:rounded-tl-xl lg:rounded-tr-xl lg:mt-12 lg:mx-8 lg:pb-8">
          <h1 className="text-[1.2rem] pt-7 font-bold">Menu Categories</h1>
          <h2 className="text-[1.1rem] font-bold bg-[#ffe1c4] py-3 border-l-4 border-[#ff7a18] -ml-3 pl-3 mt-6 mb-3">
            Popular
          </h2>
          <ul className="flex flex-col gap-3 text-[1rem]">
            <li>Jollof Rice & Entrees</li>
            <li>Swallow & Soups</li>
            <li>Grills & sides</li>
            <li>Beverages</li>
            <li>Desserts</li>
          </ul>
        </div>
      </section>
      <section>
        <div className="pt-4">
          <h1 className="pl-4 font-bold text-[1.2rem] md:pl-12 md:text-[1.4rem]">
            Popular
          </h1>
          <div className="mt-3 grid grid-cols-1 lg:grid-cols-3 px-3 gap-4 sm:gap-6 md:px-10">
            <div className="bg-[#ffff] rounded-xl w-full pt-2 pb-2 px-1.5 flex gap-2 sm:gap-5">
              <div>
                <img className="rounded-lg w-[60vw]" src={Fried} />
              </div>
              <div className="flex flex-col gap-1.5 sm:gap-3 md:pr-2.5 md:pt-3">
                <h1 className="text-[1rem] font-bold sm:text-[1.1rem] lg:text-[1rem]">
                  Jollof Rice & Fried Chicken
                </h1>
                <p className="text-[0.9rem] sm:text-[1rem] lg:text-[0.8rem]">
                  Our signature Jollof rice, served with{' '}
                  <br className="hidden" /> crispy fried chicken and plantain.
                </p>
                <div className="flex justify-between items-center">
                  <h1 className="text-[1rem] text-[#ff7a18] sm:text-[1.2rem] lg:text-[0.9rem]">
                    {'\u20A6'}3,500
                  </h1>
                  <FaCirclePlus size={25} className="text-[#ff7a18]" />
                </div>
              </div>
            </div>
            <div className="bg-[#ffff] rounded-xl w-full pt-2 pb-2 px-1.5 flex gap-2 sm:gap-5 ">
              <div>
                <img className="rounded-lg w-[55vw]" src={Eba} />
              </div>
              <div className="flex flex-col gap-1.5 sm:gap-3 md:pr-2.5 md:pt-3">
                <h1 className="text-[1rem] font-bold sm:text-[1.1rem] lg:text-[1rem]">
                  Eba & Egusi Soup (Goat Meat)
                </h1>
                <p className="text-[0.9rem] sm:text-[1rem] lg:text-[0.8rem]">
                  Hearty Egusi soup with tender goat meat, served with soft Eba.
                </p>
                <div className="flex justify-between items-center">
                  <h1 className="text-[1rem] text-[#ff7a18] sm:text-[1.2rem] lg:text-[0.9rem]">
                    {'\u20A6'}3,500
                  </h1>
                  <FaCirclePlus size={25} className="text-[#ff7a18]" />
                </div>
              </div>
            </div>
            <div className="bg-[#ffff] rounded-xl w-full pt-2 pb-2 px-1.5 flex gap-2 sm:gap-5">
              <div>
                <img className="rounded-lg w-[50vw]" src={Catfish} />
              </div>
              <div className="flex flex-col gap-1.5 sm:gap-3 md:pr-2.5 md:pt-3">
                <h1 className="text-[1rem] font-bold sm:text-[1.1rem] lg:text-[1rem]">
                  Pounded Yam & Edikaikong
                </h1>
                <p className="text-[0.9rem] sm:text-[1rem] lg:text-[0.8rem]">
                  Traditional pounded yam with rich, leafy Edikaikong soup.
                </p>
                <div className="flex justify-between items-center">
                  <h1 className="text-[1rem] text-[#ff7a18] sm:text-[1.2rem] lg:text-[0.9rem]">
                    {'\u20A6'}3,800
                  </h1>
                  <FaCirclePlus size={25} className="text-[#ff7a18]" />
                </div>
              </div>
            </div>
            <div className="hidden bg-[#ffff] rounded-xl w-full pt-2 pb-2 px-1.5 lg:flex gap-2 sm:gap-5 ">
              <div>
                <img className="rounded-lg w-[50vw]" src={Snail} />
              </div>
              <div className="flex flex-col gap-1.5 sm:gap-3 md:pr-2.5 md:pt-3">
                <h1 className="text-[1rem] font-bold lg:text-[1rem]">
                  Peppered Snail
                </h1>
                <p className="text-[0.9rem] lg:text-[0.8rem]">
                  Spicy and savory peppered snail, perfect as a starter.
                </p>
                <div className="flex justify-between items-center">
                  <h1 className="text-[1rem] text-[#ff7a18] lg:text-[0.9rem]">
                    {'\u20A6'}2,500
                  </h1>
                  <FaCirclePlus size={25} className="text-[#ff7a18]" />
                </div>
              </div>
            </div>
            <div className="hidden bg-[#ffff] rounded-xl w-full pt-2 pb-2 px-1.5 lg:flex gap-2 sm:gap-5 ">
              <div>
                <img className="rounded-lg w-[50vw]" src={Curry} />
              </div>
              <div className="flex flex-col gap-1.5 sm:gap-3 md:pr-2.5 md:pt-3">
                <h1 className="text-[1rem] font-bold">Grilled Tilapia Fish</h1>
                <p className="text-[0.9rem] lg:text-[0.8rem]">
                  Whole grilled tilapia seasoned with our special spices.
                </p>
                <div className="flex justify-between items-center">
                  <h1 className="text-[1rem] text-[#ff7a18] lg:text-[0.9rem]">
                    {'\u20A6'}4,500
                  </h1>
                  <FaCirclePlus size={25} className="text-[#ff7a18]" />
                </div>
              </div>
            </div>
            <div className="hidden bg-[#ffff] rounded-xl w-full pt-2 pb-2 px-1.5 lg:flex gap-2 sm:gap-5 ">
              <div>
                <img className="rounded-lg w-[50vw]" src={Jollof} />
              </div>
              <div className="flex flex-col gap-1.5 sm:gap-3 md:pr-2.5 md:pt-3">
                <h1 className="text-[1rem] font-bold lg:text-[1rem]">
                  Jollof Rice & Fried Chicken
                </h1>
                <p className="text-[0.8rem]">
                  Our signature Jollof rice, served with{' '}
                  <br className="hidden" /> crispy fried chicken and plantain.
                </p>
                <div className="flex justify-between items-center">
                  <h1 className="text-[0.9rem] text-[#ff7a18]">
                    {'\u20A6'}3,500
                  </h1>
                  <FaCirclePlus size={25} className="text-[#ff7a18]" />
                </div>
              </div>
            </div>
            <a
              className="lg:hidden text-[#1e88e5] text-[1rem] pt-2 mx-auto"
              href="#"
            >
              View All Categories
            </a>
          </div>
        </div>
      </section>
      <section>
        <div className="pt-14">
          <h1 className="pl-4 font-bold text-[1.2rem] md:pl-12 md:text-[1.4rem]">
            Jollof Rice & Entries
          </h1>
          <div className="mt-3 grid grid-cols-1 lg:grid-cols-3 px-3 gap-4 md:px-10">
            <div className="bg-[#ffff] rounded-xl w-full pt-2 pb-2 px-1.5 flex gap-2 sm:gap-5 ">
              <div>
                <img className="rounded-lg w-[40vw]" src={Jollof} />
              </div>
              <div className="flex flex-col gap-1.5 sm:gap-3 md:pr-2.5 md:pt-3">
                <h1 className="text-[1rem] font-bold sm:text-[1.1rem] lg:text-[1rem]">
                  Jollof Rice & Smoked Fish
                </h1>
                <p className="text-[0.9rem] sm:text-[1rem] lg:text-[0.8rem]">
                  Vegetarian party jollof, full of rich flavors.
                </p>
                <div className="">
                  <div className="flex justify-between items-center ">
                    <h1 className="text-[1rem] text-[#ff7a18] sm:text-[1.2rem] lg:text-[0.9rem]">
                      {'\u20A6'}3,500
                    </h1>
                    <FaCirclePlus size={25} className="text-[#ff7a18]" />
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#ffff] rounded-xl w-full pt-2 pb-2 px-1.5 flex gap-2 sm:gap-5">
              <div>
                <img className="rounded-lg w-[40vw]" src={Jollof} />
              </div>
              <div className="flex flex-col gap-1.5 sm:gap-3 md:pr-2.5 md:pt-3">
                <h1 className="text-[1rem] font-bold sm:text-[1.1rem] lg:text-[1rem]">
                  Party Jollof Rice (Veg)
                </h1>
                <p className="text-[0.9rem] sm:text-[1rem] lg:text-[0.8rem]">
                  Vegetarian party jollof, full of rich flavors.
                </p>
                <div className="flex justify-between items-center">
                  <h1 className="text-[1rem] text-[#ff7a18] sm:text-[1.2rem] lg:text-[0.9rem]">
                    {'\u20A6'}2,800
                  </h1>
                  <FaCirclePlus size={25} className="text-[#ff7a18]" />
                </div>
              </div>
            </div>
            <div className="bg-[#ffff] rounded-xl w-full pt-2 pb-2 px-1.5 flex gap-2 sm:gap-5 ">
              <div>
                <img className="rounded-lg w-[40vw]" src={Jollof} />
              </div>
              <div className="flex flex-col gap-1.5 sm:gap-3 md:pr-2.5 md:pt-3">
                <h1 className="text-[1rem] font-bold sm:text-[1.1rem] lg:text-[1rem]">
                  Party Jollof Rice (Veg)
                </h1>
                <p className="text-[0.9rem] sm:text-[1rem] lg:text-[0.8rem]">
                  Vegetarian party jollof, full of rich flavors.
                </p>
                <div className="flex justify-between items-center">
                  <h1 className="text-[1rem] text-[#ff7a18] sm:text-[1.2rem] lg:text-[0.9rem]">
                    {'\u20A6'}3,500
                  </h1>
                  <FaCirclePlus size={25} className="text-[#ff7a18] " />
                </div>
              </div>
            </div>
            <a
              className="lg:hidden text-[#1e88e5] text-[1rem] pt-2 mx-auto"
              href="#"
            >
              View All Categories
            </a>
          </div>
        </div>
      </section>
      <section>
        <div className="pt-14">
          <h1 className="pl-4 font-bold text-[1.2rem] md:pl-12 md:text-[1.4rem]">
            Swallow & Soups
          </h1>
          <div className="mt-3 grid grid-cols-1 lg:grid-cols-3 px-3 gap-4 md:px-10">
            <div className="bg-[#ffff] rounded-xl w-full sm:gap-6 pt-2 pb-2 px-1.5 flex gap-2 ">
              <div>
                <img className="rounded-lg w-[66vw]" src={Amala} />
              </div>
              <div className="flex flex-col gap-1.5 sm:gap-3 md:pr-2.5 md:pt-3">
                <h1 className="text-[1rem] font-bold sm:text-[1.1rem] lg:text-[1rem]">
                  Amala with Gbegiri & Ewedu
                </h1>
                <p className="text-[0.9rem] sm:text-[1rem] lg:text-[0.8rem]">
                  Classic Amala served with Gbegiri (beans) and Ewedu (jute
                  leaf) soup.
                </p>
                <div className="flex justify-between items-center">
                  <h1 className="text-[1rem] text-[#ff7a18] sm:text-[1.2rem] lg:text-[0.9rem]">
                    {'\u20A6'}3,100
                  </h1>
                  <FaCirclePlus size={25} className="text-[#ff7a18]" />
                </div>
              </div>
            </div>
            <div className="bg-[#ffff] rounded-xl w-full sm:gap-6 pt-2 pb-2 px-1.5 flex gap-2 ">
              <div>
                <img className="rounded-lg w-[52vw]" src={Okro} />
              </div>
              <div className="flex flex-col gap-1.5 sm:gap-3 md:pr-2.5 md:pt-3">
                <h1 className="text-[1rem] font-bold sm:text-[1.1rem] lg:text-[1rem]">
                  Fufu & Okra Soup (Fish)
                </h1>
                <p className="text-[0.9rem] sm:text-[1rem] lg:text-[0.8rem]">
                  Light Fufu served with fresh okra soup and tilapia fish.
                </p>
                <div className="flex justify-between items-center">
                  <h1 className="text-[1rem] text-[#ff7a18] sm:text-[1.2rem] lg:text-[0.9rem]">
                    {'\u20A6'}3,300
                  </h1>
                  <FaCirclePlus size={25} className="text-[#ff7a18]" />
                </div>
              </div>
            </div>
            <div className="bg-[#ffff] rounded-xl w-full sm:gap-6 pt-2 pb-2 px-1.5 flex gap-2 ">
              <div>
                <img className="rounded-lg w-[52vw]" src={Okro} />
              </div>
              <div className="flex flex-col gap-1.5 sm:gap-3 md:pr-2.5 md:pt-3">
                <h1 className="text-[1rem] font-bold sm:text-[1.1rem] lg:text-[1rem]">
                  Fufu & Okra Soup (Fish)
                </h1>
                <p className="text-[0.9rem] sm:text-[1rem] lg:text-[0.8rem]">
                  Light Fufu served with fresh okra soup and tilapia fish.
                </p>
                <div className="flex justify-between items-center">
                  <h1 className="text-[1rem] text-[#ff7a18] sm:text-[1.2rem] lg:text-[0.9rem]">
                    {'\u20A6'}3,500
                  </h1>
                  <FaCirclePlus size={25} className="text-[#ff7a18]" />
                </div>
              </div>
            </div>
            <a
              className="lg:hidden text-[#1e88e5] text-[1rem] pt-2 mx-auto"
              href="#"
            >
              View All Categories
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default explore;
