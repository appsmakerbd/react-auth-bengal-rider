import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import Destination from "./component/Destination/Destination";
import Header from "./component/Header/Header";
import Home from "./component/Home/Home";
import Login from "./component/Login/Login";
import PrivateRoute from "./component/PrivateRoute/PrivateRoute";

//Font Awesome Library for individual component use
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";

export const UserContext = createContext();

//Passing fonts using Library
library.add(fab, fas);
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>

            <Route path="/home">
              <Home></Home>
            </Route>

            <Route path="/login">
              <Login></Login>
            </Route>

            <PrivateRoute exact path="/destination/:transportation">
              <Destination></Destination>
            </PrivateRoute>

            <PrivateRoute path="/destination">
              <Destination></Destination>
            </PrivateRoute>
          </Switch>
        </>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
