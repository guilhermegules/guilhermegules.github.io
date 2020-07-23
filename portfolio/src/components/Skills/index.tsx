import React from "react";

const numbers = [1, 2, 3];
// TODO add all icons 
const Skills = () => (
  <section>
    <ul>
      {numbers.map((number) => (
        <li>{number}</li>
      ))}
    </ul>
  </section>
);

export default Skills;
