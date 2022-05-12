import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Buildings from "../assets/images/buildings.png";
import ReactGA from "react-ga";

ReactGA.initialize("UA-215804368-1");

const Footer = () => {
  const handleLetsTalk = () => {
    ReactGA.event({
      category: "Landing Page",
      action: "footer_letsTalk",
      label: "Footer Lets Talk button clicked",
      value: 1,
    });
  };

  const handleSendEmail = () => {
    ReactGA.event({
      category: "Landing Page",
      action: "footer_sendEmail",
      label: "Footer email button clicked",
      value: 1,
    });
  };

  const handleLinkedIn = () => {
    ReactGA.event({
      category: "Landing Page",
      action: "footer_LinkedIn",
      label: "Footer LinkedIn button clicked",
      value: 1,
    });
  };

  const float = {
    initial: {
      y: 0,
    },
    float: {
      y: -10,
    },
  };

  return (
    <div id="footer" className="lg:h-screen h-screen md:h-[80vh]">
      <div className="container mx-auto grid grid-cols-1 lg:ml-28 p-10">
        <motion.div>
          <motion.h2
            className="lg:text-6xl md:grid md:grid-cols-2 md:text-5xl font-black text-4xl lg:pt-16 pt-20"
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
            }}
            transition={{
              ease: "easeInOut",
              duration: 0.5,
              delay: 0.5,
            }}
          >
            Starting a new project or want to collaborate with us?
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
            }}
            transition={{
              ease: "easeInOut",
              duration: 0.5,
              delay: 0.5,
            }}
          >
            <motion.div
              className="mt-20"
              variants={float}
              animate="float"
              transition={{
                ease: "easeInOut",
                repeat: Infinity,
                duration: 2,
                repeatType: "reverse",
              }}
            >
              <Link
                to="/contact"
                onClick={handleLetsTalk}
                className="lg:text-4xl text-3xl mt-10 font-black text-cool-white"
              >
                Lets Talk!
                <svg
                  className="w-6 h-6 inline ml-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </Link>
            </motion.div>
          </motion.div>
          <motion.div
            className="lg:mt-32 mt-32 flex"
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
            }}
            transition={{
              ease: "easeInOut",
              duration: 0.5,
              delay: 0.5,
            }}
          >
            <div className="pt-1 pr-5">
              <img src={Buildings} alt="buildings" className="w-12 h-12" />
            </div>
            <div className="grid-rows-3 grid-flow-col">
              <div className="col-span-2">
                <a
                  href="mailto:hello@house58.nl"
                  alt="mail"
                  className="text-xl font-black hover:text-cool-beige transition duration-300"
                  onClick={handleSendEmail}
                >
                  {" "}
                  hello@house58.nl
                </a>
              </div>

              <div className="col-span-2">
                <h3>
                  {" "}
                  <a
                    href="https://www.linkedin.com/company/house-58-digital/"
                    alt="linkedin"
                    rel="noopener noreferrer"
                    target="_blank"
                    className="text-xl font-black hover:text-cool-beige transition duration-300"
                    onClick={handleLinkedIn}
                  >
                    Linkedin
                  </a>
                </h3>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
      <div className="relative lg:mt-12 mt-20 text-center">
        <p className="font-black text-cool-white absolute bottom-3 right-0 left-0 ">
          &copy; {new Date().getFullYear()} - House 58 Digital.
        </p>
      </div>
    </div>
  );
};

export default Footer;
