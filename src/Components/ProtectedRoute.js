import React from "react";
import { Redirect, Route } from "react-router-dom";

//This is a HOC which takes a component and return another component,
//This checks whether the user is logged in or not and render the given component if user logged in.
const ProtectedRoute = ({ component: Component, user, ...rest }) => {
  //Assignment of new variable name is happening hear, de-structure component from prop obj and assign new name Component
  console.log('ProtectedRoute',{...rest})
  return (
    <Route
      {...rest}//ProtectedRoute ekata ewana path exact kiyana data methanata watenawa
      render={(props) => {
        if (user) {
          return <Component {...rest} {...props} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: "/unauthorized",
                state: {
                  //from: props.location,
                },
              }}
            />
          );
        }
      }}
    />
  );
};

export default ProtectedRoute;
