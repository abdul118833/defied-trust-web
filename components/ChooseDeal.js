import React from 'react'

const ChooseDeal = () => {
    return (
        <div className='w-full mx-auto px-4 lg:px-16 text-gray-800 mt-72' >
            <div className='py-20 md:py-44 px-4 sm:px-10 md:px-10 lg:px-20 flex justify-center items-center rounded-md relative' style={{
                backgroundImage: "url(/images/choose-back.png)",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
            }}>
                <p className='text-xl md:text-5xl absolute left-6 -top-20 sm:-top-10 md:-top-28 lg:w-4/5'>CHOOSE TO INVEST DEAL BY DEAL OR CO-INVEST WITH VCS</p>
                <p className='text-xl md:text-5xl text-white absolute left-6 top-0'> ROLLING FUNDS.</p>
                <div>
                    <div className='w-full flex flex-col md:flex-row items-center'>
                        <div className='w-full md:w-1/6'>
                            <p className='text-white text-4xl text-center mb-4 md:mb-0'>PRIVATE ROUND</p>
                        </div>

                        <div className="w-full md:w-2/6 p-6 bg-white rounded-lg mx-6 h-auto md:h-40 mb-4 md:mb-0">
                            <p className="text-[25px] font-semibold mb-2 capitalize">Startups</p>
                            <p className=" text-[14px] xl:text-[18px]">
                            Projects will be vetted by Defied’s Team
                            </p>
                        </div>
                        <div className="w-full md:w-3/6 p-6 bg-white rounded-lg h-auto md:h-40 mb-4 md:mb-0">
                            <p className="text-[25px] font-semibold mb-2 capitalize">Investers</p>
                            <p className=" text-[14px] xl:text-[18px]">
                            Any investor that has been KYCed can participate in any of the open token sales.
                            </p>
                        </div>
                    </div>
                    <div className='w-full flex flex-col md:flex-row items-center mt-6'>
                        <div className='w-full md:w-1/6 mb-4 md:mb-0'>
                            <p className='text-white text-4xl text-center'>ROLLING FUNDS</p>
                        </div>

                        <div className="w-full md:w-3/6 p-6 bg-white rounded-lg mx-6 h-auto md:h-40 mb-4 md:mb-0">
                            <p className=" text-[14px] xl:text-[18px]">
                            VCs, Funds, Family offices, angel investors, SPVs: any that passes the KYB and is licensed
                            </p>
                        </div>
                        <div className="w-full md:w-2/6 p-6 bg-white rounded-lg h-auto md:h-40 mb-4 md:mb-0">
                            <p className="text-[25px] font-semibold mb-2 capitalize">Investers</p>
                            <p className=" text-[14px] xl:text-[18px]">
                            any investor that can meet the minimum amount required to roll funds and has been KYCed.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChooseDeal