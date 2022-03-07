import React from "react";
import { Container, Head } from "./ResumeElements";
import resume from "../../components/myResume.pdf"
const Resume = () => {
  return (
    <Container id="resume">
      <Head>My Resume</Head>
      <iframe
        src={resume}
        width="80%"
        height="500px"
       
      ></iframe>
    </Container>
  );
};

export default Resume;
