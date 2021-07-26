import React from 'react';
import { ReactNode } from 'react';

import StartUp from '../StartUp';

import {
  Container,
  Painel,
  Esquerda,
  Filtro,
  Direita,
  Pesquisa,
  Titulo,
} from './styles';

interface InfoProps {
  children: ReactNode;
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

            <form className="f_pesquisar">
              <input className="input_pesq" type="text" placeholder="Pesquise start ups"></input>
            </form>
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