import React from "react";
import Modal from 'react-modal';
import { css } from "styled-components";

import {
  Container,
  NavBar,
  LinksRow,
  LoginStartUpBox,
  LoginStartUpButton,
  OkButton,
  OkIcon
} from "./styles";

Modal.setAppElement('#root')

const estiloModal = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    display: 'inline-block',
  },
  input: { // ?????????? galeris como que estiliza modal / filhos do modal 
    width: '100%',
    padding: '12px 20px',
    margin: '8px 0',
    display: 'block',
    border: '1px solid #ccc',
    borderRadius: '4px',
    boxSizing: 'border-box',
    backgroundColor: '#000000'
  }
};

// fixme: aparentemente funções de flecha não são mais
// recomendadas, só que funcionam
const Header: React.FC = () => {

  // https://www.npmjs.com/package/react-modal
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() { setIsOpen(true); }
  function closeModal() { setIsOpen(false); }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    console.log("depois do modal aberto")
  }

  return (
    <Container>
      <NavBar>
        <LinksRow> {/* remoção talvez necessária considerando que isso vai ser de página única*/}
          <a className="active" href="/">primeiro </a> {/*fix: Mudar href para as paginas certas*/}
          <a href="/">segundo </a>
          <a href="/">terceiro </a>
        </LinksRow>

        <LoginStartUpBox>
          <LoginStartUpButton onClick={openModal}>Cadastre sua start up aqui!</LoginStartUpButton>
          {/* <ModalDiv> */}
          <Modal isOpen={modalIsOpen} onAfterOpen={afterOpenModal} onRequestClose={closeModal} style={estiloModal}>
            <form action="/post/cadastrar?"> {/* não sei as rotas*/}

              <label htmlFor="nstartup">Nome da sua start up</label>
              <input type="text" id="in_nstartup" name="nomeStartUp" placeholder="Necessário" />

              <label htmlFor="nfunds">Nome dos fundadores</label>
              <input type="text" id="in_nfunds" name="nFunds" placeholder="Necessário" />

              <label htmlFor="email">Email</label>
              <input type="text" id="in_email" name="email" placeholder="Do dono ou da startup" />

              <label htmlFor="site">Site</label>
              <input type="text" id="in_site" name="site" placeholder="Opcional" />

              <OkButton>Cadastrar start up<OkIcon /></OkButton>
            </form>
          </Modal>
          {/* </ModalDiv> */}
        </LoginStartUpBox>
      </NavBar>
    </Container>
  );
};

export default Header;