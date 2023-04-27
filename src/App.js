// @ts-nocheck
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Login from "./components/Login";
// import ProtectedRoute from "./route/ProtectedRoute"; //? to do:
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login/" element={<Login />} />
        {/* <Route > */}
        {/* <ProtectedRoute path="dashboard/" element={<Dashboard />} /> */}
        <Route path="/dashboard/" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
