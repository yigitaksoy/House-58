import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useViewportScroll } from "framer-motion";
import Logo from "../../assets/images/House-58-Only.png";
import ReactGA from "react-ga";

ReactGA.initialize("UA-215804368-1");

const Navbar = () => {
  const handleHomeRoute = () => {
    ReactGA.event({
      category: "Navbar",
      action: "navbar_home",
      label: "Navigated to Home Page",
      value: 1,
    });
  };

  const handleContactRoute = () => {
    ReactGA.event({
      category: "Navbar",
      action: "navbar_contact",
      label: "Navigated to Contact Page",
      value: 1,
    });
  };
  const lightText =
    "text-cool-white hover:text-cool-blue transition duration-300";

  /** this hook gets the scroll y-axis **/
  const { scrollY } = useViewportScroll();
  /** this hook manages state **/
  const [hidden, setHidden] = useState(false);

  /** this onUpdate function will be called in the `scrollY.onChange` callback **/
  function update() {
    if (scrollY?.current < scrollY?.prev) {
      setHidden(false);
    } else if (scrollY?.current > 100 && scrollY?.current > scrollY?.prev) {
      setHidden(true);
    }
  }

  useEffect(() => {
    return scrollY.onChange(() => update());
  });

  const variants = {
    /** this is the "visible" key and it's correlating styles **/
    visible: { opacity: 1, y: 0 },
    /** this is the "hidden" key and it's correlating styles **/
    hidden: { opacity: 0, y: -25 },
  };

  return (
    <motion.nav
      variants={variants}
      initial={{ opacity: 0 }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ ease: [0.1, 0.25, 0.3, 1], duration: 0.6 }}
      className="sticky top-10 z-50 lg:p-10 flex justify-between items-center h-10 bg-transparent lg:pl-20 lg:pr-20"
      role="navigation"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3 }}
      >
        <Link to="/" onClick={handleHomeRoute}>
          <motion.img
            className="object-fit w-44 h-26 transition duration-300"
            src={Logo}
            alt="logo"
          />
        </Link>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3 }}
        className="md:pr-10 pr-10"
      >
        <Link to="/contact" className={lightText} onClick={handleContactRoute}>
          Contact
        </Link>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
