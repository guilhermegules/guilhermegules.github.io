import styled from "styled-components";

import { TextColor } from './colors';

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  width: 100%;
  height: 7vh;
  background: rgb(49, 176, 105);
  background: linear-gradient(
    100deg,
    rgba(49, 176, 105, 1) 0%,
    rgba(2, 143, 94, 1) 100%
  );
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
  color: ${TextColor.PRIMARY_COLOR};
  svg {
    margin-right: 10px;
  }
  &:hover {
    color: ${TextColor.NAV_HOVER_PRIMARY_COLOR};
    transition: 0.2s ease-in;
  }
`;
