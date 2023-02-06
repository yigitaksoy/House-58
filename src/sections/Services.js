import { useRef } from "react";
import { motion } from "framer-motion";
import { servicesList } from "../data/ServicesList";

const Services = () => {
  const intersectTarget = useRef(null);

  return (
    <motion.div
      id="services"
      className="lg:text-center container mx-auto mb-20 lg:rounded-3xl md:rounded-3xl"
    >
      <motion.div className="lg:w-2/3 md:3/4 mx-auto ">
        <motion.h2
          ref={intersectTarget}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.5 }}
          className="font-black lg:text-4xl text-2xl text-center mt-20 text-cool-white mb-20 services-title"
        >
          * Take a peek into our bag of tricks
        </motion.h2>
      </motion.div>
      <div className="mx-auto p-5">
        {servicesList.map((services, index) => (
          <motion.div
            key={index}
            className="flex flex-wrap pt-10 pb-10 items-center glow md:flex-row-reverse"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <motion.div
              key={services.id}
              className="mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
              }}
              viewport={{ once: true }}
              transition={{
                ease: "easeInOut",
                duration: 0.5,
              }}
            >
              <motion.h3 className="font-black lg:text-8xl text-4xl text-center xl md:text-4xl md:text-center uppercase text-cool-white">
                {services.title}
              </motion.h3>
              <div className="max-w-screen-xl mx-auto text-sm flex flex-col items-center">
                <div className="py-5 mx-auto text-center lg:pl-40 lg:pr-40">
                  <motion.p className="text-cool-white text-xl lg:text-2xl  md:text-lg mx-auto mb-5">
                    {services.description}
                  </motion.p>
                  <motion.div className="mt-5 lg:mt-10">
                    <motion.ul className="text-cool-white list-disc  text-xl lg:text-xl md:text-lg mb-5 flex flex-wrap lg:flex-row lg:-mx-5">
                      {services.details &&
                        services.details.map((detail, index) => (
                          <motion.li
                            className={`text-cool-white text-xl list-inside marker:text-cool-blue lg:text-2xl md:text-lg mb-5 w-full lg:w-1/2 lg:px-5 ${
                              index % 2 === 0 ? "lg:pr-5" : "lg:pl-5"
                            }`}
                            key={index}
                          >
                            {detail.option}
                          </motion.li>
                        ))}
                    </motion.ul>
                  </motion.div>
                </div>
              </div>
              <hr className="border-1 mx-auto w-1/2 services-border" />
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Services;
