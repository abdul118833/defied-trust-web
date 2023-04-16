import React, { useEffect } from "react";
import { useAnimation, motion, inView } from "framer-motion";
import { useInView } from "react-intersection-observer";

const FundManagers = () => {
  const [div1Ref = ref, div1InView = inView] = useInView();
  const div1Controls = useAnimation();
  const [div2Ref = ref, div2InView = inView] = useInView();
  const div2Controls = useAnimation();
  const [div3Ref = ref, div3InView = inView] = useInView();
  const div3Controls = useAnimation();
  const [div4Ref = ref, div4InView = inView] = useInView();
  const div4Controls = useAnimation();
  const div1Variants = {
    hidden: { opacity: 0, x: "-100%" },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };
  const div2Variants = {
    hidden: { opacity: 0, y: "-100%" },
    visible: { opacity: 1, y: 0,transition: { delay:.5,duration: 1.2 } },
  };
  const div3Variants = {
    hidden: { opacity: 0, x: "100%" },
    visible: { opacity: 1, x: 0, transition: { duration: 1.4 } },
  };
  const div4Variants = {
    hidden: { opacity: 0, x: "-100%" },
    visible: { opacity: 1, x: 0, transition: { duration: 1.6 } },
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
  }, [
    div1Controls,
    div1InView,
    div2Controls,
    div2InView,
    div3Controls,
    div3InView,
    div4Controls,
    div4InView,
  ]);
  return (
    <div className="w-full px-4 sm:px-6 lg:p-16">
      <motion.p
        variants={div1Variants}
        initial="hidden"
        ref={div1Ref}
        animate={div1Controls}
        className="text-5xl text-gray-800 text-center ml-6 mb-16">
        FUND MANAGERS
      </motion.p>
      <div className="w-full flex justify-center my-6">
        <motion.div
          variants={div3Variants}
          initial="hidden"
          ref={div3Ref}
          animate={div3Controls}
          className="w-[30rem] lg:w-[55rem] h-[14rem] lg:h-[22rem] rounded-md relative"
          style={{
            backgroundImage: "url(/images/fund-manager.png)",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <motion.div
            variants={div2Variants}
            initial="hidden"
            ref={div2Ref}
            animate={div2Controls}
            className="text-4xl text-gray-800 text-center flex items-center md:absolute md:-left-28 top-12">
            <p>Rolling</p>
            <p className="text-white ml-3">Funds</p>
          </motion.div>
        </motion.div>
      </div>
      <div className="w-full flex justify-center">
        <motion.div
          variants={div4Variants}
          initial="hidden"
          ref={div4Ref}
          animate={div4Controls}
          className="w-full md:w-2/3 text-gray-700 mb-4 md:mb-0">
          <p className="text-xl">
            Defied Trust offers VCs the opportunity to accept new capital on a
            regular basis from LPs, which subscribe monthly or quarterly. With
            complete control over fund terms, you can raise funds publicly and
            continuously.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default FundManagers;
