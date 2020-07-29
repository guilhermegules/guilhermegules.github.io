import React from "react";
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
        <span role="img" aria-label="nerd face emoji">
          🤓
        </span>
      </h2>
    </Header>
    <Container>
      {skills.map((item) => (
        <ImageContainer>
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
