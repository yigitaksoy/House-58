import { useEffect } from "react";
import { motion } from "framer-motion";
import ServicesIntro from "../sections/ServicesIntro";
import Hero from "../sections/Hero";
import TechStack from "../sections/TechStack";
import Services from "../sections/Services";
import Footer from "../sections/Footer";
import ReactGA from "react-ga";

ReactGA.initialize("UA-215804368-1");

const Landing = () => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  const data = {
    Hero: {
      actionText: "HOUSE OF",
      description:
        "House 58 is a digital agency that lives where design, technology, and experience collide. We are obsessed with creativity — challenging what is, while defining what comes next.",
      marqueeText:
        "Digital Solutions/Interactive Design/User Experience/Web Development/Ecommerce/Backend Development/",
      locationText: "* Located in the heart of Amsterdam",
    },
  };

  const animations = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.2,
      },
    },
    exit: {
      opacity: 0,

      transition: { duration: 0.2 },
    },
  };

  return (
    <motion.div
      variants={animations}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <Hero
        actionText={data.Hero.actionText}
        description={data.Hero.description}
        marqueeText={data.Hero.marqueeText}
        locationText={data.Hero.locationText}
      />
      <ServicesIntro />
      <TechStack />
      <Services />
      <Footer />
    </motion.div>
  );
};

export default Landing;
