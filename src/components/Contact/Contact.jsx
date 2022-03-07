import React from "react";
import {
  Card,
  CardContainer,
  Container,
  Head,
  Icon,
  Text,
  Title,
} from "./ContactComponents";
import {  FiHeadphones} from "react-icons/fi";
import { HiOutlineMail ,HiOutlineLocationMarker } from "react-icons/hi"
const Contact = () => {
  return (
    <Container id="contact">
      <Head>Contact Me</Head>
      <CardContainer>
        <Card>
          <Icon><FiHeadphones /></Icon>
          <Title>Contact with Phone Number</Title>
          <Text>(+91)9328003668</Text>
        </Card>
        <Card>
            <Icon><HiOutlineMail /></Icon>
          <Title>Email Address</Title>
          <Text>
            <a href="mailto:nandinipanchani@gmail.com">
              nandinipanchani@gmail.com
            </a>
          </Text>
        </Card>

        <Card>
            <Icon><HiOutlineLocationMarker /></Icon>
          <Title>Location</Title>
          <Text>
            Junagadh(362001)
            <br />
            Gujarat
          </Text>
        </Card>
      </CardContainer>
    </Container>
  );
};

export default Contact;
