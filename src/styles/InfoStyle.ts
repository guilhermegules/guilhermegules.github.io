import styled from "styled-components";

import { Color } from "./colors";

export const Section = styled.section`
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const RoundedImage = styled.img`
  width: 13em;
  height: 13em;
  border-radius: 50%;
`;

export const Figure = styled.figure`
  border-right: 1.5px solid ${Color.PRIMARY_COLOR};
  padding-right: 40px;
`;

export const AboutMe = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
`;

export const Article = styled.article`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 50%;
  p {
    letter-spacing: 0.2px;
  }
`;

export const TitleContainer = styled.div`
  padding: 10px;
`;
