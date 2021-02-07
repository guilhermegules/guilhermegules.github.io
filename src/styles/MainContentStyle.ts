import styled from "styled-components";

import { Color } from "./colors";

export const Main = styled.main`
  height: calc(100vh - 7vh);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: ${Color.BACKGROUND_COLOR};

  @media screen and (max-width: 340px) {
    height: auto;
  }
`;
