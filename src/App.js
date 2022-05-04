import { AnimatePresence } from "framer-motion";
import { BrowserRouter } from "react-router-dom";
import AnimatedRoutes from "./components/AnimatedRoutes/AnimatedRoutes";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <BrowserRouter>
      <AnimatePresence>
        <Navbar />
      </AnimatePresence>
      <AnimatePresence>
        <AnimatedRoutes />
      </AnimatePresence>
    </BrowserRouter>
  );
}

export default App;
