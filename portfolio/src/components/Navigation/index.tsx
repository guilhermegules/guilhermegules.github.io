import React from "react";
import { MdFace, MdCode } from "react-icons/md";
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
            <MdFace />
            About me
          </NavItem>
        </Link>
        <Link to="/skills">
          <NavItem>
            <MdCode />
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
