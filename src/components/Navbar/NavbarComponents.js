import styled from "styled-components";
import { Link, animateScroll as scroll1 } from "react-scroll";

export const NavLink = styled(Link)`
  font-size: 18px;
  font-weight: 600;
  padding: 20px 10px;
  margin: 0 10px;
  &:hover {
    color: #f9004d;
    border-top: 2px solid #f9004d;
  }
`;
export const Head = styled.div`
  display: none;
  @media only screen and (max-width: 425px) {
    display: block;
  }
`;

export const Menu = styled.div`
  transition: 1s ease;
 
  .head{
    color: #c31432;
  }
  ${(props) => {
    if (props.color == true)
      return `
    background: #c31432;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to top, #240b36, #ee076e);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to top, #240b36, #ee076e); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    
      color: #c6c9d8;
      ${NavLink}:hover {
        color: #fff;
        border-top: 2px solid #fff;
      }
      .active {
        color: #fff;
        border-top: 2px solid #fff;
      }
      .head{
        color:#fff;
      }
  `;
  }}

  @media only screen and (max-width: 425px) {
    ${NavLink}:hover {
      color: #fff;
      border: none;
    }
    .active {
      color: #fff;
      border: none;
    }
  }
`;
export const FullNav = styled.div`
  display: flex;
  color: #a1a1a1;
  transition: 0.4s all ease;
  position: fixed;
  height: 80px;
  width: 100%;
  align-items: center;
  z-index: 2000;
  .active {
    color: #f9004d;
    border-top: 2px solid #f9004d;
  }
  ${(props) => {
    if (props.color === true)
      return `
      background: #c31432;  /* fallback for old browsers */
      background: -webkit-linear-gradient(to top, #240b36, #ee076e);  /* Chrome 10-25, Safari 5.1-6 */
      background: linear-gradient(to top, #240b36, #ee076e); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
      
        color: #c6c9d8;
        ${NavLink}:hover {
          color: #fff;
          border-top: 2px solid #fff;
        }
        .active {
          color: #fff;
          border-top: 2px solid #fff;
        }
    `;
  }}
  @media only screen and (max-width: 425px) {
    display: none;
  }
`;
export const LeftMenu = styled.div`
  margin-left: 50px;
  display: flex;
  width: 70%;
  @media only screen and (max-width: 425px) {
    flex-direction: column;
    text-align: right;
  }
`;

export const RightMenu = styled.div`
  display: flex;
  justify-content: right;
  width: 30%;
  padding-right: 50px;
  @media only screen and (max-width: 425px) {
    width: 100%;
    align-items: center;
    position: absolute;
    bottom: 70px;
  }
`;

export const Icon = styled.a`
  margin: 20px;
  font-size: 1.2em;
  font-weight: 700;
  text-decoration: none;
  color: #c6c9d8;
  transition: 0.5s ease;
  &:hover {
    color: #fff;
  }
`;

//responsive sidebar

export const IconBar = styled.div`
  padding: 5px;
  width: 35px;
  height: 35px;
  margin: 20px;
  font-size: 1.5em;
  font-weight: 700;
  text-decoration: none;
  color: #c6c9d8;
  transition: 0.5s ease;
  display: none;
  position: fixed;
  right: 20px;
  top: 0px;

  ${(props) => {
    if (props.color === true)
      return `
      background: #ee076e;  
     
    `;
  }}
  &:hover {
    color: #fff;
  }
  @media only screen and (max-width: 425px) {
    display: block;
  }
`;
export const SideNav = styled.div`
  padding-top: 80px;
  display: none;

  @media only screen and (max-width: 425px) {
    display: block;
    z-index: 2;
    width: 70%;
    height: 100vh;
    position: fixed;
    right: 0;

    background: #c31432; /* fallback for old browsers */
    background: -webkit-linear-gradient(
      to top,
      #240b36,
      #ee076e
    ); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(
      to top,
      #240b36,
      #ee076e
    ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    color: #c6c9d8;

    ${NavLink}:hover {
      color: #fff;
      border: none;
    }
    .active {
      color: #fff;
      border: none;
    }
  }
`;
