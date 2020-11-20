import styled from "styled-components";

import { TextColor } from './colors';

export const Image = styled.img`
  width: 10em;
  height: 10em;
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
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

export const MainContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: ${TextColor.BACKGROUND_COLOR};
  height: 98vh;

  @media screen and (max-width: 665px) {
    height: auto;
  }
`;

export const Header = styled.header`
  text-align: center;
  margin-bottom: 1em;
`;

export const EmojiContainer = styled.span`
  margin-left: 10px;
`;