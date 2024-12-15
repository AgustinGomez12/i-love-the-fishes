import React, { useState } from 'react';
import ChatConPez from '../subComponents/ChatConPez';

const DocNemo = () => {
  //Estado para El chat con el pez
  const [chatPez, setChatPez] = useState(false);
  //Estado para El chat con el pez

  //Funcion para activar al bot
  const abrirChat = () => {
    setChatPez(true);
  };
  //Funcion para activar al bot
  
  return (
    <div className='DocNemo'>
      {chatPez && <ChatConPez setChatPez={setChatPez} />}
      <figure onClick={abrirChat}>
        <img src="https://agustingomez12.github.io/baseDeImagenes/img/un_pez_payaso_animado_con_un_fondo_blanco_y_un_gorrito_de_doctor-removebg-preview.png" alt="Pez payaso animado con gorrito de doctor" />
      </figure>
    </div>
  );
}

export default DocNemo;
