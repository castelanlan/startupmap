import React from 'react';
import { ReactNode } from 'react';

import {
  Container,
  FotoStartUp
} from './styles';

import bingus from '../../assets/precious_bingus.png'

interface StartUpsProps {
  children: ReactNode;
}

const StartUps: React.FC = () => {
  return (
    <Container>
      <FotoStartUp>
        <img alt="Foto" src={bingus} />
      </FotoStartUp>
    </Container>
  );
};

export default StartUps;
