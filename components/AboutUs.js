import React from 'react'

const AboutUs = () => {
    return (
        <div className="w-full px-4 sm:px-6 lg:p-16 pt-24 pb-20 md:pt-72" style={{
            backgroundImage: "url(/images/about-us.png)",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
        }}>
            <div className="p-4 md:p-8 text-white rounded-lg w-full md:w-2/3 lg:w-1/3 mt-12 md:mt-24">
                <p className="text-5xl mb-2">About Us</p>
                <p className="text-lg">
                    We work with passion to promote a healthy ecosystem for the next web3 unicorns, providing all the tools that investors and startups need to succeed.
                </p>
            </div>
            <div className='flex flex-col md:flex-row md:items-end justify-between'>
                <div className="p-4 md:p-8 text-white rounded-lg md:w-1/3">
                    <p className="text-5xl md:text-7xl mb-2">55+</p>
                    <p className="text-lg">
                        Start-ups have raised funds using our arms-length infrastructure.
                    </p>
                </div>
                <div className="p-4 md:p-8 text-white rounded-lg md:w-1/3">
                    <p className="text-5xl md:text-7xl mb-2">$40B+</p>
                    <p className="text-lg">
                        Funds raised by Start-ups that have used Defied’s services.
                    </p>
                </div>
                <div className='p-4 md:p-8 md:w-1/3 flex md:justify-end'>
                    <img src='/images/Twitter.png' className='w-4 md:w-8 ml-2' />
                    <img src='/images/Instagram.png' className='w-4 md:w-8 ml-2' />
                    <img src='/images/LinkedIn.png' className='w-4 md:w-8 ml-2' />
                    <img src='/images/Medium.png' className='w-4 md:w-8 ml-2' />
                </div>
            </div>
        </div>
    )
}

export default AboutUs