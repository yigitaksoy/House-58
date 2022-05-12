import { useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import ReactGA from "react-ga";

ReactGA.initialize("UA-215804368-1");

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    ReactGA.event({
      category: "Contact Page",
      action: "form_submit",
      label: "New Contact Form Project Request",
      value: 1,
    });

    emailjs
      .sendForm(
        "service_5pv2cnh",
        "template_hhwy766",
        form.current,
        "YAt-orSZb9iqvplwF"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
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
      <motion.div
        transition={{ duration: 0.5, delay: 1 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <form method="POST" action="" ref={form} onSubmit={sendEmail}>
          <div className="bg-cool-black mx-auto rounded-xl max-w-xl">
            <div className="grid grid-cols-1 gap-6 label ">
              <label htmlFor="name" className="block border-b py-2 ">
                <input
                  id="name"
                  type="text"
                  name="name"
                  className="
                appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none bg-cool-black uppercase text-cool-beige text-3xl
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
                appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none bg-cool-black text-cool-beige   uppercase text-3xl
                  "
                  placeholder="Email"
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                  required="required"
                />
              </label>
              <label htmlFor="phone" className="block border-b">
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  className="
                appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none bg-cool-black text-cool-beige   uppercase text-3xl
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
                appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none bg-cool-black text-cool-beige   uppercase text-3xl
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
                appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none bg-cool-black text-xl
                  "
                  rows="5"
                  required="required"
                  placeholder="Tell us a little more about your cool project!"
                ></textarea>
              </label>
              <div className=" text-center">
                <button
                  type="submit"
                  className="uppercase text-lg font-bold tracking-wide lg:w-2/5 p-3 rounded-xl transition duration-300 text-cool-beige border hover:border-0 border-[#444]"
                >
                  Let’s Talk!
                </button>
              </div>
            </div>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default ContactForm;
