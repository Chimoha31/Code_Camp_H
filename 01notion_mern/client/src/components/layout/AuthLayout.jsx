import React from "react";
import { Outlet } from "react-router-dom";

// Resister & Login 共通design
const AuthLayout = () => {
  return (
    <div>
      AuthLayout
      <Outlet />
    </div>
  );
};

export default AuthLayout;
