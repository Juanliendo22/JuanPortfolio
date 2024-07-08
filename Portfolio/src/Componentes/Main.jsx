// src/components/Main.jsx

import React, { useEffect, useState } from "react";
import "./Main.css";
import Yo from "../assets/yo.png";

const Main = () => {
  const [text, setText] = useState(""); // Estado para el texto de la máquina de escribir
  const fullText = "Hii,\nI’m Juan Liendo\nFrontEnd Developer.";

  useEffect(() => {
    let index = 0; // Índice de posición del texto
    const typingSpeed = 70; // Velocidad de escritura en ms

    const intervalId = setInterval(() => {
      setText((prevText) => prevText + fullText.charAt(index)); // Añadir un carácter al texto
      index++;
      if (index >= fullText.length) {
        clearInterval(intervalId); // Detener el intervalo cuando se completa el texto
      }
    }, typingSpeed);

    // Limpieza del intervalo en caso de que el componente se desmonte
    return () => clearInterval(intervalId);
  }, []);

  return (
    <main id="home" className="main-container">
      <div className="containerPrincipal">
        <div className="Text-container">
          <p>{text}</p>
        </div>
        <div className="Image-container">
          <img src={Yo} alt="Yo" />
        </div>
      </div>
      <button>Download my CV</button> {/* Corrige la ortografía de "CV" */}
    </main>
  );
};

export default Main;
