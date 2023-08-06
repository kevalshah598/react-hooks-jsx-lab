import React from "react";
import { image } from "../data/data";

function About() {
  return (
    <div>
      About
      <h2>About Me</h2>
      <p>This is me!</p>
      <img src={image} alt="I made this"/>
    </div>)
}

export default About;
