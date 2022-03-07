import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  margin: auto;
  margin-top: 100px;
  padding: 10px 50px;
  padding-top: 50px;
  height: 650px;
  //   background: #f8f9fc;
  @media only screen and (max-width: 768px) {
    padding: 20px;
    margin-bottom: 20px;
  }
  @media only screen and (max-width: 425px) {
      margin-bottom:100px;
  }
`;

export const Head = styled.h2`
  color: #000;
  margin: auto;
  width: 100%;
  font-size: 2em;
  text-align: center;
  margin-bottom: 10px;
  margin-top:50px;
  font-family: 'Satisfy', cursive;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 50px;
  @media only screen and (max-width: 768px) {
  }
  @media only screen and (max-width: 425px) {
    flex-direction: column;
    padding:20px;
    margin-bottom:50px;
  }
  
`;

export const Card = styled.div`
  margin-top: 30px;
  border: 1px solid #ebebeb;
  border-radius: 10px;
  background: #fff;
  padding: 30px 20px;
  width: 30%;
  height: 150px;
  position: relative;

  a {
    text-decoration: none;
    color: #d99;
  }
  @media only screen and (max-width: 768px) {
  }
  @media only screen and (max-width: 425px) {
    width:100%;
  }
`;

export const Icon = styled.div`
  width: 50px;
  background: #fff;
  height: 50px;
  border-radius: 50%;
  color: #f99;
  position: absolute;
  top: -25px;
  left: 30px;
  font-size: 2em;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #f99;

  ${Card}:hover & {
    background: #d99;
    color: #fff;
  }
`;

export const Title = styled.h2`
  font-size: 1.2em;
  margin: 10px 0;
  @media only screen and (max-width: 768px) {
  }
  @media only screen and (max-width: 425px) {
    font-size: 1em;
  }
`;

export const Text = styled.h5`
  font-size: 1em;
  color: #d99;
  margin-left: 20px;
`;
