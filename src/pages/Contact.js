import { useEffect } from "react";
import { motion } from "framer-motion";
import ContactForm from "../components/ContactForm/ContactForm";
import ReactGA from "react-ga";

ReactGA.initialize("UA-215804368-1");

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

const item = {
  hidden: {
    y: "200%",
    transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 1 },
  },
  visible: {
    y: 0,
    transition: {
      ease: [0.455, 0.03, 0.515, 0.955],
      duration: 1,
      delay: 0.6,
    },
  },
};

const Contact = () => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  const handleSendEmail = () => {
    ReactGA.event({
      category: "Contact Page",
      action: "send_email",
      label: "Send Email Clicked!",
      value: 1,
    });
  };

  const handleLinkedIn = () => {
    ReactGA.event({
      category: "Contact Page",
      action: "linkedin",
      label: "Redirected to LinkedIn",
      value: 1,
    });
  };

  return (
    <motion.div
      variants={animations}
      initial="hidden"
      animate="visible"
      exit="exit"
      id="contact"
      className="lg:h-[85vh] h-screen mt-5 lg:mt-0"
    >
      <div className="flex flex-wrap overflow-hidden">
        <motion.div
          transition={{ duration: 1, delay: 0.2 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="w-full lg:w-1/2 xl:w-1/2 lg:p-10 p-5 md:p-10"
        >
          <motion.div className=" lg:p-10 md:p-10 pt-20 md:pt-2 lg:pt-20 overflow-hidden">
            <motion.h1 className="text-cool-white lg:text-4xl text-2xl">
              If you’re interested in working with us, or collaborating on a
              project, we’d love to hear from you!
            </motion.h1>
          </motion.div>

          <motion.div className="lg:p-10 pt-10 md:p-10 md:pt-20">
            <div className="overflow-hidden">
              <motion.p
                variants={item}
                className=" email text-3xl overflow-hidden"
              >
                Dont like forms? Send us an email!
              </motion.p>
            </div>
            <div className="overflow-hidden">
              <motion.p onClick={handleSendEmail} variants={item}>
                <a
                  href="mailto:hello@house58.nl"
                  alt="mail"
                  className="text-xl font-black text-cool-beige transition duration-300 hover:text-cool-blue overflow-hidden"
                >
                  {" "}
                  hello@house58.nl
                </a>
              </motion.p>
            </div>
            <div className="overflow-hidden">
              <motion.h3
                onClick={handleLinkedIn}
                variants={item}
                className="pt-10"
              >
                {" "}
                <a
                  href="https://www.linkedin.com/company/house-58-digital/"
                  alt="linkedin"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="text-xl font-black text-cool-beige transition duration-300 hover:text-cool-blue overflow-hidden"
                >
                  Linkedin
                </a>
              </motion.h3>
            </div>
          </motion.div>
        </motion.div>
        <div className="w-full overflow-hidden lg:w-1/2 xl:w-1/2 p-4">
          <ContactForm />
        </div>
      </div>
      <div className="text-center relative mt-32 lg:hidden">
        <p className="font-black absolute bottom-5 right-0 left-0 text-cool-white">
          &copy; {new Date().getFullYear()} - House 58 Digital.
        </p>
      </div>
    </motion.div>
  );
};

export default Contact;
