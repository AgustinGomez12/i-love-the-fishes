import React from "react";
import logo from "../assets/logo_del_sitio_web_de_peces_con_el_texto_I_love_the_fishes-removebg-preview.png";
const Footer = () => {
  return (
    <footer>
      <div className="container-logYexpli">
        <figure>
          <img src={logo} alt="" />
        </figure>
        <p>
          Bueno, has llegado al final del sitio web. Esperamos haber sido de
          gran ayuda en tu investigación sobre peces y acuarios. Nos encanta
          compartir nuestra pasión por el mundo marino contigo, y esperamos que
          hayas encontrado toda la información que necesitabas para iniciarte en
          este fascinante hobby.
        </p>
      </div>
      <div className="container-imgFooter">
        <img
          src="https://agustingomez12.github.io/baseDeImagenes/img/un%20fondo%20marino%20realista%20y%20lindo.png"
          alt=""
        />
      </div>
    </footer>
  );
};

export default Footer;
