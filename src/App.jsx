import { useState } from "react";


import "./App.css";

import Navbar from "./components/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div className="pagina-uno">
        <Navbar />
        <div className="contenedor-presentacion">
          <div className="presentacion-uno">
            <h1>Hola </h1> <br />
            <h2 className="titulo">Soy Yandy Briceño</h2>
          </div>

          <div className="presentacion-dos">
            <h2>Full-Stack Web-Developer</h2>
          </div>

          <div className="button">
            <button className="Contact-me-btn">Contactame</button>
          </div>
          <div className="icons">
            <i className="fa-brands fa-github fa-3x"></i>

            <i className="fa-brands fa-linkedin-in fa-3x"></i>
          </div>
        </div>

        <img className="abc" src="./img/barrita.webp" alt="" />
      </div>
      <div className="second-container">
      


      </div>
    </div>
  );
}

export default App;
