import styled from "styled-components";

import { Color } from "./colors";

export const Container = styled.footer`
  a {
    color: ${Color.PRIMARY_COLOR};
  }
  svg {
    margin-right: 15px;
    font-size: 25px;
    transition: 0.2s ease-out;
    cursor: pointer;
    &:hover {
      color: ${Color.ICON_HOVER_COLOR};
      transition: 0.2s ease-in;
    }
  }
`;
