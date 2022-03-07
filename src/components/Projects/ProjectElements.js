import styled from "styled-components";

export const Container = styled.div`
  width: 85%;
  padding: 30px 10px;
  margin: 50px auto 120px auto;
  min-height: 550px;
  @media only screen and (max-width: 768px) {
    padding: 20px 0;
    margin-bottom: 20px;
  }
  @media only screen and (max-width: 425px) {
  }
`;

export const Head = styled.h2`
  color: #000;
  margin: auto;
  width: 90%;
  font-size: 2.5em;
  text-align: center;
  margin-bottom: 10px;
  font-family: 'Satisfy', cursive;
`;

export const FlexContainer = styled.div`
  place-items: center;
  margin: 30px auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap:wrap; 
  width: 100%;
  @media only screen and (max-width: 425px) {
    flex-direction:column;
  }
`;


export const Title = styled.h3`
  color: #fff;
  margin: 0;
  visibility: hidden;
  -webkit-transition-delay: 0.25s;
  transition-delay: 0.25s;
  -webkit-transform: translateY(10px);
  transform: translateY(10px);
  -webkit-transition: all 0.45s cubic-bezier(0.23, 0.88, 0.34, 0.99);
  transition: all 0.45s cubic-bezier(0.23, 0.88, 0.34, 0.99);
`;

export const Link = styled.a`
  position:absolute;
  left:30%;
  top:-50px;
  transform:translate(-50%,50%);

  visibility: hidden;
  color: #c6c9d8;;
  padding: 5px 15px;
  font-weight:700;
  display: inline-block;
  line-height: 34px;
  border: 2px solid #c6c9d8;
  border-radius: 4px;
  font-size: 1rem;
  position: relative;
  z-index: 2;
  letter-spacing: .2px;
  text-transform: uppercase;
  text-decoration:none;
  -webkit-transition: all 0.45s cubic-bezier(0.23, 0.88, 0.34, 0.99);
  transition: all 0.45s cubic-bezier(0.23, 0.88, 0.34, 0.99);
  -webkit-transform: translateY(10px);
  transform: translateY(10px);

  &:hover{
    background:#f9004d;
    border: 2px solid #f9004d;
  }
`;

export const Card = styled.div`
  width: 25%;
  border-radius: 20px;
  margin-top: 30px;
  margin: 20px;
  overflow: hidden;
  border-radius: 6px;
  position: relative;
  height: 200px;
  background: url(${({ url }) => url});
  background-blend-mode: multiply;
  position:relative;
  background-size:cover;
 
  &:hover {
    background-image: -webkit-gradient(
        linear,
        left top,
        left bottom,
        color-stop(0, #fc004d),
        to(#000)
      ),
      url(${({ url }) => url});
      transform: scale(1.05);
      transition:0.7s transform;
      ${Title}{
          visibility:visible;
         
      }
      ${Link}{
        visibility:visible;
       
    }
  }
  &:nth-child(1) {
  }
  @media only screen and (max-width: 768px) {
   width:40%;
  }
  @media only screen and (max-width: 425px) {
    width:90%;
  }
`;

export const CardFooter = styled.div`
    position: absolute;
    bottom: 15px;
    left: 10px;
    width: 100%;
    z-index: 2;
`;

