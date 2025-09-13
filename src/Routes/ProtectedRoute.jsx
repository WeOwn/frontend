// import React from "react";
// import { Route, Navigate } from "react-router-dom";
// import useAuthentication from "./useAuthentication";

// const ProtectedRoute = ({ element, allowedRoles = [], ...rest }) => {
//   const { authenticated, userRole } = useAuthentication();

//   const isAllowed =allowedRoles.length === 0 || allowedRoles.includes(userRole);

//   return authenticated && isAllowed ? (
//     <Route {...rest} element={element} />
//   ) : (
//     <Navigate to="/login" replace />
//   );
// };

// export default ProtectedRoute;

import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

import { useSelector } from "react-redux";

const ProtectedRoute = () => {
  const navigate = useNavigate();
  const isLoggedIn = useSelector((store) => store.user.isLoggedIn);

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    }
  });

  return isLoggedIn ? <Outlet /> : null;
};

export default ProtectedRoute;
