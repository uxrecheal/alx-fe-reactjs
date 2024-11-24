import React from "react";
import { Navigate, Outlet } from "react-router-dom";

// Simulate authentication
const useAuth = () => {
  // Replace this logic with your actual authentication logic
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";
  return isAuthenticated;
};

const ProtectedRoute = () => {
  const isAuthenticated = useAuth();

  return isAuthenticated ? <Outlet /> : <Navigate to="/" replace />;
};

export default ProtectedRoute;
