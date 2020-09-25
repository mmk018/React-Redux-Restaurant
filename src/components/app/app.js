import React from "react";
import { MainPage, CartPage } from "../pages";
import AppHeader from "../app-header";
import WithRestoService from "../hoc";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Background from "./food-bg.jpg";

const App = ({ RestoService }) => {
  console.log(RestoService.getMenuItems());

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

export default WithRestoService()(App);
