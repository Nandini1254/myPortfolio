import React from "react";
import data from "../data";
import {
  Card,
  CardContainer,
  CardFooter,
  CardImg,
  Container,
  FlexContainer,
  Head,
  HeadTitle,
} from "./SkillsComponents";

const Skills = () => {
  return (
    <Container id="skills">
      <Head>Skills</Head>

      <CardContainer key={0}>
        <HeadTitle>Languages</HeadTitle>
        <FlexContainer>
          {data.skills.languages.map((e, index) => {
            return (
              <Card key={index}>
                <CardImg src={e.img}></CardImg>
                <CardFooter>{e.name}</CardFooter>
              </Card>
            );
          })}
        </FlexContainer>
      </CardContainer>
      <CardContainer key={1}>
        <HeadTitle>FrameWorks</HeadTitle>
        <FlexContainer>
          {data.skills.frameWork.map((e, index) => {
            return (
              <Card key={index} odd={index % 2}>
                <CardImg src={e.img}></CardImg>
                <CardFooter>{e.name}</CardFooter>
              </Card>
            );
          })}
        </FlexContainer>
      </CardContainer>
    </Container>
  );
};

export default Skills;
