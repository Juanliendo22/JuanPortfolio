// src/components/Footer.jsx

import React from "react";
import "./Projects.css"; // Importa los estilos para el footer
import tuwebi from "../assets/tuwebi.png";
import Ae from "../assets/Ae.png";
import okto from "../assets/okto.png";

const Projects = () => {
  const projects = [
    {
      id: 1,
      img: tuwebi,
      alt: "Tuwebi Project",
      description:
        "Consiste en la pagina web de un emprendimiento que crea paginas web, del cual soy una de las personas que forman parte del proyecto",
    },
    {
      id: 2,
      img: okto,
      alt: "Okto Project",
      description:
        "Fue una pagina para un cliente real de TuWebi, la cual tuve que realizar desde 0",
    },
    {
      id: 3,
      img: Ae,
      alt: "Ae Project",
      description: "Consiste en una herramienta para AmericanExpress",
    },
  ];

  return (
    <div id="projects" className="ProjectsMain">
      <h3>My projects</h3>
      <div className="ContenedorCajas">
        {projects.map((project) => (
          <div key={project.id} className="Caja">
            <img src={project.img} alt={project.alt} />
            <div className="Description">
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
