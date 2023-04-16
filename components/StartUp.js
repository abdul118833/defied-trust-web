import React, { useEffect } from 'react'
import { useAnimation, motion, inView } from "framer-motion";
import { useInView } from "react-intersection-observer";

const StartUp = () => {
    const [div1Ref = ref, div1InView = inView] = useInView();
    const div1Controls = useAnimation();
    const [div2Ref = ref, div2InView = inView] = useInView();
    const div2Controls = useAnimation();
    const [div3Ref = ref, div3InView = inView] = useInView();
    const div3Controls = useAnimation();
    const div1Variants = {
        hidden: { opacity: 0, x: "-100%" },
        visible: { opacity: 1, x: 0, transition: { duration: 1 } },
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
        <div className="w-full px-4 sm:px-6 lg:p-16 pt-12 pb-12 md:pb-20 md:pt-72 h-auto lg:h-[50rem] xl:h-[60rem] flex items-end" style={{
            backgroundImage: "url(/images/start-up.png)",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
        }}>
            <div className='w-full flex flex-col md:flex-row justify-between md:mb-12'>
                <motion.div className="p-4 md:p-8 mb-4 md:mb-0 text-gray-700 bg-white w-full md:w-1/3 rounded-lg"
                    variants={div1Variants}
                    initial="hidden"
                    ref={div1Ref}
                    animate={div1Controls}>
                    <img src='/images/CircleCheck.png' className='w-8 mb-2' />
                    <p className="text-xl font-bold mb-2">Equity</p>
                    <p className="text-sm">
                        Defied Trust's cap table tool simplifies equity management for startups, making it easy to keep track of your company's most valuable asset. With automated features that ensure compliance, you can make informed decisions with confidence.
                    </p>
                </motion.div>
                <motion.div className="p-4 md:p-8 mb-4 md:mb-0 text-gray-700 bg-white w-full md:w-1/3 md:mx-8 rounded-lg"
                    variants={div2Variants}
                    initial="hidden"
                    ref={div2Ref}
                    animate={div2Controls}>
                    <img src='/images/CircleCheck.png' className='w-8 mb-2' />
                    <p className="text-xl font-bold mb-2">Raise</p>
                    <p className="text-sm">
                        Defied Trust's platform simplifies the fundraising process taking care of everything from compliance to the onboarding of new investors. With our support, startups can easily raise funds through future tokens, NFTs, and equity rounds.
                    </p>
                </motion.div>
                <motion.div className="p-4 md:p-8 mb-4 md:mb-0 text-gray-700 bg-white w-full md:w-1/3 rounded-lg"
                    variants={div3Variants}
                    initial="hidden"
                    ref={div3Ref}
                    animate={div3Controls}>
                    <img src='/images/CircleCheck.png' className='w-8 mb-2' />
                    <p className="text-xl font-bold mb-2">Incorporation</p>
                    <p className="text-sm">
                        Get your startup fundraising-ready in no time with Defied Trust’s Legal Team support. We'll help you find the optimal corporate structure to minimize taxes and maximize your fundraising potential.
                    </p>
                </motion.div>
            </div>

        </div>
    )
}

export default StartUp