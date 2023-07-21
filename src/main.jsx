import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import Campaign from "./Pages/Campaign/Campaign.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<App />} />
        <Route path="campaign/:name" element={<Campaign />} />
        <Route path="*" element={<div>If page not found it goes here</div>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
