import styled from "styled-components";

import { TextColor } from './colors';

export const Main = styled.main`
    height: 93vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: ${TextColor.BACKGROUND_COLOR};
`;