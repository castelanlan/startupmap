import styled from 'styled-components';

const raioBorda = "4px";

export const Container = styled.div`
    width: 100%;
    min-height: 1000px; /* fix: arrumar footer */
    display: grid;
    padding: 7% 5%;
    background-color: var(--color-orange);
    margin-bottom: 50px;
`;

export const Painel = styled.div`
    display: grid;
    grid-template-columns: 30fr 70fr;

    > .coluna {
        padding: 20px;
        background-color: #2e2b3b;
    }
`;

export const Esquerda = styled.div`
    border-top-left-radius: ${raioBorda};
    border-bottom-left-radius: ${raioBorda};
`;

export const Direita = styled.div`
    border-left: 20px solid var(--color-bg);
    border-radius: ${raioBorda}; // fix: ñ usar margem pra fazer a divisão...
`;

export const Titulo = styled.div`
    padding: 7px;
    border-left: 4px solid var(--color-green);
    box-shadow: 0 0 3px 1px var(--color-bg);
    clip-path: inset(-1px -1px -1px 0px); /* tirar sombra da esquerda */

    > h2 {
        font-size: 25px;
    }
`;

export const Filtro = styled.div``;

export const Pesquisa = styled.div``;

export const StartUpSection = styled.div``;

export const Foto = styled.div``;
export const Texto = styled.div``;
export const Nome = styled.div``;
export const Descricao = styled.div``;
export const BotaoContato = styled.div``;