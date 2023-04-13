import React from 'react'

const StartUp = () => {
    return (
        <div className="w-full px-4 sm:px-6 lg:p-16 pt-12 pb-12 md:pb-20 md:pt-72 h-auto lg:h-[50rem] xl:h-[60rem] flex items-end" style={{
            backgroundImage: "url(/images/start-up.png)",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
        }}>
            <div className='w-full flex flex-col md:flex-row justify-between md:mb-12'>
                <div className="p-4 md:p-8 mb-4 md:mb-0 text-gray-700 bg-white w-full md:w-1/3 rounded-lg">
                    <img src='/images/CircleCheck.png' className='w-8 mb-2' />
                    <p className="text-xl font-bold mb-2">Equity</p>
                    <p className="text-sm">
                        Defied Trust's cap table tool simplifies equity management for startups, making it easy to keep track of your company's most valuable asset. With automated features that ensure compliance, you can make informed decisions with confidence.
                    </p>
                </div>
                <div className="p-4 md:p-8 mb-4 md:mb-0 text-gray-700 bg-white w-full md:w-1/3 md:mx-8 rounded-lg">
                    <img src='/images/CircleCheck.png' className='w-8 mb-2' />
                    <p className="text-xl font-bold mb-2">Raise</p>
                    <p className="text-sm">
                        Defied Trust's platform simplifies the fundraising process taking care of everything from compliance to the onboarding of new investors. With our support, startups can easily raise funds through future tokens, NFTs, and equity rounds.
                    </p>
                </div>
                <div className="p-4 md:p-8 mb-4 md:mb-0 text-gray-700 bg-white w-full md:w-1/3 rounded-lg">
                    <img src='/images/CircleCheck.png' className='w-8 mb-2' />
                    <p className="text-xl font-bold mb-2">Incorporation</p>
                    <p className="text-sm">
                        Get your startup fundraising-ready in no time with Defied Trust’s Legal Team support. We'll help you find the optimal corporate structure to minimize taxes and maximize your fundraising potential.
                    </p>
                </div>
            </div>

        </div>
    )
}

export default StartUp