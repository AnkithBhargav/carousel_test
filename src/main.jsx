// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css"; // Import your CSS file here
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SecondPage from "./components/pages/SecondPage";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/second" element={<SecondPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
