// @ts-nocheck
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import React from "react";
import Login from "./components/Login";
import ProtectedRoute from "./route/ProtectedRoute"; //? to do:
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login/" replace />} />
        <Route path="/login/" element={<Login />} />
        <Route
          exact
          path="/dashboard/"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
