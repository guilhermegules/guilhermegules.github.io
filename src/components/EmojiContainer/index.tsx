import React, { FC } from "react";
import styled from "styled-components";

const Emoji = styled.span`
  margin-left: 10px;
`;

const EmojiContainer: FC<{ emoji: string; label: string }> = ({
  emoji,
  label,
}) => (
  <Emoji role="img" aria-label={label}>
    {emoji}
  </Emoji>
);

export default EmojiContainer;
