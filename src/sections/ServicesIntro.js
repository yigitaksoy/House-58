import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ServicesIntro = () => {
  const intersectTarget = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const { ref, inView } = useInView({
    threshold: 0.1, // Can be set between 0 to 2
  });
  const animation = useAnimation();

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  useEffect(() => {
    if (inView) {
      animation.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 1.2,
          bounce: 0.2,
        },
      });
    }
    if (!inView) {
      animation.start({ x: "-100vw" });
    }
  }, [animation, inView]);

  return (
    <motion.div
      id="services-intro"
      className="flex flex-row lg:h-[85vh] h-[60vh] lg:mt-40 md:mt-[10rem] mb-32 md:mb-1 lg:mb-1"
    >
      <div ref={ref}>
        <motion.div className="p-6 lg:ml-48 md:ml-20 " animate={animation}>
          <motion.h2
            ref={intersectTarget}
            whileHover={{ scale: 1.4, x: 80 }}
            className="  font-black lg:text-8xl text-5xl md:text-6xl pb-10"
            animate={animation}
          >
            We give <motion.span className="text-cool-white">life</motion.span>{" "}
            <br />
            to ideas!
          </motion.h2>
          <motion.p className="text-cool-white text-2xl lg:text-3xl pb-10">
            And create sustainable digital products with a{" "}
            <motion.span className="story">story!</motion.span>
          </motion.p>
          <Link
            to="/contact"
            className="text-cool-blue3 text-2xl lg:text-3xl"
            onMouseEnter={handleHover}
            onMouseLeave={handleMouseLeave}
          >
            <p>
              Lets Talk!
              <motion.svg
                animate={isHovered ? { x: 5 } : { x: 0 }}
                className="w-6 h-6 inline ml-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 23 23"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </motion.svg>
            </p>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ServicesIntro;
