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

        <LoginStartUpBox>
          <LoginStartUpButton onClick={openModal}>Cadastrar start up</LoginStartUpButton>
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
        </LoginStartUpBox>
      </NavBar>
    </Container>
  );
};

export default Header;