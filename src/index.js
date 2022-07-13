import React from "react";
import ReactDOM from "react-dom/client";
import CssBaseline from "@mui/material/CssBaseline";
import { BrowserRouter } from "react-router-dom";
import ToggleColorMode from "./components/ToggleColorMode";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <CssBaseline /> {/* normalize.css */}
      <ToggleColorMode /> {/* DarkMode Middleware */}
    </BrowserRouter>
  </React.StrictMode>
);
