import React from "react";
import ReactDOM from "react-dom/client";
// react-router-dom
import { BrowserRouter } from "react-router-dom";
// CSS File
import App from "./components/App";
// Context
import ContextApiProvider from "./context/ContextApi";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ContextApiProvider>
        <App />
      </ContextApiProvider>
    </BrowserRouter>
  </React.StrictMode>
);
