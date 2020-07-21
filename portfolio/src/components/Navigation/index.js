import React from "react";
import { MdFace, MdCode } from "react-icons/md";

import { Nav, NavItemList, NavItem } from "../../styles/NavigationStyle";

const Navigation = () => (
  <Nav>
    <NavItemList>
      <NavItem>
        <MdFace />
        Sobre mim
      </NavItem>
      <NavItem>
        <MdCode />
        Techs
      </NavItem>
    </NavItemList>
  </Nav>
);

export default Navigation;
