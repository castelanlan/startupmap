import React from "react";
import Modal from 'react-modal';


import {
  Container,
  NavBar,
  LinksRow,
  LoginStartUpBox,
  LoginStartUpButton
} from "./styles";

Modal.setAppElement('#root')




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
          <LoginStartUpButton onClick={openModal}>Procurar</LoginStartUpButton>
          <Modal isOpen={modalIsOpen} onAfterOpen={afterOpenModal} onRequestClose={closeModal}>
            <p>texto texto texto</p>
          </Modal>
        </LoginStartUpBox>
      </NavBar>
    </Container>
  );
};



export default Header;
