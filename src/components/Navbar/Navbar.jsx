import {
  Menu,
  LeftMenu,
  NavLink,
  RightMenu,
  Icon,
  IconBar,
  FullNav,
  SideNav,
  Head,
} from "./NavbarComponents";
import { useState } from "react";
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { VscThreeBars } from "react-icons/vsc";
import { AiOutlineClose } from "react-icons/ai";
// for scrolling

const Navbar = () => {
  const [colorChange, setColorchange] = useState(false);
  const [toggle, setToggle] = useState(true);
  const changeNavbarColor = () => {
    if (window.scrollY >= 90) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);
  return (
    <>
      <Menu color={colorChange}>
        <Head>𝓜𝔂𝓟𝓸𝓻𝓽𝓕𝓸𝓵𝓲𝓸</Head>
        <FullNav color={colorChange}>
          <LeftMenu>
            <NavLink
              to="/"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="head"
            >
              𝓜𝔂𝓟𝓸𝓻𝓽𝓕𝓸𝓵𝓲𝓸
            </NavLink>
            <NavLink
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              activeClass="active"
            >
              About Me
            </NavLink>
            <NavLink
              to="skills"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              activeClass="active"
            >
              My Skills
            </NavLink>
            <NavLink
              to="projects"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              activeClass="active"
            >
              Projects
            </NavLink>
            <NavLink
              to="resume"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              activeClass="active"
            >
              Resume
            </NavLink>
            <NavLink
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              activeClass="active"
            >
              Contact Me
            </NavLink>
          </LeftMenu>
          <RightMenu>
            <Icon href="https://github.com/Nandini1254/" target="_blank">
              <FiGithub />
            </Icon>
            <Icon
              href="https://www.linkedin.com/in/nandini-panchani-bb700b1b1/"
              target="_blank"
            >
              <FaLinkedinIn />
            </Icon>
            <Icon href="https://www.instagram.com/nirali_041/" target="_blank">
              <FaInstagram />
            </Icon>
          </RightMenu>
        </FullNav>

        <IconBar onClick={() => setToggle(!toggle)} color={colorChange}>
          {toggle ? <VscThreeBars /> : <AiOutlineClose />}
        </IconBar>
        {!toggle && (
          <SideNav color={colorChange}>
            <IconBar onClick={() => setToggle(!toggle)}>
              {toggle ? <VscThreeBars /> : <AiOutlineClose />}
            </IconBar>
            <LeftMenu>
              <NavLink
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                activeClass="active"
              >
                About Me
              </NavLink>
              <NavLink
                to="skills"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                activeClass="active"
              >
                My Skills
              </NavLink>
              <NavLink
                to="projects"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                activeClass="active"
              >
                Projects
              </NavLink>
              <NavLink
                to="resume"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                activeClass="active"
              >
                Resume
              </NavLink>
              <NavLink
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                activeClass="active"
              >
                Contact Me
              </NavLink>
            </LeftMenu>
            <RightMenu>
              <Icon href="https://github.com/Nandini1254/" target="_blank">
                <FiGithub />
              </Icon>
              <Icon
                href="https://www.linkedin.com/in/nandini-panchani-bb700b1b1/"
                target="_blank"
              >
                <FaLinkedinIn />
              </Icon>
              <Icon
                href="https://www.instagram.com/nirali_041/"
                target="_blank"
              >
                <FaInstagram />
              </Icon>
            </RightMenu>
          </SideNav>
        )}
      </Menu>
    </>
  );
};
export default Navbar;
