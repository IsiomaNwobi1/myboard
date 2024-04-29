import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoute = ({ component }) => {
  const isAuthenticated = localStorage.getItem("token");
  console.log(isAuthenticated);

  // isAuthenticated ? <Component /> : <Navigate to="/login" />;

  if (!isAuthenticated) {

    return <Navigate to="/login" />;

  }

  return <Outlet />;
};
