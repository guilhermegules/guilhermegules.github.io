import styled from "styled-components";

import { Color } from "./colors";

export const Image = styled.img`
  width: 5em;
  height: 5em;
  filter: grayscale(100%);
  transition: 0.3s ease-out;
  cursor: pointer;
  &:hover {
    filter: grayscale(0%);
    transition: 0.3s ease-in;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  background-color: ${Color.LIGHT_BLACK};
  padding: 15px;

  border-radius: 15px;
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
`;

export const MainContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: ${Color.BACKGROUND_COLOR};
  height: calc(100vh - 7vh);

  @media screen and (max-width: 665px) {
    height: auto;
  }
`;

export const Header = styled.header`
  text-align: center;
  margin-bottom: 1em;
`;
