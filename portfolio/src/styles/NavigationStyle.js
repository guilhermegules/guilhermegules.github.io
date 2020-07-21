import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  width: 100%;
  height: 60px;
  background-color: #222222;
`;

export const NavItemList = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;
  margin: 0;
`;

export const NavItem = styled.a`
  margin-right: 10px;
  padding-left: 10px;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: 0.5s ease-out;
  svg {
    margin-right: 10px;
  }
  &:hover {
    color: #ccc;
    transition: 0.5s ease-in;
  }
`;
