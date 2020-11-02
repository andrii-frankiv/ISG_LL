import { inject, observer } from "mobx-react";
import React, {Component} from "react";
import { Redirect, Route, useLocation } from "react-router-dom";

const Content = inject("../stores/mainStore")(observer(({ component: Home, mainStore, ...rest }) => {
  const location = useLocation();
  const { isAuthenticated } = mainStore;

  return (
    <div>
        <h1>Welcome to Sign Up page </h1>   

       
    </div>
  );
}));

export default Content;
