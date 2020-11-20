import React from "react";
import { skills } from "../../assets/skills/skills";
import {
  Container,
  Image,
  ImageContainer,
  Header,
  MainContainer,
  EmojiContainer,
} from "../../styles/SkillsStyle";

const Skills = () => (
  <MainContainer>
    <Header>
      <h2>
        My skills
        <EmojiContainer role="img" aria-label="nerd face emoji">
          🤓
        </EmojiContainer>
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
