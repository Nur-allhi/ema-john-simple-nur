import React, { useContext } from "react";
import { Redirect, Route } from "react-router";
import { UserContext } from "../../App";

const PrivateRoute = ({ children, ...rest }) => {
  const [logedInUser, setLogedInUser] = useContext(UserContext);

  return (
    <Route
      {...rest}
      render={({ location }) =>
        logedInUser.email || sessionStorage.getItem("idToken") ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
