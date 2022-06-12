import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";

// PAGES IMPORT
import Index from "./pages/Index";
import Error from "./pages/Error";
import Password from "./pages/Password";
import Signup from "./pages/Signup";
import Homepage from "./pages/user/Homepage";

function App() {
  return (
    <div className="App">
      <Routes>
        {/* AUTH ROUTES */}
        <Route exact path="/" element={<Index />} />

        {/* FORGOT PASSWORD ROUTE */}
        <Route exact path="/signup" element={<Signup />} />

        {/* FORGOT PASSWORD ROUTE */}
        <Route exact path="/forgotPassword" element={<Password />} />

        {/* ACCOUNT HOMPAGE ROUTE */}
        <Route exact path="/user" element={<Homepage />} />

        {/* 404 PAGE ROUTE */}
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
