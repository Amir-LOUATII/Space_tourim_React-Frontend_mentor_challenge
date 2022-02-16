import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { SidebarContextProvider } from "./context/SidebarContext";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <SidebarContextProvider>
        <App />
      </SidebarContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
