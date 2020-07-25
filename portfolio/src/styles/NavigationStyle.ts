import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  width: 100%;
  height: 60px;
  background-image: radial-gradient( circle 939px at 94.7% 50%,  rgba(0,178,169,1) 0%, rgba(0,106,101,1) 76.9% );
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
  transition: 0.5s ease-out;
  color: #f4f4f4;
  svg {
    margin-right: 10px;
  }
  &:hover {
    color: #ccc;
    transition: 0.5s ease-in;
  }
`;
