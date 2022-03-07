import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import ScrollToTop from "react-scroll-to-top";
import { Fragment } from "react";
import Resume from "./components/Resume/Resume";
import Contact from "./components/Contact/Contact";

const ScrollIconCss = { color: "#fff", padding: "10px", background: "#240b36" };
function App() {
  return (
    <Fragment>
      <Navbar />
      <ScrollToTop smooth component={<p style={ScrollIconCss}>UP</p>} />
      <About />
      <Skills />
      <Projects />
      <Resume />
      <Contact />
    </Fragment>
  );
}

export default App;
