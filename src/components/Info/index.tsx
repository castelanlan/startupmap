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
  Titulo
} from './styles';

interface InfoProps {
  children: ReactNode;
}

const Info: React.FC = () => {
  return (
    <Container>
      <Painel>
        <Esquerda className="coluna"> {/* :o */}
          <Titulo>
            <Filtro>
              {/* ... */}
            </Filtro>
            <h2>Filtros</h2>
          </Titulo>
        </Esquerda>
        <Direita className="coluna">
          <Pesquisa />
          <Titulo>
            <h2>Start Ups</h2>
          </Titulo>
          <StartUps></StartUps>
          <StartUps></StartUps>
          <StartUps></StartUps>
        </Direita>
      </Painel>
    </Container>
  );
};

export default Info;
