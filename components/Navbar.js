import React, { useState } from "react";
import { motion } from "framer-motion";
import CrossIcon from "./icons/CrossIcon";
import MenuIcon from "./icons/MenuIcon";

const Navbar = () => {
  const [nav, setNav] = useState(false)
  return (
    <nav>
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-16 flex items-center justify-between py-4">

        <div className="w-1/2 flex items-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 3.5 }}
            exit={{ opacity: 0 }}
          >
            <img className="h-8 w-auto" src="/images/logo.png" alt="Logo" />
          </motion.div>
          <div className="hidden md:flex sm:items-center sm:ml-6">
            <a href="#" className="text-gray-800 ml-8">
              Startups
            </a>
            <a href="#" className="text-gray-800 ml-8">
              Investors
            </a>
            <a href="#" className="text-gray-800 ml-8">
              Fund Managers
            </a>
          </div>
        </div>
        <div className="w-1/2 flex justify-end items-center">
          <a href="#" className="text-gray-800 ml-8 hidden md:block">
            Login
          </a>
          <button className="hidden ml-8 p-3 md:px-6 md:py-5 rounded-md text-sm font-medium text-white bg-gradient-to-r from-indigo-500 to-purple-500 md:flex items-center">
            <span>Join now</span>
            <img src="/images/arrow.png" className=" ml-2 w-3" />
          </button>
          <button className="p-2 rounded-md bg-gradient-to-r from-indigo-500 to-purple-500 flex md:hidden items-center justify-center"
            onClick={() => {
              setNav(true)
            }}
          >
            <MenuIcon />
          </button>
          <div
            className={`md:hidden fixed top-0 left-0 w-full h-full transform duration-500 bg-white z-50 p-4 ${nav ? 'translate-x-0' : '-translate-x-full'}`}>
            <div className="w-full flex justify-between items-center mb-3">
              <img className="h-8 w-auto" src="/images/logo.png" alt="Logo" />
              <button className="p-2 rounded-md bg-gradient-to-r from-indigo-500 to-purple-500 flex md:hidden items-center justify-center"
                onClick={() => {
                  setNav(false)
                }}
              >
                <CrossIcon />
              </button>
            </div>
            <button className="p-3 w-full rounded-md text-sm font-medium text-white bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center">
              <span>Join now</span>
              <img src="/images/arrow.png" className=" ml-2 w-3" />
            </button>
            <div className="flex flex-col items-center justify-center w-full">
              <a href="#" className="text-white mt-3 p-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-md w-full flex justify-center items-center text-center">
                Startups
              </a>
              <a href="#" className="text-white mt-3 p-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-md w-full flex justify-center items-center text-center">
                Investors
              </a>
              <a href="#" className="text-white mt-3 p-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-md w-full flex justify-center items-center text-center">
                Fund Managers
              </a>
              <a href="#" className="text-white mt-3 p-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-md w-full flex justify-center items-center text-center">
                Login
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
