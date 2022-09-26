import { useRef } from "react";
import { motion } from "framer-motion";
import { techLogos } from "../data/TechLogos";

const TechStack = () => {
  const intersectTarget = useRef(null);

  return (
    <motion.div
      id="tech-stack"
      className="h-[70vh] md:h-[60vh] mb-24 lg:mb-10 md:mb-1"
    >
      <motion.h2
        ref={intersectTarget}
        className="text-center font-black lg:text-6xl sm: text-4xl text-cool-white mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.5 }}
      >
        Our Tech Stack
      </motion.h2>
      <motion.p
        className="w-full md:w-1/2 mx-auto text-center text-cool-white text-2xl mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.5 }}
      >
        We&apos;ll carefully pair the right frameworks and platforms with your
        business objectives.
      </motion.p>
      <motion.div
        className="flex flex-wrap items-center mt-5 mb-20 justify-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.5 }}
      >
        {techLogos.map((logos) => {
          return (
            <div
              key={logos.id}
              className="w-1/2 md:w-1/3 lg:w-1/6 px-2 py-2 text-center "
            >
              <img
                alt={logos.alt}
                className="opacity-40 hover:opacity-100 mx-auto transition duration-300"
                src={logos.img}
                width={logos.width}
              />
            </div>
          );
        })}
      </motion.div>
    </motion.div>
  );
};

export default TechStack;
