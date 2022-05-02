import { render } from "react-dom";
import { StrictMode } from "react";
import "./assets/css/style.css";
import App from "./App";

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);
