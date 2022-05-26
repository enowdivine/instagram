import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";

// PAGES IMPORT
import Login from "./auth/Login";
import Error from "./pages/Error";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div className="App">
      <Routes>
        {/* AUTH ROUTES */}
        <Route exact path="/" element={<Login />} />

        {/* DASHBOARD ROUTE */}
        <Route exact path="/dashboard" element={<Dashboard />} />

        {/* 404 PAGE ROUTE */}
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
