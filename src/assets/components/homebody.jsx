import React from 'react';
import { IoIosSearch } from 'react-icons/io';
import Jollof from './../images/jollof.png';
import Poundo from './../images/poundo.png';
import Suya from './../images/suya.png';
import Pastry from './../images/pastries.png';
import Peppersoup from './../images/peppersoup.png';
import { useNavigate } from 'react-router-dom';

const homebody = () => {
  const navigate = useNavigate();
  return (
    <div className=" bg-[#f3f4f6]">
      <section>
        <div className="home-hero flex flex-col justify-center px-3 sm:px-8">
          <div className="home-overlay"></div>
          <div className="z-20">
            <h1 className="text-[#ffff] text-[1.7rem] font-bold md:text-[1.9rem] lg:text-[2.2rem]">
              The Heart of Nigerian <br className="block lg:hidden" /> Home{' '}
              <br className="hidden lg:block" /> Cooking
            </h1>
            <p className="text-[#e0e0e0] pt-5 text-[1rem] md:text-[1.2rem] lg:text-[1.3rem]">
              Handcrafted with passion, delivered with care.
            </p>
            <div className="mt-3">
              <button
                className="bg-[#ff7a18] text-[#ffffff] text-[1rem] lg:text-[0.9rem] px-8 py-4 md:px-10 lg:py-3 rounded-xl hover:bg-[#ffffff] hover:text-[#ff7a18] hover:cursor-pointer transition duration-500 ease-in-out border border-transparent hover:border-amber-700 outline-0"
                onClick={() => navigate('/explore')}
              >
                Discover what's new
              </button>
            </div>
          </div>
        </div>
        <div className=" px-5 z-20 flex justify-center -mt-7 lg:-mt-10">
          <div className="relative w-full md:w-[75vw] z-20">
            <IoIosSearch
              size={26}
              className="absolute left-5  top-1/2 -translate-y-1/2 text-[#3b4758] pointer-events-none z-40"
            />
            <input
              type="search"
              placeholder="What are you craving today?"
              className="w-full h-[7.5vh] lg:h-[10.5vh] text-[#3b4758] text-[1rem] lg:text-[1.2rem] lg:font-bold pl-13 rounded-xl lg:rounded-lg outline-0 shadow-[0_8px_20px_-5px_rgba(0,0,0,0.25)] z-20 bg-[#ffff]"
            />
          </div>
        </div>
      </section>
      <section>
        <div className="mt-9 lg:mt-16 flex flex-col items-center  px-5">
          <h1 className="text-[1.4rem] font-bold text-[#1f2937] lg:text-[1.8rem]">
            Popular Categories
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-3 mt-6 gap-8 lg:px-8 lg:gap-12">
            <div className="bg-[#ffff] w-full px-2 flex flex-col items-center pt-2 pb-6 rounded-xl">
              <img className="rounded-tr-xl" src={Jollof} />
              <p className="text-[1rem] pt-3">Jollof Delights</p>
            </div>
            <div className="bg-[#ffff] w-full px-2 flex flex-col items-center pt-2 pb-6 rounded-xl">
              <img className="rounded-tr-xl" src={Poundo} />
              <p className="text-[1rem] pt-3">Swallow & Soups</p>
            </div>
            <div className="bg-[#ffff] w-full px-2 flex flex-col items-center pt-2 pb-6 rounded-xl">
              <img className="rounded-tr-xl" src={Suya} />
              <p className="text-[1rem] pt-3">Grills & BBQ</p>
            </div>
            <div className="hidden bg-[#ffff] w-full px-2 lg:flex flex-col items-center pt-2 pb-6 rounded-xl">
              <img className="rounded-tr-xl" src={Pastry} />
              <p className="text-[1rem] pt-3">Sweet Treats</p>
            </div>
            <div className="hidden bg-[#ffff] w-full px-2 lg:flex flex-col items-center pt-2 pb-6 rounded-xl">
              <img className="rounded-tr-xl" src={Poundo} />
              <p className="text-[1rem] pt-3">Jollof Delights</p>
            </div>
            <div className="hidden bg-[#ffff] w-full px-2 lg:flex flex-col items-center pt-2 pb-6 rounded-xl">
              <img className="rounded-tr-xl" src={Suya} />
              <p className="text-[1rem] pt-3">Jollof Delights</p>
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
        <div
          className="mt-11 lg:mt-20
           flex flex-col items-center"
        >
          <h1 className="text-[1.4rem] font-bold">Chef's Special</h1>
          <div className="grid grid-cols-1 lg:grid-cols-3 mt-6 gap-8 px-5 lg:px-8 lg:gap-12">
            <div className="bg-[#ffff] w-full px-2 flex flex-col items-center pt-2 pb-6 rounded-xl">
              <img className="rounded-tr-xl" src={Jollof} />
              <div className="px-3 flex flex-col items-center">
                <h1 className="text-[1.1rem] pt-4 font-bold">
                  Jollof Rice & Fried Chicken
                </h1>
                <p className="pt-2 text-[1rem]">
                  Our signature Jollof rice, cooked to perfection, served with
                  succulent fried chicken.
                </p>
              </div>
              <div className="flex items-center justify-between mt-7 w-full px-3">
                <h1 className="text-[#ff7a18] text-[1rem]">{'\u20A6'}3,500</h1>
                <button className="bg-[#ff7a18] text-[#ffff] text-[1rem] rounded-xl py-3 px-7 outline-0 hover:bg-[#ffffff] hover:text-[#ff7a18] hover:cursor-pointer transition duration-500 ease-in-out border border-transparent hover:border-amber-700 ">
                  Add to cart
                </button>
              </div>
            </div>
            <div className="bg-[#ffff] w-full px-2 flex flex-col items-center pt-2 pb-6 rounded-xl">
              <img className="rounded-tr-xl" src={Peppersoup} />
              <div className="px-3 flex flex-col items-center">
                <h1 className="text-[1.1rem] pt-4 font-bold">
                  Spicy Tilapia Pepper Soup
                </h1>
                <p className="pt-2 text-[1rem]">
                  A comforting and spicy soup with tender tilapia fish, a true
                  Nigerian delicacy.
                </p>
              </div>
              <div className="flex items-center justify-between mt-7 w-full px-3">
                <h1 className="text-[#ff7a18] text-[1rem]">{'\u20A6'}3,500</h1>
                <button className="bg-[#ff7a18] text-[#ffff] text-[1rem] rounded-xl py-3 px-7 outline-0 hover:bg-[#ffffff] hover:text-[#ff7a18] hover:cursor-pointer transition duration-500 ease-in-out border border-transparent hover:border-amber-700">
                  Add to cart
                </button>
              </div>
            </div>
            <div className="bg-[#ffff] w-full px-2 flex flex-col items-center pt-2 pb-6 rounded-xl">
              <img className="rounded-tr-xl" src={Jollof} />
              <div className="px-3 flex flex-col items-center">
                <h1 className="text-[1.1rem] pt-4 font-bold">
                  Jollof Rice & Fried Chicken
                </h1>
                <p className="pt-2 text-[1rem]">
                  Our signature Jollof rice, cooked to perfection, served with
                  succulent fried chicken.
                </p>
              </div>
              <div className="flex items-center justify-between mt-7 w-full px-3">
                <h1 className="text-[#ff7a18] text-[1rem]">{'\u20A6'}3,500</h1>
                <button className="bg-[#ff7a18] text-[#ffff] text-[1rem] rounded-xl py-3 px-7 hover:bg-[#ffffff] hover:text-[#ff7a18] hover:cursor-pointer transition duration-500 ease-in-out border border-transparent hover:border-amber-700 outline-0">
                  Add to cart
                </button>
              </div>
            </div>
            <div className="hidden bg-[#ffff] w-full px-2 lg:flex flex-col items-center pt-2 pb-6 rounded-xl">
              <img className="rounded-tr-xl" src={Jollof} />
              <div className="px-3 flex flex-col items-center">
                <h1 className="text-[1.1rem] pt-4 font-bold">
                  Jollof Rice & Fried Chicken
                </h1>
                <p className="pt-2 text-[1rem]">
                  Our signature Jollof rice, cooked to perfection, served with
                  succulent fried chicken.
                </p>
              </div>
              <div className="flex items-center justify-between mt-7 w-full px-3">
                <h1 className="text-[#ff7a18] text-[1rem]">{'\u20A6'}3,500</h1>
                <button className="bg-[#ff7a18] text-[#ffff] text-[1rem] rounded-xl py-3 px-7 hover:bg-[#ffffff] hover:text-[#ff7a18] hover:cursor-pointer transition duration-500 ease-in-out border border-transparent hover:border-amber-700 outline-0">
                  Add to cart
                </button>
              </div>
            </div>
            <div className="hidden bg-[#ffff] w-full px-2 lg:flex flex-col items-center pt-2 pb-6 rounded-xl">
              <img className="rounded-tr-xl" src={Jollof} />
              <div className="px-3 flex flex-col items-center">
                <h1 className="text-[1.1rem] pt-4 font-bold">
                  Jollof Rice & Fried Chicken
                </h1>
                <p className="pt-2 text-[1rem]">
                  Our signature Jollof rice, cooked to perfection, served with
                  succulent fried chicken.
                </p>
              </div>
              <div className="flex items-center justify-between mt-7 w-full px-3">
                <h1 className="text-[#ff7a18] text-[1rem]">{'\u20A6'}3,500</h1>
                <button className="bg-[#ff7a18] text-[#ffff] text-[1rem] rounded-xl py-3 px-7 hover:bg-[#ffffff] hover:text-[#ff7a18] hover:cursor-pointer transition duration-500 ease-in-out border border-transparent hover:border-amber-700 outline-0">
                  Add to cart
                </button>
              </div>
            </div>
            <div className="hidden bg-[#ffff] w-full px-2 lg:flex flex-col items-center pt-2 pb-6 rounded-xl">
              <img className="rounded-tr-xl" src={Jollof} />
              <div className="px-3 flex flex-col items-center">
                <h1 className="text-[1.1rem] pt-4 font-bold">
                  Jollof Rice & Fried Chicken
                </h1>
                <p className="pt-2 text-[1rem]">
                  Our signature Jollof rice, cooked to perfection, served with
                  succulent fried chicken.
                </p>
              </div>
              <div className="flex items-center justify-between mt-7 w-full px-3">
                <h1 className="text-[#ff7a18] text-[1rem]">{'\u20A6'}3,500</h1>
                <button className="bg-[#ff7a18] text-[#ffff] text-[1rem] rounded-xl py-3 px-7 hover:bg-[#ffffff] hover:text-[#ff7a18] hover:cursor-pointer transition duration-500 ease-in-out border border-transparent hover:border-amber-700 outline-0">
                  Add to cart
                </button>
              </div>
            </div>
          </div>
          <a
            className="lg:hidden text-[#1e88e5] text-[1rem] pt-4 mx-auto"
            href="#"
          >
            View All Specials
          </a>
        </div>
      </section>
      <section>
        <div className="mt-15 addition flex flex-col justify-center px-3 lg:px-10">
          <div className="home-overlay"></div>
          <div className="z-20">
            <h1 className="text-[#ffff] text-[1.7rem] font-bold lg:text-[2.2rem]">
              Introducing Our New Menu Additions!
            </h1>
            <p className="text-[#e0e0e0] pt-3 text-[1rem] lg:text-[1.3rem]">
              Explore exciting new dishes, crafted with the freshest{' '}
              <br className="hidden lg:block" /> ingredients and authentic
              Nigerian flavors. Limited time <br className="hidden lg:block" />{' '}
              offer!
            </p>
            <button className="bg-[#ff7a18] text-[#ffffff] text-[1rem] lg:text-[0.9rem] px-8 py-4 lg:py-3 lg:px-6 rounded-xl hover:bg-[#ffffff] hover:text-[#ff7a18] hover:cursor-pointer transition duration-500 ease-in-out border border-transparent hover:border-amber-700 mt-3 outline-0">
              Discover what's new
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default homebody;
