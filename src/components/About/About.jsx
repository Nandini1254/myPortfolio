import React from "react";
import MyPhoto from "../../images/me.jpeg";
import Fade from "react-reveal/Fade";
import {
  AboutLeft,
  AboutLeftImg,
  Container,
  AboutRight,
  H2,
  P,
  PText,
} from "./AboutComponents";

const About = () => {
  return (
    <Container id="about">
    
      <AboutLeft>
        <AboutLeftImg src={MyPhoto}></AboutLeftImg>
      </AboutLeft>
      <AboutRight>
        <Fade bottom cascade>
          <H2>Hello, I am Nandini Panchani</H2>
          <P>FullStack Devloper</P>
          <PText>
            I am Third year student currently pursuing my B Tech. degree in
            Computer Engineering. I am from Junagadh city. Web Development is my
            main field of Interest. I have also have interset in management of
            things. Apart from technologies, I love to watch drama in different
            languages... and learn some words of them it make my day whenever I
            watch.
          </PText>
        </Fade>
      </AboutRight>
    </Container>
  );
};

export default About;
