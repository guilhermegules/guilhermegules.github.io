import React from "react";
import { FiGithub, FiLinkedin, FiBookmark } from "react-icons/fi";
import { Container } from "../../styles/ContactStyle";

const Contact = () => (
  <Container>
    <a href="https://github.com/guilhermegules" target="blank">
      <FiGithub />
    </a>
    <a href="https://www.linkedin.com/in/guilhermegules/" target="blank">
      <FiLinkedin />
    </a>
    <a href="https://medium.com/@guilhermegules" target="blank">
      <FiBookmark />
    </a>
  </Container>
);

export default Contact;
