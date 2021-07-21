import React from "react";
import Modal from 'react-modal';
import { css } from "styled-components";


import {
  Container,
  NavBar,
  LinksRow,
  LoginStartUpBox,
  LoginStartUpButton
} from "./styles";

Modal.setAppElement('#root')

const estiloModal = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  },
};


// fixme: aparentemente funções de flecha não são mais
// recomendas, só que funcionam
const Header: React.FC = () => {

  // https://www.npmjs.com/package/react-modal
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
    console.log("abre modal")
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    console.log("depois do modal aberto")
  }

  function closeModal() {
    setIsOpen(false);
    console.log("fecha modal")
  }

  return (
    <Container>
      <NavBar>
        <LinksRow>
          <a className="active" href="/">primeiro </a>
          <a href="/">segundo </a>
          <a href="/">terceiro </a>
        </LinksRow>

        <LoginStartUpBox>
          <LoginStartUpButton onClick={openModal}>Cadastre sua start up aqui!</LoginStartUpButton>
          <Modal isOpen={modalIsOpen} onAfterOpen={afterOpenModal} onRequestClose={closeModal} style={estiloModal}>
            <form action="/">
              <label htmlFor="nstartup">Nome da sua start up</label>
              <input type="text" id="in_nstartup" name="nomeStartUp" placeholder="Necessário" />
              <label htmlFor="nfunds">Nome dos fundadores</label>
              <input type="text" id="in_nfunds" name="nFunds" placeholder="Necessário" />
              <label htmlFor="email">Email</label>
              <input type="text" id="in_email" name="email" placeholder="Do dono ou da startup" />
              <label htmlFor="site">Site</label>
              <input type="text" id="in_site" name="site" placeholder="Opcional" />
            </form>
          </Modal>
        </LoginStartUpBox>
      </NavBar>
    </Container>
  );
};

export default Header;