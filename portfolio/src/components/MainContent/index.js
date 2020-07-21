import React from "react";
import Info from "../Info";

import { Main } from "../../styles/MainContentStyle";
import Contact from "../Contact";
import Navigation from "../Navigation";

const MainContent = () => (
  <Main>
    <Navigation />
    <Info />
    <Contact />
  </Main>
);

export default MainContent;
/**
 * 
 *  <section class="main-content">
        <div class="main-info">
          <figure class="photo-container">
            <img class="photo" src="./img/me.jpg" alt="Just me" />
          </figure>
          <h1 class="title">Guilherme Gules Moreira</h1>
          <h2 class="subtitle">Front-end developer</h2>
        </div>
        <article class="resume">
          <p>Passionate about solving problems.</p>
          <p>
            System analysis and development student, front end developer,
            currently studying React, React Native, Vue, Nodejs and Angular.
          </p>
        </article>
        <figure>
          <a
            href="https://www.linkedin.com/in/guilhermegules/"
            class="fa fa-linkedin-square icon"
          ></a>
          <a
            href="https://github.com/guilhermegules"
            class="fa fa-github-square icon"
          ></a>
          <a
            href="https://www.instagram.com/guilhermethegules/"
            class="fa fa-instagram icon"
          ></a>
          <a
            href="https://www.facebook.com/guilhermegules"
            class="fa fa-facebook-official icon"
          ></a>
        </figure>
      </section>
 */
