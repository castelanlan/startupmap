import React from 'react';
import { ReactNode } from 'react';

import {
  Container,
  Painel,
  Esquerda,
  Filtro,
  Direita,
  Pesquisa,
  Conteudo
} from './styles';

interface InfoProps {
  children: ReactNode;
}

const Info: React.FC = () => {
  return (
    <Container>
      <Painel>
        <Esquerda>
          <Filtro>
            <p>asdasd</p>
            {/* ... */}
          </Filtro>
          <p>texto na esquerda</p>
        </Esquerda>
        <Direita>
          <Pesquisa />
          <Conteudo>
            <p>texto na direita</p>
          </Conteudo>
        </Direita>
      </Painel>
    </Container>
  );
};

export default Info;
