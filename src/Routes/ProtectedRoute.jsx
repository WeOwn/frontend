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
