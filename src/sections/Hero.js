import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
import AnimatedText from "../components/AnimatedText/AnimatedText";
import Windmill from "../assets/svgs/windmill.svg";

const Hero = ({ marqueeText, locationText }) => {
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
      className="container lg:h-[90vh] h-[80vh] xs:pt-20 w-screen "
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div>
        <motion.div initial="hidden" animate={"visible"} variants={container}>
          <motion.div className="split-container">
            {placeholderText.map((item, index) => {
              return <AnimatedText {...item} key={index} />;
            })}
          </motion.div>
        </motion.div>
      </motion.div>
      <motion.div
        className="w-screen marquee-bg"
        transition={{ duration: 1, delay: 1 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <Marquee
          speed="170"
          gradient={false}
          direction="left"
          pauseOnHover={false}
          delay="2"
        >
          <h1 className="font-black lg:text-[8rem] md:text-[6rem] text-7xl overflow-hidden lg:pt-1 lg:py-5 pt-5 py-5 text-center">
            {marqueeText}
          </h1>
        </Marquee>
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
