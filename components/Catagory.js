import React from "react";

const Catagory = () => {
    return (
        <div className="w-full mx-auto px-4 lg:px-16 my-8 md:my-20">
            <div
                className="flex flex-col md:flex-row"
                style={{
                    backgroundImage: "url(/images/c-back.png)",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "contain",
                }}
            >
                <div className="flex flex-col justify-center items-center">
                    <img src="/images/c-1.png" className="rounded-t-xl md:rounded-t-none"/>
                    <img src="/images/c-2.png" className="my-2" />
                    <img src="/images/c-3.png" className="rounded-b-xl md:rounded-b-none"/>
                </div>
                <div className="w-full md:w-5/6 flex md:justify-center md:items-center">
                    <div className="w-full md:w-4/5 md:p-3">
                        <p className="capitalize text-4xl mt-6 md:mt-0 mb-4">Categories</p>
                        <div className="flex justify-between items-center border-b-2 border-gray-500 py-3">
                            <p className="text-sm md:text-xl font-semibold">Startups</p>
                            <div className="flex items-center text-xs md:text-lg">
                                <div className="flex items-center">
                                    <p>Equity</p>
                                    <img src="/images/ArrowDownRight.png" />
                                </div>
                                <div className="flex items-center mx-2 md:mx-8">
                                    <p>Raise</p>
                                    <img src="/images/ArrowDownRight.png" />
                                </div>
                                <div className="flex items-center">
                                    <p>Incorporation</p>
                                    <img src="/images/ArrowDownRight.png" />
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-between items-center my-3 border-b-2 border-gray-500 py-3">
                            <p className="text-sm md:text-xl font-semibold">Investers</p>
                            <div className="flex items-center text-xs md:text-lg">
                                <div className="flex items-center">
                                    <p>Rolling Funds</p>
                                    <img src="/images/ArrowDownRight.png" />
                                </div>
                                <div className="flex items-center ml-2 md:ml-8">
                                    <p>Investment Rounds</p>
                                    <img src="/images/ArrowDownRight.png" />
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-between items-center border-b-2 border-gray-500 py-3">
                            <p className="text-sm md:text-xl font-semibold">Fund Managers</p>
                            <div className="flex items-center text-xs md:text-lg">
                                <div className="flex items-center">
                                    <p>Rolling Funds</p>
                                    <img src="/images/ArrowDownRight.png" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Catagory;
