import React from "react";

const AboveFooter = () => {
  return (
    <div className="w-full mx-auto px-4 sm:px-6 lg:px-16 flex items-center justify-between py-4 mt-10 mb-4">
      <div className="hidden md:flex"></div>
      <div>
        <img className="h-8 w-auto" src="/images/logo.png" alt="Logo" />
      </div>
      <button className="ml-8 px-4 py-3 rounded-md text-sm font-medium text-white bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center">
        <span>Join now</span>
        <img src="/images/arrow.png" className=" ml-2 w-3" />
      </button>
    </div>
  );
};

export default AboveFooter;
