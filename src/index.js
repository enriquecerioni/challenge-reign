import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EntitiesContext from "./context/EntitiesContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <EntitiesContext>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<App />} />
      </Routes>
    </BrowserRouter>
  </EntitiesContext>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();