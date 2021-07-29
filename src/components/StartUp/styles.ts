import styled from 'styled-components';

import { HiOutlineLocationMarker } from 'react-icons/hi';

export const Container = styled.div``;

export const PinIcon = styled(HiOutlineLocationMarker)`
    color: var(--color-ababab);
`;

export const StartUpSection = styled.div`
    position: relative;
    display: flex;
    padding: 10px;
    margin: 14px 0;
    background-color: var(--color-bg);
`;

export const Foto = styled.div`
    > .foto {
        max-width: 20vw;
        max-height: 20vw;
        resize: both;
        /* height: auto;
        width: auto; */
    }

`;

export const Texto = styled.div`
    display: flex;
    flex-direction: column;
    margin: 14px !important; // D:
`;

export const Nome = styled.div`
    > p {
        font-size: 30px;
        margin: 7px;
        background-color: orange;
        color: black;
        padding: 7px;
        border-radius: 1.5px;
    }
`;

export const Lugar = styled.div`
    margin: 7px !important;
    display: flex;
    height: auto;

    > p {
        font-size: 15px;
        color: var(--color-ababab);
        margin: 0;
        margin-left: 5px;
    }
`;

export const Descricao = styled.div`
    margin: 0 7px 0 7px !important;

    > p {
        background-color: orange;
        color: black;
        font-size: 20px;
        padding: 7px;
        border-radius: 1.5px;
    }
`;

export const BotaoContato = styled.button`
    position: absolute;
    bottom: 0;
    margin: 7px 7px 14px 7px !important;
    min-width: 60px;
    min-height: 2vw;
    background-color: var(--color-green);
    border: none;
    color: black;
    font-weight: 600;
    border-radius: 1.5px;
`;