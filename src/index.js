import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css"
import LoginPage from "./auth/presentation/pages/LoginPage";
import HomePage from "./data_management/presentation/page/HomePage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/" element={<Navigate to="/home" />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
