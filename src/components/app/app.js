import React from "react";
import { MainPage, CartPage } from "../pages";
import AppHeader from "../app-header";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Background from "./food-bg.jpg";

// 111  2 zadanij asdelani

const App = () => {
  return (
    <div
      style={{ background: `url(${Background}) center center/cover no-repeat` }}
      className="app"
    >
      <Router>
        <AppHeader total={50} />

        <Switch>
          <Route path="/menu" component={MainPage} exact>
            {MainPage}
          </Route>
          <Route path="/cart" component={CartPage} exact></Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
