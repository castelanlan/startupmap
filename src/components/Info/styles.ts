import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 1000px; /* fix: arrumar footer imedia */
    display: grid;
    padding: 7% 5%;
    background-color: var(--color-orange);
`;

export const Painel = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 30fr 70fr;

    > .coluna {
        padding: 20px;
        background-color: #2e2b3b;
        /* text-align: auto; */
    }
`;

export const Esquerda = styled.div`
`;

export const Direita = styled.div`
    border-left: 20px solid var(--color-bg);
`;

export const Filtro = styled.div``;

export const Pesquisa = styled.div``;

export const Conteudo = styled.div`
    padding: 7px;
    border-left: 4px solid var(--color-green);
    box-shadow: 0 0 3px 1px var(--color-bg);
    clip-path: inset(-1px -1px -1px 0px); /* tirar sombra da esquerda */

    > h2 {
        font-size: 25px;
    }
`;