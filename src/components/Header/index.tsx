import React from "react";
import Modal from 'react-modal';


import {
  Container,
  NavBar,
  LinksRow,
  LoginStartUpBox,
  LoginStartUpButton
} from "./styles";





const Header: React.FC = () => {

  // https://www.npmjs.com/package/react-modal
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function abreModal() {
    setIsOpen(true);
    console.log("fecha modal")
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    console.log("aaasdasd")
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
          <LoginStartUpButton onClick={abreModal}>Procurar</LoginStartUpButton>
        </LoginStartUpBox>
      </NavBar>
    </Container>
  );
};



export default Header;
