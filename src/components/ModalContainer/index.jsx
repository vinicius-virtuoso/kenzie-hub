import React from "react";
import ModalEditar from "../Modals/ModalEditar";

import ModalCadastrar from "./../Modals/ModalCadastrar";

const ModalContainer = ({ editar, cadastrar, isOpen, onClose, tech }) => {
  return (
    <>
      {cadastrar && <ModalCadastrar isOpen={isOpen} onClose={onClose} />}
      {editar && <ModalEditar isOpen={isOpen} onClose={onClose} tech={tech} />}
    </>
  );
};

export default ModalContainer;
