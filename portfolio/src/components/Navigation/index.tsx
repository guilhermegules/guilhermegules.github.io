import React from "react";
import { FiCode, FiCoffee } from "react-icons/fi";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";

import { Nav, NavItemList, NavItem } from "../../styles/NavigationStyle";
import MainContent from "../MainContent";
import Skills from "../Skills";

const Navigation = () => (
  <Router>
    <Nav>
      <NavItemList>
        <Link to="/">
          <NavItem>
            <FiCoffee />
            About me
          </NavItem>
        </Link>
        <Link to="/skills">
          <NavItem>
            <FiCode />
            Skills
          </NavItem>
        </Link>
      </NavItemList>
    </Nav>

    <Switch>
      <Route exact path="/">
        <MainContent />
      </Route>
      <Route path="/skills">
        <Skills />
      </Route>
    </Switch>
  </Router>
);

export default Navigation;
