import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const MainBanner = () => {
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
  const [div6Ref = ref, div6InView = inView] = useInView();
  const div6Controls = useAnimation();
  const [div7Ref = ref, div7InView = inView] = useInView();
  const div7Controls = useAnimation();
  const div1Variants = {
    hidden: { opacity: 0, x: "-100%" },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };
  const div2Variants = {
    hidden: { opacity: 0, x: "-100%" },
    visible: { opacity: 1, x: 0, transition: { duration: 1.2 } },
  };
  const div3Variants = {
    hidden: { opacity: 0, x: "100%" },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };
  const div4Variants = {
    hidden: { opacity: 0, y: "60%" },
    visible: { opacity: 1, y: 0, transition: { duration: 1.4 } },
  };
  const div5Variants = {
    hidden: { opacity: 0, y: "60%" },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };
  const div6Variants = {
    hidden: { opacity: 0, x: "100%" },
    visible: { opacity: 1, x: 0, transition: { duration: 1.3 } },
  };
  const div7Variants = {
    hidden: { opacity: 0, y: "-100%" },
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
    if (div6InView) {
      div6Controls.start("visible");
    }
    if (div7InView) {
      div7Controls.start("visible");
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
    div6Controls,
    div6InView,
    div7Controls,
    div7InView,
  ]);
  return (
    <div className="w-full mx-auto px-4 sm:px-6 lg:px-16">
      <div className="w-full mx-auto flex flex-col md:flex-row justify-between">
        <div className="flex flex-col justify-between w-full md:w-96">
          <motion.div
            variants={div1Variants}
            initial="hidden"
            ref={div1Ref}
            animate={div1Controls}
            className="py-8 rounded-3xl flex flex-col justify-center items-center"
            style={{
              backgroundImage: "url(/images/purple-bg.png)",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <motion.img
              src="/images/Balance.png"
              className="w-40 lg:w-48 z-10"
              whileHover={{ scale: 1.1, rotate: 5 }}
            />
            <motion.img
              src="/images/Spending.png"
              className="w-56 lg:w-64 -mt-8 lg:-mt-14 ml-12 z-20"
              whileHover={{ scale: 1.1, rotate: -5 }}
            />
            <motion.img
              src="/images/Saved.png"
              className="w-44 lg:w-52 -mt-14 lg:-mt-16"
              whileHover={{ scale: 1.1, rotate: 5 }}
            />
            {/* <img src='/images/Balance.png' className='w-40 lg:w-48 z-10' /> */}
            {/* <img
              src="/images/Spending.png"
              className="w-56 lg:w-64 -mt-8 lg:-mt-14 ml-12 z-20"
            />
            <img
              src="/images/Saved.png"
              className="w-44 lg:w-52 -mt-14 lg:-mt-16"
            /> */}
          </motion.div>
          <motion.div
            variants={div2Variants}
            initial="hidden"
            ref={div2Ref}
            animate={div2Controls}
            className="w-full flex justify-center items-center relative cursor-pointer"
            whileHover={{ scale: 1.05 }}
          >
            <img src="/images/bg-spiral.png" className="mt-4 w-full" />
            <div className="absolute w-full h-full top-0 left-0 flex flex-col items-center justify-center">
              <motion.img
                src="/images/blue-arrow.png"
                className="w-12 mb-4"
              />
              {/* <img src="/images/blue-arrow.png" className="w-12 mb-4" /> */}
              <p className="text-blue-500 text-lg">Get Started</p>
            </div>
          </motion.div>
        </div>
        <div className=" w-full">
          <div className="h-2/6 flex justify-center mt-4 md:mt-0">
            <motion.p
              className="text-center text-2xl lg:text-4xl  md:w-3/4"
              variants={div3Variants}
              initial="hidden"
              ref={div3Ref}
              animate={div3Controls}
            // initial={{ opacity: 0 }}
            // animate={{ opacity: 1,y:0 }}
            // transition={{ duration: 1.5 }}
            >
              Defied Trust's innovative suite of tools for blockchain startups,
              investors, and fund managers maximizes growth and success for
              forward-thinking projects.
            </motion.p>
          </div>
          <div className="h-4/6 flex flex-col md:flex-row">
            <motion.div
              variants={div4Variants}
              initial="hidden"
              ref={div4Ref}
              animate={div4Controls}
              className="md:mx-4 w-full lg:w-1/3 rounded-xl relative mt-16"
              style={{
                backgroundImage: "url(/images/g-3.png)",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            >
              <motion.img
                src="/images/g-1.png"
                className="md:absolute top-4 left-4 z-10"
                whileHover={{ scale: 1.05, }}
              />
              {/* <img
                                src="/images/g-1.png"
                                className="md:absolute top-4 left-4 z-10"
                            /> */}
              <motion.img
                src="/images/g-2.png"
                className="w-48 pt-16 absolute bottom-0 right-0"
                whileHover={{ scale: 1, rotate: -2 }}
              />
              {/* <img
                                src="/images/g-2.png"
                                className="w-48 pt-16 absolute bottom-0 right-0"
                            /> */}
            </motion.div>
            <div className="w-full md:w-1/3 flex md:hidden lg:flex flex-col justify-between">
              <div className="w-full flex justify-center mt-8">
                <motion.button
                  variants={div7Variants}
                  initial="hidden"
                  ref={div7Ref}
                  animate={div7Controls}
                  whileHover={{ scale: 1.05 }}
                  className="w-full lg:w-1/2 mb-2 md:mb-0 px-4 py-3 rounded-md text-sm font-medium text-white bg-black flex items-center justify-center"
                >
                  <span>Join now</span>
                  <img src="/images/arrow.png" className=" ml-2 w-3" />
                </motion.button>
                {/* <button className="w-full lg:w-1/2 mb-2 md:mb-0 px-4 py-3 rounded-md text-sm font-medium text-white bg-black flex items-center justify-center">
                                    <span>Join now</span>
                                    <img src="/images/arrow.png" className=" ml-2 w-3" />
                                </button> */}
              </div>
              <motion.div
                variants={div5Variants}
                initial="hidden"
                ref={div5Ref}
                animate={div5Controls}
                className="w-full rounded-xl  flex justify-center items-end"
                style={{
                  backgroundImage: "url(/images/p-1.png)",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              >
                <motion.div
                  className="w-3/4 relative"
                >
                  <img src="/images/p-2.png" className="w-full" />
                  <div className="absolute top-0 left-0 flex flex-col w-full h-full justify-center items-center text-white">
                    <p className="text-sm mt-20 mb-6">Thoughts Time</p>
                    <p className="text-xs text-center px-2">
                      If you aren’t willing to own a stock for 10 years, don’t
                      even think about owning it for 10 minutes.
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            </div>
            <motion.div
              variants={div6Variants}
              initial="hidden"
              ref={div6Ref}
              animate={div6Controls}
              className="mt-4 md:mt-0 md:mx-4 rounded-xl relative flex md:hidden lg:flex md:justify-center md:items-center p-4 md:p-0 md:px-4"
              style={{
                backgroundImage: "url(/images/L1.png)",
                backgroundRepeat: "no-repeat",
                // backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            >
              <img
                src="/images/L2.png"
                className="w-full md:w-auto"
              />
            </motion.div>
          </div>
        </div>
      </div>
      <div className="hidden items-end md:flex lg:hidden mt-8">
        <div className="w-full md:w-1/2 lg:hidden flex flex-col">
          <div className="w-full flex justify-center my-12">
            <button className="w-full lg:w-1/2 mb-2 md:mb-0 px-4 py-3 rounded-md text-sm font-medium text-white bg-black flex items-center justify-center">
              <span>Join now</span>
              <img src="/images/arrow.png" className=" ml-2 w-3" />
            </button>
          </div>
          <div
            className="w-full rounded-xl  flex justify-center items-end"
            style={{
              backgroundImage: "url(/images/p-1.png)",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <div className="w-3/4 relative">
              <img src="/images/p-2.png" className="w-full" />
              <div className="absolute top-0 left-0 flex flex-col w-full h-full justify-center items-center text-white">
                <p className="text-sm mt-20 mb-6">Thoughts Time</p>
                <p className="text-xs text-center px-2">
                  If you aren’t willing to own a stock for 10 years, don’t even
                  think about owning it for 10 minutes.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="mt-4 md:mt-0 md:mx-4 w-full md:w-1/2 rounded-xl relative flex lg:hidden"
          style={{
            backgroundImage: "url(/images/L1.png)",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <div className="rounded-xl w-full h-full">
            <img
              src="/images/L2.png"
              className="p-4 w-full object-cover h-full rounded-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainBanner;
