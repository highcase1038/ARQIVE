import React from "react";
import { Route } from "react-router-dom";
//Redirect if needed
import { connect } from "react-redux";
import NotFoundPage from "../Pages/NotFoundPage";
const PrivateRoute = ({ component: Component, auth, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (auth.isLoading) {
          return <h2>Loading...</h2>;
        } else if (!auth.isAuthenticated) {
          return <NotFoundPage />;
        } else {
          if (auth.user.is_administrator || auth.user.is_moderator) return <Component {...props} />;
          else {
            return <NotFoundPage />;
          }
        }
      }}
    />
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(PrivateRoute);
