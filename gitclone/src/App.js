import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard"; // ✅ Import Dashboard
import Login from "./components/Login"; // ✅ Import Login

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />  {/* ✅ Add Dashboard Route */}
      </Routes>
    </Router>
  );
}

export default App;
