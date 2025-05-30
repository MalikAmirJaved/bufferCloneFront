import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { Context } from "../main";

const ProtectedRoutes = ({ children }) => {
  const { isAuthenticated } = useContext(Context);

  if (!isAuthenticated) {
    return <Navigate to="/auth" replace />;
  }

  return children;
};

export default ProtectedRoutes;
