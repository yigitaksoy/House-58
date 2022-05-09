import { motion } from "framer-motion";
import ContactForm from "../components/ContactForm/ContactForm";

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
      className="lg:h-[85vh] h-screen mt-5 lg:mt-0"
    >
      <div className="flex flex-wrap overflow-hidden">
        <motion.div
          transition={{ duration: 1, delay: 0.5 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="w-full overflow-hidden lg:w-1/2 xl:w-1/2 lg:p-10 p-5 md:p-10"
        >
          <div className=" lg:p-10 md:p-10 pt-20 md:pt-2 lg:pt-20">
            <h1 className="text-cool-white lg:text-4xl text-2xl">
              If you’re interested in working with us, or collaborating on a
              project, we’d love to hear from you!
            </h1>
          </div>
          <div className="lg:p-10 pt-10 md:p-10 md:pt-20">
            <p className="email text-3xl">Dont like forms? Send us an email!</p>
            <a
              href="mailto:hello@house58.nl"
              alt="mail"
              className="text-xl font-black text-cool-beige transition duration-300 hover:text-cool-blue"
            >
              {" "}
              hello@house58.nl
            </a>
            <h3 className="pt-10">
              {" "}
              <a
                href="https://www.linkedin.com/company/house-58-digital/"
                alt="linkedin"
                rel="noopener noreferrer"
                target="_blank"
                className="text-xl font-black text-cool-beige transition duration-300 hover:text-cool-blue "
              >
                Linkedin
              </a>
            </h3>
          </div>
        </motion.div>
        <motion.div
          transition={{ duration: 1, delay: 0.7 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="w-full overflow-hidden lg:w-1/2 xl:w-1/2 p-4"
        >
          <ContactForm />
        </motion.div>
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
