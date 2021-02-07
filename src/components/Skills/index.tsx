import React from "react";

import EmojiContainer from "../../components/EmojiContainer";
import { skills } from "../../assets/skills/skills";
import {
  Container,
  Image,
  ImageContainer,
  Header,
  MainContainer,
} from "../../styles/SkillsStyle";

const Skills = () => (
  <MainContainer>
    <Header>
      <h2>
        My skills
        <EmojiContainer emoji="🤓" label="nerd face emoji" />
      </h2>
    </Header>
    <Container>
      {skills.map((item) => (
        <ImageContainer key={item.id}>
          <a href={item.link} target="blank">
            <Image src={item.image} alt={item.title}></Image>
          </a>
          <h2>{item.title}</h2>
        </ImageContainer>
      ))}
    </Container>
  </MainContainer>
);

export default Skills;
