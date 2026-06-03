import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.jsx";
import "./animations.css";
import "./animateOnScroll";
import "./cursor.css";
import "./cursor";
import "./autoAnimate";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
