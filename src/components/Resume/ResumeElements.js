import styled from "styled-components";

export const Container = styled.div`
  background: #ffeffc;
  width: 90%;
  margin: auto;
  margin-top: -100px;
  padding: 100px 50px;
  padding-top: 50px;
  height: 700px;
  box-shadow: rgba(50, 50, 105, 0.15) 0px 2px 5px 0px,
    rgba(0, 0, 0, 0.05) 0px 1px 1px 0px;
  text-align: center;

  @media only screen and (max-width: 768px) {
    padding: 20px;
    margin-bottom: 20px;
  }
  @media only screen and (max-width: 425px) {
    padding: 10px;
    margin-top: 50px;
    height: 600px;
  }
`;

export const Head = styled.h2`
  color: #000;
  margin: auto;
  width: 100%;
  font-size: 2.5em;
  text-align: center;
  margin-bottom: 10px;
  font-family: 'Satisfy', cursive;
`;
