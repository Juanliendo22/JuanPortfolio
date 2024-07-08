// App.tsx
import React from "react";
import Nav from "./Componentes/Nav.jsx";
import Main from "./Componentes/Main.jsx"; // Corrige la importación para que coincida con el archivo
import Contenido from "./Componentes/Contenido.jsx"; // Corrige la importación para que coincida con el archivo

const App = () => {
  return (
    <div>
      <Nav />
      <Main />
      <Contenido />
    </div>
  );
};

export default App;
