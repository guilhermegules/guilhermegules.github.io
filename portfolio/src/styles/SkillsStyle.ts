import styled from "styled-components";

export const Image = styled.img`
  width: 10em;
  height: 10em;
  filter: grayscale(100%);
  transition: 0.2s;
  cursor: pointer;
  &:hover {
    filter: grayscale(0%);
    transition: 0.2s;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Container = styled.section`
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
  background-color: rgba(0, 0, 0, 0.7);
  height: 90vh;
`;

export const Header = styled.header`
  text-align: center;
  margin-bottom: 1em;
`;
