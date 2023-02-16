import { useRef } from "react";
import { motion } from "framer-motion";
import AnimatedText from "../components/AnimatedText/AnimatedText";
import Windmill from "../assets/svgs/windmill.svg";
import InteractiveMarquee from "../components/InteractiveMarquee/InteractiveMarquee";

const Hero = ({ locationText }) => {
  const intersectTarget = useRef(null);

  const placeholderText = [{ type: "heading2", text: "HOUSE OF" }];

  const container = {
    visible: {
      transition: {
        staggerChildren: 0.025,
      },
    },
  };

  return (
    <motion.div
      id="home"
      className="container lg:h-[90vh] h-[80vh] xs:pt-20 w-screen"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div ref={intersectTarget}>
        <motion.div initial="hidden" animate={"visible"} variants={container}>
          <motion.div className="split-container">
            {placeholderText.map((item, index) => {
              return <AnimatedText {...item} key={index} />;
            })}
          </motion.div>
        </motion.div>
      </motion.div>
      <motion.div
        className="w-screen overflow-hidden"
        transition={{ duration: 1, delay: 1 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <InteractiveMarquee />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 2,
        }}
        className="lg:text-[1.5rem] text-[1rem] pl-10 pt-20 lg:pt-7 justify-end flex flex-row"
      >
        <motion.p className="lg:pt-16 amsterdam absolute bottom-1 right-4">
          {locationText}
        </motion.p>
      </motion.div>
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 2,
          delay: 1,
        }}
      >
        <motion.div
          transition={{ duration: 1, delay: 2.2 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <motion.img
            src={Windmill}
            alt="windmill"
            width={100}
            className="opacity-50 hover:opacity-100 transition duration-300 bottom-1 right-0 h-32 w-32 absolute"
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Hero;
