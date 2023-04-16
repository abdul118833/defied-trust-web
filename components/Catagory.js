import React, { useEffect } from "react";
import { useAnimation, motion, inView } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Catagory = () => {
    const [image1Ref = ref, image1InView = inView] = useInView();
    const image1Controls = useAnimation();
    const [image2Ref = ref, image2InView = inView] = useInView();
    const image2Controls = useAnimation();
    const [image3Ref = ref, image3InView = inView] = useInView();
    const image3Controls = useAnimation();
    const [image4Ref = ref, image4InView = inView] = useInView();
    const image4Controls = useAnimation();
    const image1Variants = {
        hidden: { opacity: 0, x: "-100%" },
        visible: { opacity: 1, x: 0, transition: { duration: 1 } },
    };
    const image2Variants = {
        hidden: { opacity: 0, x: "-100%" },
        visible: { opacity: 1, x: 0, transition: { duration: 1.3 } },
    };
    const image3Variants = {
        hidden: { opacity: 0, x: "-100%" },
        visible: { opacity: 1, x: 0, transition: { duration: 1.5 } },
    };
    const image4Variants = {
        hidden: { opacity: 0, x: "100%" },
        visible: { opacity: 1, x: 0, transition: { duration: 1 } },
    };
    useEffect(() => {
        if (image1InView) {
            image1Controls.start("visible");
        }
        if (image2InView) {
            image2Controls.start("visible");
        }
        if (image3InView) {
            image3Controls.start("visible");
        }
        if (image4InView) {
            image4Controls.start("visible");
        }
    }, [
        image1Controls,
        image1InView,
        image2Controls,
        image2InView,
        image3Controls,
        image3InView,
        image4Controls,
        image4InView,
    ]);
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
                    <motion.img
                        src="/images/c-1.png"
                        className="rounded-t-xl md:rounded-t-none"
                        variants={image1Variants}
                        initial="hidden"
                        ref={image1Ref}
                        animate={image1Controls}
                    // initial={{ x: "-100%", opacity: 0 }}
                    // animate={{ x: 0, opacity: 1 }}
                    // transition={{ duration: 1 }}
                    />
                    <motion.img
                        src="/images/c-2.png"
                        className="my-2"
                        variants={image2Variants}
                        initial="hidden"
                        ref={image2Ref}
                        animate={image2Controls}
                    />
                    <motion.img
                        src="/images/c-3.png"
                        className="rounded-b-xl md:rounded-b-none"
                        variants={image3Variants}
                        initial="hidden"
                        ref={image3Ref}
                        animate={image3Controls}
                    />
                </div>
                <div className="w-full md:w-5/6 flex md:justify-center md:items-center">
                    <motion.div className="w-full md:w-4/5 md:p-3"
                        variants={image4Variants}
                        initial="hidden"
                        ref={image4Ref}
                        animate={image4Controls}
                    >
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
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Catagory;
