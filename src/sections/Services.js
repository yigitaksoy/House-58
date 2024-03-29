import { useRef, useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { servicesList } from "../data/ServicesList";

const Accordion = ({ children, expanded }) => {
  const controls = useAnimation();

  const variants = {
    expanded: { opacity: 1, height: "auto" },
    collapsed: { opacity: 0, height: 0 },
  };

  useEffect(() => {
    if (expanded) {
      controls.start("expanded");
    } else {
      controls.start("collapsed");
    }
  });

  return (
    <motion.div
      initial="collapsed"
      className="z-0 overflow-hidden"
      animate={controls}
      transition={{ duration: 0.3 }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

const Trigger = ({ expanded, onClick, showLabel, hideLabel }) => {
  return (
    <button
      onClick={onClick}
      className="lg:text-2xl text-xl text-center text-cool-white  services-title lg:pb-0 pb-5"
    >
      <span>* </span>
      {expanded ? hideLabel ?? showLabel : showLabel}
    </button>
  );
};

Accordion.Trigger = Trigger;

const Services = () => {
  const intersectTarget = useRef();
  const [currentExpanded, setCurrentExpanded] = useState({});
  const handleClick = (id) => {
    setCurrentExpanded((prevExpanded) => {
      let newExpanded = { ...prevExpanded };
      newExpanded[id] = !newExpanded[id];
      return newExpanded;
    });
  };

  return (
    <motion.div
      id="services"
      className="lg:text-center container mx-auto mb-20 lg:mt-20"
    >
      <motion.div className="lg:w-2/3 md:3/4 mx-auto ">
        <motion.h2
          ref={intersectTarget}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.5 }}
          viewport={{ once: true }}
          className="font-black lg:text-4xl text-2xl text-center mt-20 text-cool-white mb-10 services-title story"
        >
          Take a peek into our bag of tricks
        </motion.h2>
      </motion.div>
      <div className="mx-auto p-5">
        {servicesList.map((services, index) => (
          <motion.div
            key={index}
            className="flex flex-wrap lg:pt-10 lg:pb-10 pb-8 items-center md:flex-row-reverse"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.div
              key={services.id}
              className="mx-auto"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <motion.h3 className="font-black lg:text-8xl text-4xl text-center md:text-4xl md:text-center uppercase text-cool-white">
                {services.title}
              </motion.h3>
              <div className="max-w-screen-xl mx-auto lg:text-sm flex flex-col items-center">
                <Accordion expanded={currentExpanded[services.id]}>
                  <div className=" mx-auto text-center lg:pl-40 lg:pr-40">
                    <motion.p
                      className={`text-cool-white text-xl lg:text-2xl  md:text-lg mx-auto mb-5 ${
                        currentExpanded ? "mt-10" : "mt-0"
                      }`}
                    >
                      {services.description}
                    </motion.p>
                    <motion.div className="mt-5 lg:mt-10">
                      <motion.ul className="text-cool-white list-disc  text-xl lg:text-xl md:text-lg mb-5 flex flex-wrap lg:flex-row lg:-mx-5">
                        {services.details &&
                          services.details.map((detail, index) => (
                            <motion.li
                              className={`text-cool-white text-xl list-inside marker:text-cool-blue lg:text-2xl md:text-lg mb-5 w-full ${
                                services.details.length === 1
                                  ? "lg:w-full text-center"
                                  : `lg:w-1/2 lg:px-5 ${
                                      index % 2 === 0 ? "lg:pr-5" : "lg:pl-5"
                                    }`
                              }`}
                              key={index}
                            >
                              {detail.option}
                            </motion.li>
                          ))}
                      </motion.ul>
                    </motion.div>
                  </div>
                </Accordion>
                <Accordion.Trigger
                  expanded={currentExpanded[services.id]}
                  onClick={() => handleClick(services.id)}
                  showLabel="show me more"
                  hideLabel="show me less"
                />
              </div>
              <hr className="border-1 mx-auto w-1/2 services-border lg:mt-20 mt-5" />
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Services;
