import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoute = () => {
  const isAuthenticated = localStorage.getItem("token");

  if (!isAuthenticated) {
    console.log("back to login");

    return <Navigate to="/login" />;
  }

  return <Outlet />;
};
