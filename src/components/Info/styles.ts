import styled from 'styled-components';

const raioBorda = "4px";

export const Container = styled.div`
    width: 100%;
    min-height: 1000px; /* fix: arrumar footer */
    display: grid;
    padding: 7% 5%;
    margin: 5% 0 5% 0;
    background-color: var(--color-bg);
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
    display: flex;
    flex-direction: column;
    border-top-left-radius: ${raioBorda};
    border-bottom-left-radius: ${raioBorda};
`;

export const Direita = styled.div`
    border-left: 20px solid var(--color-bg);
    border-radius: ${raioBorda}; // fix: ñ usar margem pra fazer a divisão...
`;

export const Titulo = styled.div`
    margin-bottom: 14px;
    color: white;
    padding: 0.5px;
    border-left: 4px solid var(--color-green);
    box-shadow: 0 0 3px 1px var(--color-bg);
    clip-path: inset(-1px -1px -1px 0px); /* tirar sombra da esquerda */
    background-color: var(--color-bg);

    > h2, form {
        margin: 10px;
        font-size: 25px;
    }

    > .f_pesquisar {
        > .input_pesq {
            background-color: var(--color-bg);
            color: white;
            font-size: 25px;
            width: 100%;
            border: none;
        }

        > .input_pesq:focus {
            outline: none;
            color: var(--color-ababab);
        }
    }
`;