import styled from "styled-components";

import { Color } from "./colors";

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  width: 100%;
  height: 7vh;
  background: #393939;
`;

export const NavItemList = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;
  margin: 0;
  a {
    text-decoration: none;
  }
`;

export const NavItem = styled.li`
  margin-right: 10px;
  padding-left: 10px;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: 0.2s ease-out;
  color: ${Color.PRIMARY_COLOR};
  svg {
    margin-right: 10px;
  }
  &:hover {
    color: ${Color.NAV_HOVER_PRIMARY_COLOR};
    transition: 0.2s ease-in;
  }
`;
