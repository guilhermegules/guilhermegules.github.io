import React from "react";

import {
  Section,
  AboutMe,
  Article,
  RoundedImage,
  Figure,
  TitleContainer,
} from "../../styles/InfoStyle";

const Info = () => (
  <Section>
    <AboutMe>
      <Figure>
        <RoundedImage src={require("../../assets/img/me.jpg")} alt="Just me" />
      </Figure>
      <TitleContainer>
        <h1>Guilherme Gules Moreira</h1>
        <h2>Front-end developer</h2>
      </TitleContainer>
    </AboutMe>
    <Article>
      <p>
        Passionate about solving problems and get better on my coding skills
      </p>
      <p>
        System analysis and development student, front end developer, currently
        studying React, React Native, Vue, Nodejs and Angular. But always ready
        to learn new things.
      </p>
    </Article>
  </Section>
);

export default Info;
