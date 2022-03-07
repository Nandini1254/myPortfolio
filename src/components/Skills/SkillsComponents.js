import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin-top: 100px;
  padding: 0 100px;
  padding-top:50px;
  .Slider{
    height:max-content;
    background:#F2F2F0;
  }
  @media only screen and (max-width: 768px) {
    padding: 20px;
    margin-bottom:20px;
  }
  @media only screen and (max-width: 425px) {
  }
`;

export const Head = styled.h2`
  color: #000;
  margin: auto;
  width: 100%;
  border-bottom: 2px solid #c6c9d8;
  font-size: 2.5em;
  text-align:center;
  margin-bottom:10px;
  font-family: 'Satisfy', cursive;
`;
export const HeadTitle = styled.h3`
  color: #f89745;
  font-size: 2em;
  text-align:center;
`;
export const FlexContainer = styled.div`
  place-items: center;
  margin-top: 20px;
  margin-bottom: 50px;
  display:flex;
  flex-wrap:wrap;
  justify-content: space-evenly;
 
  align-items: center;
  width:100%;
  padding:0 100px;
  @media only screen and (max-width: 425px) {
    padding:0px;
  }
`;

export const CardContainer = styled.div`
  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
  padding:20px 40px;
  text-align:center;
  margin:30px auto;
  background:#F2F2F0 !important;
  
  @media only screen and (max-width: 425px) {
    width:90%; 
  }
  &:hover{
    transform: scale(1.05);
    transition:0.7s transform;
    
  }
`;

export const Card = styled.div`
  height: 100px;
  color: #000;
  margin: 50px 20px;
  text-align: center;
  width: 100px;
  display: inline-block;
  align-self: center;
  flex: 0 0 calc(16.66% - 20px);
  &:nth-child(1) {
    margin-left:0;
  }
  @media only screen and (max-width: 425px) {
    width:70px;
  }
`;

export const CardImg = styled.img`
  margin: auto;
  width: 100%;
  height: 100%;
  @media only screen and (max-width: 425px) {
    width: 50px;
  }
`;

export const CardFooter = styled.h3`
font-size:0.85em;
font-family: 'Nunito', sans-serif;
  @media only screen and (max-width: 425px) {
    overflow: hidden;
    font-size:1em;
  }
`;
