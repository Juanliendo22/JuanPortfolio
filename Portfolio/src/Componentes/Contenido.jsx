// src/components/Contenido.jsx

import React from "react";
import "./Contenido.css";
import Github from "../assets/Github.png";
import Atom from "../assets/Atom.png";
import Branch from "../assets/Branch.png";
import Css from "../assets/Css.png";
import Figma from "../assets/Figma.png";
import Html5 from "../assets/Html5.png";
import Js from "../assets/Js.png";
import vs from "../assets/vs.png";
import Bootstrap from "../assets/Bootstrap.png";
import Tooltip from "./Tooltip"; // Asegúrate de importar el componente Tooltip

const Contenido = () => {
  return (
    <div className="Content">
      <p>
        <strong>About Me</strong>
        <br /> I am a budding web developer passionate about <br />
        creating dynamic web applications. I have experience in JavaScript,
        <br />
        React, HTML, and CSS, and I am continuously learning to improve my
        <br />
        skills. I have also explored Python and Bootstrap to better understand
        <br />
        the tools and frameworks in web development.
        <br />
      </p>
      <div className="skills">
        <h2>My Skills</h2>
        <div className="insignias">
          <Tooltip skill="Github" message="Conozco mucho">
            <img src={Github} alt="Github" />
          </Tooltip>
          <Tooltip skill="Branch" message="Conozco poco">
            <img src={Branch} alt="Branch" />
          </Tooltip>
          <Tooltip skill="VS Code" message="Conozco bastante">
            <img src={vs} alt="vs" />
          </Tooltip>
          <Tooltip skill="HTML5" message="Conozco mucho">
            <img src={Html5} alt="Html5" />
          </Tooltip>
          <Tooltip skill="CSS" message="Conozco mucho">
            <img src={Css} alt="Css" />
          </Tooltip>
          <Tooltip skill="JavaScript" message="Conozco bastante">
            <img src={Js} alt="Js" />
          </Tooltip>
          <Tooltip skill="Figma" message="Conozco poco">
            <img src={Figma} alt="Figma" />
          </Tooltip>
          <Tooltip skill="Atom" message="Conozco poco">
            <img src={Atom} alt="Atom" />
          </Tooltip>
          <Tooltip skill="Bootstrap" message="Conozco bastante">
            <img src={Bootstrap} alt="Bootstrap" />
          </Tooltip>
        </div>
      </div>
    </div>
  );
};

export default Contenido;
