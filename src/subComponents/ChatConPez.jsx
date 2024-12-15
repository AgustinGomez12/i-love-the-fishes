import React from "react";

const ChatConPez = ({ setChatPez }) => {
  //Funcion para Cerrar el chat
  const cerrarChat = () => {
    setChatPez(false);
  };
  //Funcion para Cerrar el chat

  return (
    <div className="ChatConPez">
      <p className="IntroduccionHabla">
        Hola, bienvenido. Me llamo DocPayaso. ¿En qué puedo ayudarte?
      </p>
      <div className="container-opciones">
        <p className="opciones">
          <strong>Enfermedades</strong>
        </p>
        <p className="opciones">
          <strong>Tamaño del acuario</strong>
        </p>
        <p className="opciones">
          <strong>Niveles de PH y GH</strong>
        </p>
        <button onClick={cerrarChat}>Cerrar chat</button>
      </div>
    </div>
  );
};

export default ChatConPez;
