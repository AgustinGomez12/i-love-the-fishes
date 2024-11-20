import React from "react";
import logo from "../assets/logo_del_sitio_web_de_peces_con_el_texto_I_love_the_fishes-removebg-preview.png";
const Logo = () => {
  return (
    <div className="containerLogo">
      <figure>
        <img src={logo} alt="" />
      </figure>
    </div>
  );
};

export default Logo;
