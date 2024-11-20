import React from "react";
import "../styles/main-inicio.scss";
const MainsContainer = () => {
  return (
    <main className="mainInicio">
      <div className="containerPrimerTexto">
        <h1>Bienvenidos a I love the fishes</h1>
        <p>Tu sitio web confiable sobre peces 🐠 y animales marinos.</p>
      </div>

      <div className="pecesPopulares">
        <h2>
          Peces populares
        </h2>
        <div className="containerTarjetas">
          <div className="tarjetas">
            <figure>
                  <img src="https://agustingomez12.github.io/baseDeImagenes/img/pez-betta.webp" alt="" />
            </figure>
            <p>
                Pez betta uno de los peces mas populares en el mundo de la acuario filia por sus 
                cuidados faciles y exentricos colores.
            </p>
          </div>
          <div className="tarjetas">
          <figure>
                  <img src="https://agustingomez12.github.io/baseDeImagenes/img/pez-betta.webp" alt="" />
            </figure>
          </div>
          <div className="tarjetas">
          <figure>
                  <img src="https://agustingomez12.github.io/baseDeImagenes/img/pez-betta.webp" alt="" />
            </figure>
          </div>
          <div className="tarjetas">
          <figure>
                  <img src="https://agustingomez12.github.io/baseDeImagenes/img/pez-betta.webp" alt="" />
            </figure>
          </div>
          <div className="tarjetas">
          <figure>
                  <img src="https://agustingomez12.github.io/baseDeImagenes/img/pez-betta.webp" alt="" />
            </figure>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainsContainer;
