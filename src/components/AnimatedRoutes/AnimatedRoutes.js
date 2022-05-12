import { useLocation, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Landing from "../../pages/Landing";
import Contact from "../../pages/Contact";
import ScrollToTop from "../ScrollToTop";
import ReactGA from "react-ga";

ReactGA.initialize("UA-215804368-1");

const AnimatedRoutes = () => {
  const location = useLocation();

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <AnimatePresence exitBeforeEnter>
      <ScrollToTop />
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Landing />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
