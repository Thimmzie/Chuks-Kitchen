import React from 'react';
import Logo from '../../../public/images/Chuks Kitchen.png';
import { MdEmail } from 'react-icons/md';
import { FaEyeSlash } from 'react-icons/fa';
import { IoMdLock } from 'react-icons/io';
import { FcGoogle } from 'react-icons/fc';
import { FaApple } from 'react-icons/fa';
import DesktopImage from '../../../public/images/login-img-desktop.png';
import { useNavigate } from 'react-router-dom';
import { IoMdCall } from 'react-icons/io';
import { IoMdCheckbox } from 'react-icons/io';
const signUp = () => {
  const navigate = useNavigate();
  return (
    <div className="lg:grid lg:grid-cols-2 lg:h-[150vh]">
      <div
        className="hidden lg:relative lg:flex lg:pt-80 lg:flex-col lg:items-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url(${DesktopImage})`,
        }}
      >
        <span className="overlay"></span>
        <h1 className="text-[#ffff] text-[2.6rem] font-bold relative z-20">
          Chuks Kitchen
        </h1>
        <p className="text-[#ffff] text-[1.3rem] relative z-20 text-center pt-3">
          Your journey to delicious, authentic <br /> Nigerian meals starts
          here. Sign up <br /> or log in to order your favorites <br /> today!
        </p>
      </div>
      <div className="px-6 md:px-23 lg:bg-[#f3f4f6] lg:pt-40 lg:px-32">
        <div className="flex flex-col items-center mt-10">
          <img className="lg:h-[4vh]" src={Logo} />
          <h1 className="text-[#1f2937] text-[1.8rem] font-bold mt-1.3 lg:text-[1.4rem]">
            Create your Account
          </h1>
        </div>
        <form className="mt-7">
          <div className="relative">
            <MdEmail
              size={20}
              className="absolute left-3 top-15.5 lg:top-14.5 -translate-y-1/2 text-[#3b4758] pointer-events-none"
            />

            <label className="text-[1rem] lg:text-[0.9rem]">Email</label>
            <input
              type="email"
              placeholder="name@gmail.com"
              className="w-full h-[7.5vh] lg:h-[7.5vh] text-[#3b4758] text-[1rem] lg:text-[0.9rem] pl-10 rounded-xl border border-[#3b3b3b] outline-0 mt-2 "
            />
          </div>
          <div className="relative mt-4">
            <IoMdCall
              size={20}
              className="absolute left-3 top-15.5 lg:top-14.5 -translate-y-1/2 text-[#3b4758] pointer-events-none"
            />

            <label className="text-[1rem] lg:text-[0.9rem]">Phone number</label>
            <input
              type="tel"
              placeholder="8123340690"
              className="w-full h-[7.5vh] lg:h-[7.5vh] text-[#3b4758] text-[1rem] lg:text-[0.9rem] pl-10 rounded-xl border border-[#3b3b3b] outline-0 mt-2 "
            />
          </div>
          <div className="mt-4 relative">
            <IoMdLock
              size={20}
              className="absolute left-3 top-15 lg:top-13.5 -translate-y-1/2 text-[#3b4758] pointer-events-none"
            />
            <FaEyeSlash
              size={19}
              className="absolute right-4 top-15 lg:top-13.5 -translate-y-1/2 text-[#3b4758] pointer-events-none"
            />
            <label className="text-[1rem] lg:text-[0.9rem]">Password</label>
            <input
              type="password"
              placeholder="QWE123#"
              className="w-full h-[7.5vh] lg:h-[7.5vh] text-[#3b4758] text-[1rem] lg:text-[0.9rem] pl-10 rounded-xl border-2 border-[#3a96e8] outline-0 mt-2 "
            />
          </div>
          <div className="mt-4 relative">
            <IoMdLock
              size={20}
              className="absolute left-3 top-15 lg:top-13.5 -translate-y-1/2 text-[#3b4758] pointer-events-none"
            />

            <label className="text-[1rem] lg:text-[0.9rem]">
              Confirm password
            </label>
            <input
              type="password"
              placeholder="QWE123#"
              className="w-full h-[7.5vh] lg:h-[7.5vh] text-[#3b4758] text-[1rem] lg:text-[0.9rem] pl-10 rounded-xl border border-[#3b3b3b] outline-0 mt-2 "
            />
          </div>
        </form>
        <div className="flex items-center gap-1.5 mt-3 pr-1">
          <div>
            <IoMdCheckbox className="text-[#1e88e5]" size={23} />
          </div>
          <div>
            <p className="text-[0.8rem] lg:text-[0.9rem]">
              I agree to the{' '}
              <span className="text-[#1e88e5]">Terms & Conditions </span> and{' '}
              <span className="text-[#1e88e5]">Privacy Policy</span>
            </p>
          </div>
        </div>
        <div>
          <button
            className="bg-[#ff7a18] text-[#ffffff] text-[1rem] lg:text-[0.9rem] w-full h-[7.5vh] rounded-xl hover:bg-[#ffffff] hover:text-[#ff7a18] hover:cursor-pointer transition duration-500 ease-in-out hover:border-2 hover:border-[#ff7a18] mt-4"
            onClick={() => navigate('/home')}
          >
            Continue
          </button>
          <div className="flex items-center mt-2 gap-2">
            <span className="flex-1 h-[0.5px] bg-[#dbdbdb]"></span>
            <p className=" px-1 text-[0.8rem] lg:text-[0.7rem]">
              Or continue with
            </p>
            <span className="flex-1 h-[0.5px] bg-[#dbdbdb]"></span>
          </div>
        </div>
        <div className="flex flex-col justify-center gap-5 mt-8">
          <button className="flex justify-center items-center gap-3 w-full border border-[#bdbdbd] h-[7vh] rounded-lg lg:bg-[#ffffff] cursor-pointer">
            <FcGoogle size={25} />
            <p className="text-[1rem] lg:text-[0.8rem]">Continue with Google</p>
          </button>
          <button className="flex justify-center items-center gap-3 w-full border border-[#bdbdbd] h-[7vh] rounded-lg lg:bg-[#ffffff] cursor-pointer">
            <FaApple size={25} />
            <p className="text-[1rem] lg:text-[0.8rem]">Continue with Apple</p>
          </button>
        </div>
        <div className="mt-4 flex justify-center mb-7 text-[0.9rem]">
          <p className="text-[#303030] lg:text-[0.7rem] ">
            Already have an account?
            <a
              className="text-[#2a87f9] cursor-pointer pl-1"
              href=""
              onClick={() => navigate('/signIn')}
            >
              Sign in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default signUp;
