import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";

const marqueeText = "Contact".repeat(5);

const animations = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    opacity: 0,
  },
};

const Contact = () => {
  return (
    <motion.div
      variants={animations}
      initial="hidden"
      animate="visible"
      exit="exit"
      id="contact"
      className="lg:h-[85vh] h-screen"
    >
      <motion.div
        variants={animations}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <Marquee
          speed="20"
          gradient={false}
          direction="left"
          pauseOnHover={true}
        >
          <motion.h1 className=" font-black lg:text-9xl text-5xl text-center overflow-hidden lg:pt-10 pt-20">
            {marqueeText}
          </motion.h1>
        </Marquee>
      </motion.div>
      <motion.div className="">
        <motion.div className="text-center">
          <p className="font-black absolute bottom-5 right-0 left-0 text-cool-white">
            &copy; {new Date().getFullYear()} - House 58 Digital.
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Contact;
