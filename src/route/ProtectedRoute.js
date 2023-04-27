import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { Route, Navigate } from "react-router-dom";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const { user } = useSelector((state) => state.userAuth);
  return (
    <Fragment>
      <Route
        {...rest}
        render={(props) => {
          return user ? (
            <Component {...props} />
          ) : (
            <Navigate replace to="login/" />
          );
        }}
      />
    </Fragment>
  );
};

export default ProtectedRoute;
