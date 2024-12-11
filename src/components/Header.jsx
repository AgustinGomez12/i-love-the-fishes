import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import Logo from "../subComponents/Logo";
import BotonHambur from "../subComponents/BotonHambur";
import Navbar2 from "./Navbar2";

const Header = () => {
  //Funcion Navbar para dispositivos moviles
  const [largoUl, setLargoUl] = useState(0);

  const aumentarTamañoUl = () => {
    if (largoUl === 200) {
      setLargoUl(0);
    } else {
      setLargoUl(largoUl + 200);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth === 760) {
        setLargoUl(80);
      } else {
        setLargoUl(0);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  //Funcion Navbar para dispositivos moviles

  //Funcion para tablests,coputadora y tv
  const [ulPatalla, setUlPantalla] = useState("flex");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth === 760) {
        setLargoUl(80);
      } else {
        setLargoUl(0);
      }
      if (window.innerWidth >= 770) {
        setUlPantalla("flex");
      } else {
        setUlPantalla("none");
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="headerRaiz">
      <Logo />
      <BotonHambur aumentarTamañoUl={aumentarTamañoUl} />
      <NavBar largoUl={largoUl} />
      <Navbar2 ulPatalla={ulPatalla} />
    </header>
  );
};

export default Header;
