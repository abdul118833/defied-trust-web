import React, { useEffect } from "react";
import { useAnimation, motion, inView } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Investers = () => {
    const [div1Ref = ref, div1InView = inView] = useInView();
    const div1Controls = useAnimation();
    const [div2Ref = ref, div2InView = inView] = useInView();
    const div2Controls = useAnimation();
    const [div3Ref = ref, div3InView = inView] = useInView();
    const div3Controls = useAnimation();
    const [div4Ref = ref, div4InView = inView] = useInView();
    const div4Controls = useAnimation();
    const [div5Ref = ref, div5InView = inView] = useInView();
    const div5Controls = useAnimation();
    const div1Variants = {
        hidden: { opacity: 0, x: "-100%" },
        visible: { opacity: 1, x: 0, transition: { duration: 1 } },
    };
    const div2Variants = {
        hidden: { opacity: 0, y: "100%" },
        visible: { opacity: 1, y: 0, transition: { duration: 1 } },
    };
    const div3Variants = {
        hidden: { opacity: 0, x: "-100%" },
        visible: { opacity: 1, x: 0, transition: { duration: 1 } },
    };
    const div4Variants = {
        hidden: { opacity: 0, x: "100%" },
        visible: { opacity: 1, x: 0, transition: { duration: 1 } },
    };
    const div5Variants = {
        hidden: { opacity: 0, y: "50%" },
        visible: { opacity: 1, y: 0, transition: { duration: 1 } },
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
        if (div4InView) {
            div4Controls.start("visible");
        }
        if (div5InView) {
            div5Controls.start("visible");
        }
    }, [
        div1Controls,
        div1InView,
        div2Controls,
        div2InView,
        div3Controls,
        div3InView,
        div4Controls,
        div4InView,
        div5Controls,
        div5InView,
    ]);
    return (
        <div className="w-full px-4 sm:px-6 lg:px-16 my-16">
            <p className="text-5xl text-gray-800">INVESTERS</p>
            <motion.img className="w-full my-4" src="/images/arrow-line.png"
                variants={div1Variants}
                initial="hidden"
                ref={div1Ref}
                animate={div1Controls}
            />
            <motion.div
                variants={div2Variants}
                initial="hidden"
                ref={div2Ref}
                animate={div2Controls}
                className="flex justify-between w-full my-6 font-semibold text-gray-800 text-lg md:text-2xl">
                <div className="w-1/2"
                >
                    Rolling Funds
                </div>
                <div className="w-1/2"
                >
                    Investment Rounds
                </div>
            </motion.div>
            <motion.div
                variants={div5Variants}
                initial="hidden"
                ref={div5Ref}
                animate={div5Controls}
                className="h-[36rem] w-full rounded-md relative"
                style={{
                    backgroundImage: "url(/images/investers.png)",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: 'cover'
                }}
            >
                <motion.div
                    variants={div3Variants}
                    initial="hidden"
                    ref={div3Ref}
                    animate={div3Controls}
                    className="p-8 text-white bg-gradient-to-r from-indigo-500 to-purple-500 w-72 rounded-lg md:absolute top-8 -left-8">
                    <p className="text-lg font-bold mb-2">Rolling Funds</p>
                    <p className="text-xs">
                        Explore Rolling Funds and discover your ideal match. Subscribe quarterly, invest with leading VCs, and adjust your investment size as your goals change.
                    </p>
                </motion.div>

                <motion.div
                    variants={div4Variants}
                    initial="hidden"
                    ref={div4Ref}
                    animate={div4Controls}
                    className="p-8 text-white bg-gradient-to-r from-indigo-500 to-purple-500 w-72 rounded-lg absolute bottom-0 md:bottom-8 right-0 md:-right-8">
                    <p className="text-lg font-bold mb-2">Investment Rounds</p>
                    <p className="text-xs">
                        Gain access to the most promising early-stage Web3 projects
                    </p>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Investers;
