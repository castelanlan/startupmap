import React from 'react';
import { ReactNode } from 'react';

import { Container } from './styles';

interface InfoProps {
  children: ReactNode;
}

const Info: React.FC = () => {
  return (
    <Container>
      <p>Parágrafo</p>
    </Container>
  );
};

export default Info;
