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
    margin-bottom: 14px;
    border-left: 20px solid var(--color-bg);
    border-radius: ${raioBorda}; // fix: ñ usar margem pra fazer a divisão...
`;

export const Titulo = styled.div`
    padding: 0.5px;
    border-left: 4px solid var(--color-green);
    box-shadow: 0 0 3px 1px var(--color-bg);
    clip-path: inset(-1px -1px -1px 0px); /* tirar sombra da esquerda */

    > h2 {
        margin: 10px;
        font-size: 25px;
    }
`;

export const Filtro = styled.div``;

export const Pesquisa = styled.div``;

// start up
export const StartUpSection = styled.div`
    display: flex;
    width: auto;
    padding: 10px;
    margin: 14px 0;
`;

export const Foto = styled.div`
`;

export const Texto = styled.div`
    display: grid;
    align-items: flex-start;
    margin: 28px !important; // D:
    width: 100%;
    height: 100%;
    text-align: left;
`;

export const Nome = styled.div`
    > p {
        font-size: 30px
    }
`;

export const Descricao = styled.div`
    > p {
        font-size: 20px;
    }
`;

export const BotaoContato = styled.button`
    margin: 10px;
    width: 20%;
`;