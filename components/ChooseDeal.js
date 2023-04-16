import React, { useEffect } from 'react'
import { useAnimation, motion, inView } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ChooseDeal = () => {
    const [div1Ref = ref, div1InView = inView] = useInView();
    const div1Controls = useAnimation();
    const [div2Ref = ref, div2InView = inView] = useInView();
    const div2Controls = useAnimation();
    const div1Variants = {
        hidden: { opacity: 0, x: "-100%" },
        visible: { opacity: 1, x: 0, transition: { duration: 1 } },
    };
    const div2Variants = {
        hidden: { opacity: 0, x: "100%" },
        visible: { opacity: 1, x: 0, transition: { duration: 1 } },
    };
    useEffect(() => {
        if (div1InView) {
            div1Controls.start("visible");
        }
        if (div2InView) {
            div2Controls.start("visible");
        }
    }, [
        div1Controls,
        div1InView,
        div2Controls,
        div2InView,
    ]);
    return (
        <div className='w-full mx-auto px-4 lg:px-16 text-gray-800 mt-72' >
            <div className='py-20 md:py-44 px-4 sm:px-10 md:px-10 lg:px-20 flex justify-center items-center rounded-md relative' style={{
                backgroundImage: "url(/images/choose-back.png)",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
            }}>
                <motion.p 
                variants={div1Variants}
                initial="hidden"
                ref={div1Ref}
                animate={div1Controls}
                className='text-xl md:text-5xl absolute left-6 -top-20 sm:-top-10 md:-top-28 lg:w-4/5'>CHOOSE TO INVEST DEAL BY DEAL OR CO-INVEST WITH VCS</motion.p>
                <motion.p 
                variants={div2Variants}
                initial="hidden"
                ref={div2Ref}
                animate={div2Controls}
                className='text-xl md:text-5xl text-white absolute left-6 top-0'> ROLLING FUNDS.</motion.p>
                <div>
                    <div className='w-full flex flex-col md:flex-row items-center'>
                        <div className='w-full md:w-1/6'>
                            <p className='text-white text-4xl text-center mb-4 md:mb-0'>PRIVATE ROUND</p>
                        </div>

                        <motion.div 
                        variants={div1Variants}
                        initial="hidden"
                        ref={div1Ref}
                        animate={div1Controls}
                        className="w-full md:w-2/6 p-6 bg-white rounded-lg mx-6 h-auto md:h-40 mb-4 md:mb-0">
                            <p className="text-[25px] font-semibold mb-2 capitalize">Startups</p>
                            <p className=" text-[14px] xl:text-[18px]">
                            Projects will be vetted by Defied’s Team
                            </p>
                        </motion.div>
                        <motion.div
                        variants={div2Variants}
                        initial="hidden"
                        ref={div2Ref}
                        animate={div2Controls}
                        className="w-full md:w-3/6 p-6 bg-white rounded-lg h-auto md:h-40 mb-4 md:mb-0">
                            <p className="text-[25px] font-semibold mb-2 capitalize">Investers</p>
                            <p className=" text-[14px] xl:text-[18px]">
                            Any investor that has been KYCed can participate in any of the open token sales.
                            </p>
                        </motion.div>
                    </div>
                    <div className='w-full flex flex-col md:flex-row items-center mt-6'>
                        <div className='w-full md:w-1/6 mb-4 md:mb-0'>
                            <p className='text-white text-4xl text-center'>ROLLING FUNDS</p>
                        </div>

                        <motion.div 
                        variants={div1Variants}
                        initial="hidden"
                        ref={div1Ref}
                        animate={div1Controls}
                        className="w-full md:w-3/6 p-6 bg-white rounded-lg mx-6 h-auto md:h-40 mb-4 md:mb-0">
                            <p className=" text-[14px] xl:text-[18px]">
                            VCs, Funds, Family offices, angel investors, SPVs: any that passes the KYB and is licensed
                            </p>
                        </motion.div>
                        <motion.div 
                        variants={div2Variants}
                        initial="hidden"
                        ref={div2Ref}
                        animate={div2Controls}
                        className="w-full md:w-2/6 p-6 bg-white rounded-lg h-auto md:h-40 mb-4 md:mb-0">
                            <p className="text-[25px] font-semibold mb-2 capitalize">Investers</p>
                            <p className=" text-[14px] xl:text-[18px]">
                            any investor that can meet the minimum amount required to roll funds and has been KYCed.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChooseDeal