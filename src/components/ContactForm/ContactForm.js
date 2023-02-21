import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState(null);
  const form = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_aeinemw",
        "template_dpmihsp",
        form.current,
        "9bUoMycNatiUdnz1i"
      )
      .then(
        (result) => {
          console.log(result.text);
          setFormSubmitted(true);
        },
        (error) => {
          setFormError(true);
          console.log(error.text);
        }
      );
  };

  useEffect(() => {
    if (formSubmitted && form.current) {
      setTimeout(() => {
        form.current.reset();
        setFormSubmitted(false);
      }, 3000);
    }
  }, [formSubmitted]);

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
        delay: 1,
      },
    },
  };

  return (
    <div id="form-container" className="lg:p-5">
      <div className="overflow-hidden">
        <motion.h3
          variants={item}
          className="text-center lg:text-5xl text-5xl mt-10 lg:mt-0 pb-4"
        >
          Get In Touch
        </motion.h3>
      </div>
      {formError && (
        <motion.div
          transition={{ duration: 0.5, delay: 0.5 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <p className="text-center text-lg mt-5 text-[#e63946]">
            Something went wrong! Please try again later.
          </p>
        </motion.div>
      )}
      <motion.div
        transition={{ duration: 0.5, delay: 1 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {formSubmitted ? (
          <motion.div
            transition={{ duration: 0.5, delay: 0.5 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <p className="text-center text-cool-green text-lg lg:mt-40 mt-20 mb-20">
              Thank you for your message! We&apos;ll get back to you shortly!
            </p>
          </motion.div>
        ) : (
          <form method="POST" action="" ref={form} onSubmit={sendEmail}>
            <div className="bg-cool-darker mx-auto rounded-xl max-w-xl">
              <div className="grid grid-cols-1 gap-6 label ">
                <label htmlFor="name" className="block border-b py-2 ">
                  <input
                    id="name"
                    type="text"
                    name="name"
                    className="
                appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none bg-cool-darker uppercase text-cool-beige text-3xl
                  "
                    required="required"
                    placeholder="Name"
                  />
                </label>
                <label htmlFor="email" className="block border-b">
                  <input
                    id="email"
                    type="email"
                    name="email"
                    className="
                appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none bg-cool-darker text-cool-beige   uppercase text-3xl
                  "
                    placeholder="Email"
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                    required="required"
                  />
                </label>
                <label htmlFor="phone" className="block border-b">
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="
                appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none bg-cool-darker text-cool-beige   uppercase text-3xl
                  "
                    placeholder="Phone"
                    required="required"
                  />
                </label>
                <label htmlFor="company" className="block border-b">
                  <input
                    id="company"
                    name="company"
                    type="text"
                    className="
                appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none bg-cool-darker text-cool-beige   uppercase text-3xl
                  "
                    placeholder="Company"
                    required="required"
                  />
                </label>

                <label className="block border-b">
                  <textarea
                    id="message"
                    name="message"
                    className="
                appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none bg-cool-darker text-xl
                  "
                    rows="5"
                    required="required"
                    placeholder="Tell us a little more about your cool project!"
                  ></textarea>
                </label>
                <div className=" text-center">
                  <motion.button
                    type="submit"
                    className="uppercase text-lg font-bold tracking-wide md:w-2/5 w-3/5 p-3 rounded-xl  text-cool-beige hover:text-cool-black hover:bg-cool-white border hover:border-0 border-[#444]"
                    whileHover={{
                      scale: 1.1,
                    }}
                    whileTap={{
                      scale: 0.9,
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    Send
                  </motion.button>
                </div>
              </div>
            </div>
          </form>
        )}
      </motion.div>
    </div>
  );
};

export default ContactForm;
