import { motion } from "framer-motion";
import { servicesList } from "../data/ServicesList";

const Services = () => {
  return (
    <motion.div
      id="services"
      className="lg:text-center container mx-auto mb-20 lg:rounded-3xl md:rounded-3xl"
    >
      <motion.div className="lg:w-2/3 md:3/4 mx-auto ">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.5 }}
          className=" font-black lg:text-7xl text-5xl text-center pt-20 text-cool-white mb-20"
        >
          What we do
        </motion.h2>
      </motion.div>
      <div className="mx-auto p-5">
        {servicesList.map((services) =>
          services.id % 2 != 0 ? (
            <motion.div
              key={services.id}
              className="flex flex-wrap pt-10 pb-10 items-center glow md:flex-row-reverse mb-20 lg:shadow-2xl rounded-3xl"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.7 }}
            >
              <motion.div className="w-full md:w-1/2 lg:w-5/12 mr-auto md:mr-auto">
                <img
                  className="w-full mx-auto mb-12 md:float-right max-w-xs lg:max-w-sm"
                  src={services.img}
                  alt={services.title}
                />
              </motion.div>
              <motion.div
                key={services.id}
                className="w-full md:w-1/2 lg:pl-1 mx-auto "
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
                <motion.h3 className="font-black lg:text-5xl pb-8 text-5xl md:text-4xl md:text-center">
                  {services.title}
                </motion.h3>
                <motion.p className="text-cool-white font-black text-xl lg:text-2xl  md:text-lg mx-auto mb-5">
                  {services.description}
                </motion.p>
              </motion.div>
            </motion.div>
          ) : (
            <motion.div
              key={services.id}
              className="flex flex-wrap pt-10 pb-10 items-center md:flex-row-reverse mb-20 "
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.5 }}
            >
              <motion.div className="w-full md:w-1/2 lg:w-5/12 ml-auto md:ml-auto md:order-last">
                <img
                  className="w-full mx-auto mb-12 md:float-left max-w-xs lg:max-w-sm "
                  src={services.img}
                  alt={services.title}
                />
              </motion.div>
              <motion.div
                key={services.id}
                className="w-full md:w-1/2 mx-auto"
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
                <motion.h3 className="font-black lg:text-5xl pb-8 text-5xl md:text-4xl md:text-center">
                  {services.title}
                </motion.h3>
                <motion.p className="text-cool-white font-black text-xl lg:text-2xl  md:text-lg mx-auto mb-5">
                  {services.description}
                </motion.p>
              </motion.div>
            </motion.div>
          )
        )}
      </div>
    </motion.div>
  );
};

export default Services;
