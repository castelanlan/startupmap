import React from 'react';
import { ReactNode } from 'react';

import StartUps from '../StartUps';

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
        <Esquerda className="coluna"> {/* :o */}
          <Conteudo>
            <Filtro>
              {/* ... */}
            </Filtro>
            <h2>Título na esquerda</h2>
          </Conteudo>
        </Esquerda>
        <Direita className="coluna">
          <Pesquisa />
          <Conteudo>
            <h2>Título na direita</h2>
            <StartUps></StartUps>
          </Conteudo>
        </Direita>
      </Painel>
    </Container>
  );
};

export default Info;
