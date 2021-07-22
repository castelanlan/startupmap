import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 2000px;
    display: grid;
    padding: 100px 100px;
    background-color: var(--color-orange);
`;

export const Painel = styled.div`
    width: 70%;
    display: grid;
    column-count: 2;
    grid-template-columns: 50fr 50fr;
    background-color: var(--color-orange);
`;

export const Esquerda = styled.div`
    color: var(--color-orange);
    box-shadow: 0 0 4px 4px rgb(255, 255, 255);
`;

export const Filtro = styled.div`
    margin: auto;
    text-align: right;
    background-color: var(--color-orange);
`;

export const Direita = styled.div`
    color: var(--color-orange);
    box-shadow: 0 0 4px 4px rgb(255, 255, 255);
`;

export const Pesquisa = styled.div``;

export const Conteudo = styled.div`
    > p {
        margin: 10px;
    }
`;