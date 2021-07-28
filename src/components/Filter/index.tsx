import React from 'react';

import { ReactNode } from 'react';

import {
  Container,
  ItemList,
  ListItem
} from './styles';

interface FilterProps {
  children: ReactNode;
}

const Filter: React.FC = () => {
  return (
    <Container>
      <ItemList> {/* ul */}
        <ListItem>abcde</ListItem>
        <ListItem>abcdef</ListItem>
        <ListItem>abcdefg</ListItem>
        <ListItem>abcdefgh</ListItem>
      </ItemList>
    </Container>
  );
};

export default Filter;
