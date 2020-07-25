import React from "react";

import { Section, AboutMe, Article, RoundedImage, Figure } from "../../styles/InfoStyle";

const Info = () => (
  <Section>
    <AboutMe>
      <Figure>
        <RoundedImage src={require('../../assets/img/me.jpg')} alt="Just me" />
      </Figure>
      <div>
        <h1>Guilherme Gules Moreira</h1>
        <h2>Front-end developer</h2>
      </div>
    </AboutMe>
    <Article>
      <p>Passionate about solving problems.</p>
      <p>
        System analysis and development student, front end developer, currently
        studying React, React Native, Vue, Nodejs and Angular. But always ready to learn new things.
      </p>
    </Article>
  </Section>
);

export default Info;
