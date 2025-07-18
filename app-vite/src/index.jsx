/**
=========================================================
* Material Dashboard 2 React - v2.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
import "regenerator-runtime/runtime";

import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";

// Material Dashboard 2 React Context Provider
import { MaterialUIControllerProvider } from "./context/index.jsx";
import "assets/css/custom-scrollbar.css";
import "./index.css";

const container = document.getElementById("app");
const root = createRoot(container);
import "assets/css/custom-kanban.css";

root.render(
  <BrowserRouter>
    <MaterialUIControllerProvider>
      <App />
    </MaterialUIControllerProvider>
  </BrowserRouter>
);
