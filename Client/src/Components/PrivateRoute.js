import React from "react";
import { Route, Navigate } from "react-router-dom";

const PrivateRoute = ({
  component: Component,
  isAuthenticated,
  hasRequiredRole,
  ...rest
}) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticated && hasRequiredRole ? (
        <Component {...props} />
      ) : (
        <Navigate to="/login" />
      )
    }
  />
);

export default PrivateRoute;
