import React from 'react';
import { ReactNode } from 'react';

import bingus from '../../assets/precious_bingus.png';

import {
  Container,
  Painel,
  Esquerda,
  Filtro,
  Direita,
  Pesquisa,
  Titulo,
  StartUpSection,
  Foto,
  Texto,
  Nome,
  Descricao,
  BotaoContato
} from './styles';

interface InfoProps {
  children: ReactNode;
}

const StartUp = () => {
  return (
    <StartUpSection>
      <Foto>
        <img alt="Foto" src={bingus} width="300px" height="300px" />
      </Foto>
      <Texto>
        <Nome><p>Nome da start up</p></Nome>
        <Descricao><p>Descrição da startup</p></Descricao>
        <BotaoContato>Contato</BotaoContato>
      </Texto>
    </StartUpSection>

  );
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
          <StartUp />
          <StartUp />
          <StartUp />
        </Direita>
      </Painel>
    </Container>
  );
};

export default Info;