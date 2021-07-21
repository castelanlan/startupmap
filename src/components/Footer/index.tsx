import React from "react";

import {
  Container,
  Coluna,
  DivColunas
} from "./styles";

const Footer: React.FC = () => {
  return (
    <Container>
      <DivColunas>
        <Coluna>
          <strong>titulo 1</strong>
          <p>Coluna 1</p>
        </Coluna>

        <Coluna>
          <strong>titulo 2</strong>
          <p>Coluna 2</p>
        </Coluna>

        <Coluna>
          <strong>titulo 3</strong>
          <p>Coluna 3</p>
        </Coluna>

        <Coluna>
          <strong>titulo 4</strong>
          <p>Coluna 4</p>
        </Coluna>
      </DivColunas>
    </Container>);
};

export default Footer;
