import React from "react";
import data from "../data";
import {
  Card,
  CardFooter,
  Container,
  FlexContainer,
  Head,
  Link,
  Title,
} from "./ProjectElements";
import Zoom from 'react-reveal/Zoom';
const imageURL = [
  {
    url: "https://media.istockphoto.com/photos/table-top-view-of-spicy-food-picture-id1316145932?b=1&k=20&m=1316145932&s=170667a&w=0&h=feyrNSTglzksHoEDSsnrG47UoY_XX4PtayUPpSMunQI=",
  },
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLT3_4azYlY7ABsWawmuV6esRfOVt0VQdkWA&usqp=CAU",
  },
  {
    url: "https://images.pexels.com/photos/69432/pexels-photo-69432.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
  },
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxSS3gqYCXsh3jpY-ctR38HnlHzeezbwIT-Q&usqp=CAU",
  },
  {
    url: "https://d16kd6gzalkogb.cloudfront.net/magazine_images/Buying-Art-Onilne-Image-via-pinterestcom.jpg",
  },
];

const Projects = () => {
  return (
    <Container id="projects">
      <Head>Projects</Head>
      <Zoom>
  <FlexContainer>
        {data.projects.map((e,key) => {
          return (
            
            <Card url={imageURL[key].url} key={key}>
              <CardFooter>
                <Link href={e.url} target="_blank">
                  Source
                </Link>
                <Title>{e.title}</Title>
              </CardFooter>
            </Card>
       
          );
        })}
      </FlexContainer>
      </Zoom> 
    </Container>
  );
};

export default Projects;
