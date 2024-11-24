import React from "react";
import { Navigate } from "react-router-dom";

const isAuthenticated = () => {
  return localStorage.getItem("authenticated") === "true";
};

const ProtectedRoute = ({ component: Component }) => {
  return isAuthenticated() ? <Component /> : <Navigate to="/" />;
};

export default ProtectedRoute;
