import React from "react";
import { motion } from "framer-motion";

const Navbar = () => {
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
          <div className="hidden sm:flex sm:items-center sm:ml-6">
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
          <button className="ml-8 px-6 py-5 rounded-md text-sm font-medium text-white bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center">
            <span>Join now</span>
            <img src="/images/arrow.png" className=" ml-2 w-3" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
