import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Root from "./layout/Root.jsx";
import SmoothScrolling from "./hoc/SmoothScrolling.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SmoothScrolling>
      <Root />
    </SmoothScrolling>
  </React.StrictMode>
);
