import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Root from "./layout/Root.jsx";
import SmoothScrolling from "./hoc/SmoothScrolling.jsx";
import { CursorContextProvider } from "./hoc/CursorContextProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CursorContextProvider>
      <SmoothScrolling>
        <Root />
      </SmoothScrolling>
    </CursorContextProvider>
  </React.StrictMode>
);
