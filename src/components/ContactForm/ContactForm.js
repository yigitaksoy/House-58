import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [statusMessage, setStatusMessage] = useState("");

  const form = useRef();

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

          setStatusMessage(
            "Thank you for your message! We'll get back to you shortly!"
          );
        },
        (error) => {
          console.log(error.text);
          setStatusMessage(
            "Oops! There seems to be an issue, please try again!"
          );
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
            <p className="text-cool-bright text-lg">{statusMessage}</p>
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
                  type="tel"
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
                  Send
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
