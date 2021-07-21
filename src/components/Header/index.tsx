import React from "react";

import {
  Container, Wrapper,
  SMPIcon,
  SearchIcon,
  NavBar,
  NavRow,
  LinksDiv,
  LoginStartUpBox,
  LoginStartUpButton
} from "./styles";

const Header: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <NavBar>
          <SMPIcon />
          <LinksDiv>
            <NavRow>
              <a className="active" href="/">primeiro </a>
              <a href="/">segundo </a>
              <a href="/">terceiro </a>
            </NavRow>
          </LinksDiv>
          <SearchIcon />
        </NavBar>

        <LoginStartUpBox>
          <LoginStartUpButton />
        </LoginStartUpBox>

      </Wrapper>
    </Container>
  );
};

export default Header;
