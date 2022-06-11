import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";

// PAGES IMPORT
import Index from "./pages/Index";
import Error from "./pages/Error";

function App() {
  return (
    <div className="App">
      <Routes>
        {/* AUTH ROUTES */}
        <Route exact path="/" element={<Index />} />

        {/* 404 PAGE ROUTE */}
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
