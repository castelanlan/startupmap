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
  Lugar,
  PinIcon,
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
        <Lugar><PinIcon /><p>Criciúma, SC</p></Lugar>
        <Descricao><p>Descrição da startup</p></Descricao>
        <BotaoContato>Contato</BotaoContato>

      </Texto>
    </StartUpSection>
  );
}

const { useState, Fragment } = React // https://stackoverflow.com/questions/51404335/append-a-react-component-in-another-on-button-click
const AddedElement = () => {
  return (<StartUp />);
}

const Info: React.FC = () => {

  const [count, setCount] = useState(0)

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

          <Fragment>
            <button onClick={() => setCount(count + 1)}>Adicionar start up</button>
            {[...Array(count)].map((_, i) => <AddedElement key={i} />)} {/* direto do so*/}
          </Fragment>

          <StartUp />
        </Direita>
      </Painel>
    </Container>
  );
};

export default Info;