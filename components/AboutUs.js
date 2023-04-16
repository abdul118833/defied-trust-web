import React, { useEffect } from 'react'
import { useAnimation, motion, inView } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AboutUs = () => {
    const [div1Ref = ref, div1InView = inView] = useInView();
    const div1Controls = useAnimation();
    const [div2Ref = ref, div2InView = inView] = useInView();
    const div2Controls = useAnimation();
    const [div3Ref = ref, div3InView = inView] = useInView();
    const div3Controls = useAnimation();
    const div1Variants = {
        hidden: { opacity: 0, x: "-100%" },
        visible: { opacity: 1, x: 0, transition: { delay: .5, duration: 1 } },
    };
    const div2Variants = {
        hidden: { opacity: 0, y: "-100%" },
        visible: { opacity: 1, y: 0, transition: { duration: 1 } },
    };
    const div3Variants = {
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
        if (div3InView) {
            div3Controls.start("visible");
        }
    }, [
        div1Controls,
        div1InView,
        div2Controls,
        div2InView,
        div3Controls,
        div3InView,
    ]);
    return (
        <div className="w-full px-4 sm:px-6 lg:p-16 pt-24 pb-20 md:pt-72" style={{
            backgroundImage: "url(/images/about-us.png)",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
        }}>
            <motion.div
                variants={div1Variants}
                initial="hidden"
                ref={div1Ref}
                animate={div1Controls}
                className="p-4 md:p-8 text-white rounded-lg w-full md:w-2/3 lg:w-1/3 mt-12 md:mt-24">
                <p className="text-5xl mb-2">About Us</p>
                <p className="text-lg">
                    We work with passion to promote a healthy ecosystem for the next web3 unicorns, providing all the tools that investors and startups need to succeed.
                </p>
            </motion.div>
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