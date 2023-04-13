import React from "react";

const FundManagers = () => {
  return (
    <div className="w-full px-4 sm:px-6 lg:p-16">
      <p className="text-5xl text-gray-800 text-center ml-6 mb-16">
        FUND MANAGERS
      </p>
      <div className="w-full flex justify-center my-6">
        <div
          className="w-[30rem] lg:w-[55rem] h-[14rem] lg:h-[22rem] rounded-md relative"
          style={{
            backgroundImage: "url(/images/fund-manager.png)",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <div className="text-4xl text-gray-800 text-center flex items-center md:absolute md:-left-28 top-12">
            <p>Rolling</p>
            <p className="text-white ml-3">Funds</p>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center">
        <div className="w-full md:w-2/3 text-gray-700 mb-4 md:mb-0">
          <p className="text-xl">
            Defied Trust offers VCs the opportunity to accept new capital on a
            regular basis from LPs, which subscribe monthly or quarterly. With
            complete control over fund terms, you can raise funds publicly and
            continuously.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FundManagers;
