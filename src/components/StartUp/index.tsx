import React from 'react';
import { ReactNode } from 'react';

import bingus from '../../assets/precious_bingus.png';

import {
  Container,
  StartUpSection,
  Foto,
  Texto,
  Nome,
  Descricao,
  Lugar,
  PinIcon,
  BotaoContato
} from './styles';

interface StartUpProps {
  children: ReactNode;
}

const StartUp = () => {
  return (
    <Container>
      <StartUpSection>
        <Foto>
          <img className="foto" alt="Foto" src={bingus} />
        </Foto>
        <Texto>

          <Nome>
            <p>Nome da start up</p>
            <Lugar>
              <PinIcon />
              <p>Criciúma - SC</p>
            </Lugar>
          </Nome>
          <Descricao><p> {/* 300 caracteres */}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas metus urna, vehicula ut augue a, aliquam malesuada diam. Sed risus risus, scelerisque non sodales eget, molestie quis dolor. Ut finibus facilisis turpis et molestie. Donec vehicula venenatis justo, et rutrum magna convallis at mauris.
          </p></Descricao>
          <BotaoContato>Entrar em contato</BotaoContato>

        </Texto>
      </StartUpSection>
    </Container>
  );
}
export default StartUp;
