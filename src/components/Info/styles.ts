import styled from 'styled-components';

export const Container = styled.div`
    display: grid;
    background-color: var(--color-orange);
    padding: 0 100px;
    height: 400px;
    width: 80%;
`;

export const Painel = styled.div`
    width: 70%;
    background-color: var(--color-orange);
    display: grid;
    grid-template-columns: 50fr 80fr;
`;

export const Esquerda = styled.div`
    color: var(--color-orange);
    box-shadow: 0 0 4px 4px rgb(255, 255, 255);
`;

export const Filtro = styled.div`
    background-color: var(--color-orange);
    margin: auto;
    text-align: right;
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