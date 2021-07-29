import React from "react";
import Modal from 'react-modal';


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
  overlay: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.75)'
  },
  content: {
    backgroundColor: 'var(--color-ababab)',
    border: 'solid 1px',
    display: 'block',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
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
          <a href="/">possiveis </a> {/*fix: Mudar href para as paginas certas*/}
          <a href="/">futuros </a>
          <a href="/">links </a>
          <a href="/">lorem ipsum</a>
        </LinksRow>

        <LoginStartUpBox id="div_login">
          <LoginStartUpButton id="bt_login" onClick={openModal}>Cadastrar start up</LoginStartUpButton>
          <Modal id="modal" isOpen={modalIsOpen} onAfterOpen={afterOpenModal} onRequestClose={closeModal} style={estiloModal}>
            <form id="form" action="/cadastrar"> {/* não sei as rotas*/}

              <label htmlFor="nome">Nome da sua start up: </label>
              <input type="text" id="in_nstartup" name="nome" placeholder="Necessário" /> <br />

              <label htmlFor="fundadores">Nome dos fundadores: </label>
              <input type="text" id="in_nfunds" name="fundadores" placeholder="Necessário" /> <br />

              <label htmlFor="email">Email: </label>
              <input type="text" id="in_email" name="email" placeholder="Do dono ou da startup" /> <br />

              <label htmlFor="site">Site: </label>
              <input type="text" id="in_site" name="site" placeholder="Opcional" /> <br />

              <OkButton>Cadastrar<OkIcon /></OkButton>
            </form>
          </Modal>
        </LoginStartUpBox>
      </NavBar>
    </Container>
  );
};

export default Header;