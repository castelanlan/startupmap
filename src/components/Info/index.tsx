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
        <Esquerda className="coluna">
          <Conteudo>
            <Filtro>
              {/* ... */}
            </Filtro>
            <h1>Texto na esquerda</h1>
          </Conteudo>
        </Esquerda>
        <Direita className="coluna">
          <Pesquisa />
          <Conteudo>
            <h1>Texto na direita</h1>
          </Conteudo>
        </Direita>
      </Painel>
    </Container>
  );
};

export default Info;
