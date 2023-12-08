import React from "react";
import ReactDOM from "react-dom/client";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

import LoginPage from "./app/presentation/page/auth/LoginPage";
import HomePage from "./app/presentation/page/home/HomePage";

import store from "./app/presentation/redux/store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/" element={<Navigate to="/login" />} />
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>
);
