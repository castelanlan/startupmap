import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: white;
`;

export const Painel = styled.div`
    margin: auto;
    background-color: white;
    box-shadow: var(--panel-shadow);
    display: grid;
    grid-template-columns: 50fr 50fr;
`;

export const Esquerda = styled.div``;

export const Filtro = styled.div`
    background-color: white;
    margin: auto;
    text-align: right;
`;

export const Direita = styled.div``;

export const Pesquisa = styled.div``;

export const Conteudo = styled.div`
    > p {
        margin: 10px;
    }
`;