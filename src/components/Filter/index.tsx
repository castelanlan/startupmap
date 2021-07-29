import React from 'react';

import { ReactNode } from 'react';

import {
  Container,
  ItemList,
  ListItem,
  Title
} from './styles';

interface FilterProps {
  children: ReactNode;
}

const Filter: React.FC = () => {
  return (
    <Container>
      <ItemList> {/* ul */}
        <Title>Local</Title>
        <ListItem>Criciúma</ListItem>
        <ListItem>Forquilhinha</ListItem>
        <ListItem>Içara</ListItem>
        <ListItem>etc...</ListItem>
      </ItemList>
      <ItemList>
        <Title>Área</Title>
        <ListItem>Metalurgia</ListItem>
        <ListItem>Administração</ListItem>
        <ListItem>Tecnologia</ListItem>
        <ListItem>Advocacia</ListItem>
        <ListItem>etc</ListItem>
      </ItemList>
    </Container>
  );
};

export default Filter;
