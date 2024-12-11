import React from "react";
import "../styles/main-inicio.scss";
import { NavLink } from "react-router-dom";
const MainsContainer = () => {
  return (
    <main className="mainInicio">
      <div className="containerPrimerTexto">
        <h1>Bienvenidos a I love the fishes</h1>
        <p>Tu sitio web confiable sobre peces 🐠 y animales marinos.</p>
      </div>

      <div className="pecesPopulares">
        <h2>Peces populares</h2>
        <div className="containerTarjetas">
          <div className="tarjetas">
            <figure>
              <NavLink>
                {" "}
                <img
                  src="https://agustingomez12.github.io/baseDeImagenes/img/pez-betta.webp"
                  alt=""
                />
              </NavLink>
            </figure>
            <p>
              Pez betta uno de los peces mas populares en el mundo de la acuario
              filia por sus cuidados faciles y exentricos colores.
            </p>
          </div>
          <div className="tarjetas">
            <figure>
              <NavLink>
                {" "}
                <img
                  src="http://127.0.0.1:5500/img/realistic%20discus%20fish%20design.png"
                  alt=""
                />
              </NavLink>
            </figure>
            <p>
              Pez disco es conocido por su forma circular y sus patrones de
              colores impresionantes.
            </p>
          </div>
          <div className="tarjetas">
            <figure>
              <NavLink>
                {" "}
                <img
                  src="https://agustingomez12.github.io/baseDeImagenes/img/realistic%20goldfish%20with%20a%20black%20background,%20not%20in%20an%20aquarium,%20single%20specimen.png"
                  alt=""
                />
              </NavLink>
              <p>
              El pez goldfish, conocido científicamente como Carassius auratus, es uno de los peces ornamentales más populares y apreciados en el mundo de la acuariofilia
              </p>
            </figure>
          </div>
          <div className="tarjetas">
            <figure>
              <NavLink>
                {" "}
                <img
                  src="https://agustingomez12.github.io/baseDeImagenes/img/realistic%20tetra%20fish.png"
                  alt=""
                />
              </NavLink>
            </figure>
            <p>
            Es uno de los peces ornamentales más populares en acuarios de agua dulce,este pez es conocido por sus brillantes colores y su naturaleza pacífica.
            </p>
          </div>
          
        </div>
      </div>
    </main>
  );
};

export default MainsContainer;
