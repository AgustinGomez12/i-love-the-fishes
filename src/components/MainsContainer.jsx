import React from "react";
import "../styles/main-inicio.scss";
import { NavLink } from "react-router-dom";
const MainsContainer = () => {
  return (
    <main className="mainInicio">
      <div className="containerPrimerTexto">
        <h1>Bienvenidos a I love the fishes</h1>
        <p>
          Tu sitio web confiable sobre peces 🐠 y animales marinos. Aquí
          encontrarás todo lo que necesitas saber sobre el fascinante mundo
          acuático, desde las especies más comunes hasta las más exóticas.
          Aprenderás sobre sus hábitats naturales, comportamientos, y
          curiosidades únicas. Además, te brindamos consejos prácticos para el
          cuidado de tu acuario, guías detalladas para la identificación de
          especies.
        </p>
        <video width="100%" height="100%" autoPlay loop muted>
          <source
            src="https://agustingomez12.github.io/baseDeImagenes/img/pecesVideo.mp4"
            type="video/mp4"
          />
        </video>
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
                  src="https://agustingomez12.github.io/baseDeImagenes/img/realistic%20discus%20fish%20design.png"
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
                El pez goldfish, conocido científicamente como Carassius
                auratus, es uno de los peces ornamentales más populares y
                apreciados en el mundo de la acuariofilia
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
              Es uno de los peces ornamentales más populares en acuarios de agua
              dulce,este pez es conocido por sus brillantes colores y su
              naturaleza pacífica.
            </p>
          </div>
        </div>
      </div>

      <div className="videoIntrudcutorio-cotainer">
        <h2>¿ Como armar un acuario ?</h2>

        <div className="armadoAcuario-facil">
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/zCwDklPkYqM?si=RfeiuVcdkSQVRdMe"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
          <p>
            En este video del canal de YouTube{" "}
            <a href="https://www.youtube.com/@AcuariosRtules">
              Acuarios Rtules
            </a>
            , aprenderás cómo montar un acuario básico para principiantes en
            este hobby. El video cubre desde la selección del equipo adecuado
            hasta la introducción de los peces, proporcionando consejos
            prácticos y recomendaciones paso a paso para asegurar que tu acuario
            se convierta en un entorno saludable y bello para tus nuevas
            mascotas acuáticas.
          </p>
        </div>

        <div className="armadoAcuario-dificil">
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/kVwKeELQdsU?si=FeKCyu65LbOnL3C4"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
          <p>
            En este video del canal de YouTube{" "}
            <a href="https://www.youtube.com/@AcuariosMB">Acuarios MB</a>,
            aprenderás a armar un acuario marino desde cero. Este tutorial cubre
            todos los aspectos esenciales, desde la elección del equipo adecuado
            hasta la configuración y el mantenimiento de tu nuevo acuario
            marino. Es ideal para principiantes que desean sumergirse en este
            fascinante hobby acuático.
          </p>
        </div>
      </div>
    </main>
  );
};

export default MainsContainer;
