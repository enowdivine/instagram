import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";

// PAGES IMPORT
import Login from "./auth/Login";
import Error from "./pages/Error";
import Dashboard from "./pages/dashboard";
import Ads from "./pages/ads";
import Users from "./pages/users";
import Institutions from "./pages/institutions";
import Income from "./pages/income";

function App() {
  return (
    <div className="App">
      <Routes>
        {/* AUTH ROUTES */}
        <Route exact path="/" element={<Login />} />

        {/* DASHBOARD ROUTE */}
        <Route exact path="/dashboard" element={<Dashboard />} />

        {/* ADS ROUTE */}
        <Route exact path="/ads" element={<Ads />} />

        {/* USERS ROUTE */}
        <Route exact path="/users" element={<Users />} />

        {/* INSTITUTIONS ROUTE */}
        <Route exact path="/institutions" element={<Institutions />} />

        {/* INCOME ROUTE */}
        <Route exact path="/income" element={<Income />} />

        {/* 404 PAGE ROUTE */}
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
