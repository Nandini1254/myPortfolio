import styled from "styled-components";

export const Container = styled.div`
  height: 600px;
  width: 100%;
  display: flex;
  padding-top: 150px;
  @media only screen and (max-width: 768px) {
   
  }
  @media only screen and (max-width: 425px) {
    flex-direction: column;
    height:800px;
  }
`;
export const AboutLeft = styled.div`
  width: 50%;
  height: inherit;
  border: none;
  height: 95%;
  backgrond: red;
  text-align: center;
  /* RESPONSIVE */
  @media only screen and (max-width: 768px) {
    margin-top: 50px;
  }
  @media only screen and (max-width: 425px) {
    height: 60%;
    width: 100%;
  }
`;

export const AboutLeftImg = styled.img`
  width: 70%;
  height:100%;
  object-fit: cover;
  border-radius: 50%;
  @media only screen and (max-width: 768px) {
  }
  @media only screen and (max-width: 425px) {
    margin-top: 350px;
    height:70%;
  }
`;

export const AboutRight = styled.div`
  width: 50%;
  @media only screen and (max-width: 425px) {
    width: 100%;
    position: absolute;
    top:150px;
  }
`;

export const H2 = styled.h2`
  letter-spacing: 3px;
  color: #3d1627;
  font-size: 2em;
  margin-top: 50px;
  @media only screen and (max-width: 768px) {
    font-size: 1.5em;
    text-align: center;
    margin-top: -50px;
  }
  @media only screen and (max-width: 425px) {
    font-size: 1.5em;
  }
`;
export const P = styled.p`
  letter-spacing: 3px;
  color: #ff4856;
  font-size: 1.5em;
  margin-left: 20px;
  @media only screen and (max-width: 768px) {
    font-size: 1.2em;
    font-weight: 600;
    text-align: center;
    margin-bottom: 20px;
  }
  @media only screen and (max-width: 425px) {
  }
`;

export const PText = styled.p`
  letter-spacing: 1px;
  font-size: 1em;
  margin-left: 20px;
  width: 90%;
  @media only screen and (max-width: 768px) {
    font-size: 1.2em;
    font-weight: 600;
    text-align: center;
    margin-bottom: 20px;
  }
  @media only screen and (max-width: 425px) {
  }
`;
