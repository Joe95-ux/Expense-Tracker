import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// Importing the Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import { BudgetsProvider } from "./contexts/BudgetsContext";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <BudgetsProvider>
        <App />
      </BudgetsProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
