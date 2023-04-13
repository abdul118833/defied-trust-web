import React from "react";

const Investers = () => {
    return (
        <div className="w-full px-4 sm:px-6 lg:px-16 my-16">
            <p className="text-5xl text-gray-800">INVESTERS</p>
            <img className="w-full my-4" src="/images/arrow-line.png"/>
            <div className="flex justify-between w-full my-6 font-semibold text-gray-800 text-lg md:text-2xl">
                <div className="w-1/2">
                    Rolling Funds
                </div>
                <div className="w-1/2">
                    Investment Rounds
                </div>
            </div>
            <div
                className="h-[36rem] w-full rounded-md relative"
                style={{
                    backgroundImage: "url(/images/investers.png)",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: 'cover'
                }}
            >
                <div className="p-8 text-white bg-gradient-to-r from-indigo-500 to-purple-500 w-72 rounded-lg md:absolute top-8 -left-8">
                    <p className="text-lg font-bold mb-2">Rolling Funds</p>
                    <p className="text-xs">
                        Explore Rolling Funds and discover your ideal match. Subscribe quarterly, invest with leading VCs, and adjust your investment size as your goals change.
                    </p>
                </div>

                <div className="p-8 text-white bg-gradient-to-r from-indigo-500 to-purple-500 w-72 rounded-lg absolute bottom-0 md:bottom-8 right-0 md:-right-8">
                    <p className="text-lg font-bold mb-2">Investment Rounds</p>
                    <p className="text-xs">
                        Gain access to the most promising early-stage Web3 projects
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Investers;
